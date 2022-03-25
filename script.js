var eventText;

$(".saveBtn").on('click', function(event) {

    eventText = $(".description").val();
    console.log(eventText);
    localStorage.setItem(".textarea",eventText);

});

$(window).on('load', function(event) { 

    console.log("You refreeshed!")
    eventText = localStorage.getItem("textarea");
    $(".textarea").val(eventText);

});

//Getting current time using moment()
var currentTime = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentTime);

//Converting current time to hours.
var currentTimeInHours = moment().hours();

//Compare current time in hours with id for each block to set the styling
$(".time-block").each( function() {

    var currentBlock = $(this).attr("id");
    // console.log(currentBlock);
    if(currentBlock == currentTimeInHours){

       $(this).addClass("present");

    } else if(currentBlock < currentTimeInHours) {

        $(this).addClass("past");

    } else { 
        
        $(this).addClass("future")
    }   

});




//1.Initialize p # current day with current time using moment.js
//2. Initialize function for the page that populates this Time
//3. Build out time blocks in html given the existing styling
//4. write an event handler for current time.
//5. Write an event listener that initiates comparision of time blocks with current time
//6. Write Function to compare timeblocks:
//6.1 If timeblock == past time, color it grey.
//6..2 if timeblock == current time, color it red
// 6.3 if timeblock == future time, color it green.
// 6.4 May be include this in the init as well
// 7 Write a func to set local storage by allowing user to add description
// 7.1 Identify html tag to use to allow user entry
// 7.2 .....
// 7.3 Save string to local storage upon click of button.
// 8. Write a function to get item to to keep value populated on screen.
// 8.1 ...
// 9 Tie both get/set items to init function.
//10. SEt a timeout to update time every 5 minutes and update class