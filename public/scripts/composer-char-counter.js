$(document).ready(function() {
  //this function keeps track if the user tries to input more than 140 characters, if yes the number turns red
  $("#tweet-text").on('input', function(event) {
    //the event is the input event, when a string is inputted into the textbox, an array is created in the browser and the .length gets its lenth.
    const counter = event.target.value.length;
    const inputLength = 140 - counter;
    $(".special-counter").text(inputLength);
    if (inputLength < 0) {
      $(".special-counter").addClass('warning-text');
      
    }
    if (inputLength >= 0) {
      $(".special-counter").removeClass('warning-text');
    }
  });

});
