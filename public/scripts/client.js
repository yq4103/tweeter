/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1630886204536
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1630972604536
  }
];

const createTweetElement = function (dataObj) {
  const article = `
  <section class="tweet-container">
    <div class="user-info">
      <div class="user-image">
        <img src="${dataObj.user.avatars}"></img>      
          <p>${dataObj.user.name}</p>
          </div>
        <p>${dataObj.user.handle}</p>
      </div>
    <article class="tweet-container-text">${dataObj.content.text}</article>
    <footer class="footer"><p><time class="timeago">${new Date(dataObj.created_at)}</time></p>
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



$(document).ready(function() {
  
  for (let dataObj of tweetData) {
    // create an HTML article with the data from the object
    const $tweet = createTweetElement(dataObj);

    // adding each article to the DOM (#pets-container)
    $(".tweets").prepend($tweet);
    
  }
});