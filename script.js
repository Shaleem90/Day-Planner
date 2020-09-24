$(document).ready(function() {

    
    var currentDate = moment().format("MMMM Do YYYY, h:mm a");      
    $("#currentDay").append(currentDate);

    // Compare time slot to current time in order to change the color of the block
    function colorBlk() {

        var currentHour = moment().format('H');

      
        $(".eventRow").each(function() {
            var eventBlock = parseInt($(this).attr("value"));

            
            if (eventBlock < currentHour) {
                $(this).addClass("past");
            }else if (eventBlock == currentHour) {
                $(this).addClass("present");
            }else if (eventBlock > currentHour) {
                $(this).addClass("future");
            }
        })
    }


    colorBlk();

    
    $("#eventRow1").append(localStorage.getItem("9am Event"));
    $("#eventRow2").append(localStorage.getItem("10am Event"));
    $("#eventRow3").append(localStorage.getItem("11am Event"));
    $("#eventRow4").append(localStorage.getItem("12pm Event"));
    $("#eventRow5").append(localStorage.getItem("1pm Event"));
    $("#eventRow6").append(localStorage.getItem("2pm Event"));
    $("#eventRow7").append(localStorage.getItem("3pm Event"));
    $("#eventRow8").append(localStorage.getItem("4pm Event"));
    $("#eventRow9").append(localStorage.getItem("5pm Event"));

    // Input to enter events
    $("#eventRow1").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow1").text(eventAdd);
        // Save to Local Storage
        localStorage.setItem("9am Event", ($("#eventRow1").html()));
    });
    

    $("#eventRow2").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow2").text(eventAdd);
        
        localStorage.setItem("10am Event", ($("#eventRow2").html()));
    });

    $("#eventRow3").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow3").text(eventAdd);
        
        localStorage.setItem("11am Event", ($("#eventRow3").html()));
    });

    $("#eventRow4").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow4").text(eventAdd);
        
        localStorage.setItem("12pm Event", ($("#eventRow4").html()));
    });

    $("#eventRow5").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow5").text(eventAdd);
        
        localStorage.setItem("1pm Event", ($("#eventRow5").html()));
    });

    $("#eventRow6").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow6").text(eventAdd);
        
        localStorage.setItem("2pm Event", ($("#eventRow6").html()));
    });

    $("#eventRow7").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow7").text(eventAdd);
        
        localStorage.setItem("3pm Event", ($("#eventRow7").html()));
    });

    $("#eventRow8").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow8").text(eventAdd);
        
        localStorage.setItem("4pm Event", ($("#eventRow8").html()));
    });

    $("#eventRow9").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow9").text(eventAdd);
        
        localStorage.setItem("5pm Event", ($("#eventRow9").html()));
    });
});