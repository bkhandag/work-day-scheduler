//Defined global variables
var eventText;
var currentEventID;

//Getting current time using moment()
var currentTime = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentTime);

//Converting current time to hours.
var currentTimeInHours = moment().hours();

//Compare current time in hours with id for each time block to set the styling
$(".time-block").each( function() {

    var currentBlock = $(this).attr("id");

    //If the current block id = time in hours
    if(currentBlock == currentTimeInHours-5){

       $(this).addClass("present");

       //If the current block id is less than current time in hours
    } else if(currentBlock < currentTimeInHours-5) {

        $(this).addClass("past");

        //If neither first conditions are true then set class to future
    } else { 
        
        $(this).addClass("future")
    }   

});

//Event handler for clicking of save button after entering an event to be stored
$(".saveBtn").on('click', function(event) {
    
    //Store in variable the event is entered by the user
    eventText = $(event.currentTarget).siblings('.textarea').val();

    //Get the current event Id for the textarea which is a sibling of button pressed by user.
    currentEventID = $(event.currentTarget).siblings('.textarea').attr("id");

    //Store string (value) entered by user for the ID (key);
    localStorage.setItem(currentEventID, eventText);

});

//Function to execute upon loading of page
$(window).on('load', function(event) { 

    //Loop through textarea, for any id that has a value, getitem for each.
    $(".time-block").each( function() {

        //Get all event IDs for this class
        var currentEventID = $(this).attr("id");

        //Get value for the specified key from local storage
        var eventText = localStorage.getItem(currentEventID);
        //Apply the value to each ID
        $(this).text(eventText);
    })

});


