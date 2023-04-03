// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  for()

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 
  //Event listener for saveBtn
  var saveBtn = $('.saveBtn');
  saveBtn.on("click", function() {
    var parentID = this.parentNode.id;
    var timeDesc = this.parentNode.children[1].value;
    console.log(parentID)
    console.log(timeDesc)
    //REVISIT THIS, IT DOES NOT WORK AS INTENDED
    localStorage.setItem(parentID, JSON.stringify())
    localStorage.setItem(timeDesc, JSON.stringify())
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function isPPF(time){
    timeArray = time.split('-');
    timeNum= timeArray[1];
    currentHour = dayjs().format('HH');
    if(timeNum>currentHour){
      return "future";
    }else if(timeNum<currentHour){
      return "past";
    }else if(timenum==currentHour){
      return "present";
    }else{
      return;
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var today = dayjs();
  $('#currentDay').text(today.format('MM-DD-YYYY'));
});
