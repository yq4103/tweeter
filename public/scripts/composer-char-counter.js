
$(document).ready(function() {
  $("#tweet-text").on('input', function(event) {
    //console.log('this is the event', event); The on() method attaches one or more event handlers for the selected elements and child elements. The event is the input event, when a string is typed into the textbox, an array is created in the browser and the .length gets its lenth. # for id, . for class. The text() method sets or returns the text content of the selected elements.
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
