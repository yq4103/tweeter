
$(document).ready(function() {
  $("#tweet-text").on('input', function(event) {
    //The event is the input event, when a string is inputted into the textbox, an array is created in the browser and the .length gets its lenth.
    const counter = event.target.value.length;
    const inputLength = 140 - counter;
    $(".special-counter").text(inputLength);
    if (inputLength < 0) {
      $(".special-counter").addClass('warning-text');
      
    }
    if (inputLength > 0) {
      $(".special-counter").removeClass('warning-text');
    }
  });

});
