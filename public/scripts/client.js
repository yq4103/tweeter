/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//receives an array of tweets as JSON when called by the renderTweets function
const createTweetElement = function(dataObj) {
  //escape function for preventing "Cross-Site Scripting" (XS) attacks
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const article = `
  <section class="tweet-container">
    <div class="user-info">
      <div class="user-image">
        <img src="${dataObj.user.avatars}"></img>      
          <p>${dataObj.user.name}</p>
          </div>
        <p>${dataObj.user.handle}</p>
      </div>
    <article class="tweet-container-text">${escape(dataObj.content.text)}</article>
    <footer class="footer">
      <p>
      <time class="timeago" datetime="${jQuery.timeago(new Date(dataObj.created_at))}">${jQuery.timeago(new Date(dataObj.created_at))}</time>
      </p>
      <p>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </p>
    </footer>

  </section>
  `;

  return article;
};

// Append the articles to the section on the page
const renderTweets = function(tweetData) {

  $(".tweets").empty();
  for (let dataObj of tweetData) {
    // create an HTML article with the data from the object

    $(".tweets").prepend(createTweetElement(dataObj));
  }
};

//use jQuery to make a request to http://localhost:8080/tweets page and receive the array of tweets as JSON
const loadTweets = function() {

  $.ajax('/tweets', { method: "GET", datatype: "JSON" }).done(tweetData =>
  { renderTweets(tweetData); });
};

$(document).ready(function() {

  loadTweets();
  //timeago
  $("time.timeago").timeago();


  //AJAX for sending (POSTing) the tweet text to the server
  $(".form").submit((event) => {
    event.preventDefault();

    if ($(".special-counter").text() < 0) {
      return $(".errorOne").show();
    }
    
    if ($(".special-counter").text() == 140) {
      return $(".errorTwo").show();
    }

    $.ajax('/tweets', { method: 'POST', data: $(".form").serialize() }).done(() => { loadTweets(); $(".errorOne").hide(); $(".errorTwo").hide(); });
    
    //this clears the text box as the tweet is submitted
    $("#tweet-text").val("");
    //this returns the counter to 140 after the text box  is cleared
    $(".special-counter").text("140");

  });

});
