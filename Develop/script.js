/*
Author: Francis Jung
Date:   4/6/2023
*/

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Initializes each block by checking the relative time and to see if there is any saved data in local storage.
$(function () {
  for(var i=0; i<9; i++){
    var slot = document.getElementById("parent-container").children[i];
    slot.classList.add(isPPF(slot.id));
    hasSavedData("hour-"+i);
  }

  //Event listener for saveBtn. On click it will save the id and text content of the desired section.
  $('.saveBtn').on("click", function() {
    var parentID = this.parentNode.id;
    var timeDesc = this.parentNode.children[1].value;
    localStorage.setItem(parentID, timeDesc)
  });

  //Checks the time of the desired id and compares it to the current time, then returns whether it is in the past, present, or future.
  function isPPF(time){
    timeArray = time.split('-');
    timeNum= timeArray[1];
    console.log(timeNum)
    currentHour = dayjs().format('HH');
    if(timeNum>currentHour){
      console.log("future");
      return "future";
    }else if(timeNum<currentHour){
      console.log("past");
      return "past";
    }else if(timeNum==currentHour){
      console.log("present");
      return "present";
    }else{
      return;
    }
  }

  //Checks local storage to see if there is a saved string for the desired hour, if there is it will apply that string to the text area of the page.
  function hasSavedData(hour){
    if(localStorage.getItem(hour)!=null){
      getElementById(hour).children[1].textContent= localStorage.getItem(hour);
    }
  }

  //Prints the data at the top of the page
  var today = dayjs();
  $('#currentDay').text(today.format('MM-DD-YYYY'));
});
