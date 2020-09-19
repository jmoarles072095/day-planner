// console.log(moment().format());
// console.log(moment().format("h A"));


// // TODO: Create one row with time, text area, and button using JQ
// // Here's the layout of what we need to make using JQ
// {
//     /* <div class="row  time-block">
//     <div class="col-md-2 hour">
//       9 AM
//     </div>
//     <textarea class="col-md-8 past">

//     </textarea>
//     <button class="col-md-2 saveBtn ">
//       Save
//     </button>
//     </div> */
// }


// // TODO: SHow the time on top of the calender, Using moment.js grab the time, and set the text of the P tag with the id of currentDay to be our time from moment.js
var today = moment();
var currentDate = today.format("hh:mm A MMM DD YYYY ");

// Set the date 
$("#currentDay").append("Date: " + currentDate);

// TODO:  Create an array to hold the hours that I need ["9 AM", "10 AM", "..." "12 PM" etc]
var hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

// // TODO: loop over my array of hours and create a div for row, create div for hours, textarea, and a button
for (i = 0; i < hours.length; i++) {
    var rows = $('<div>').addClass('row');
    var times = $('<div>').addClass('hour col-md-2').text(moment('9:00 AM', 'h A').add(i, 'hours').format('h A'));
    times.attr('data-time', moment('9:00 AM', 'h A').add(i, 'hours').format('hA'));
    var notes = $('<textarea>').addClass('col-md-8');
    var saveBtn = $('<button>').addClass('saveBtn col-md-2').html('<i class="fas fa-save"></i>');

    //append the rows into the cointainer 
    $('.container').append(rows);
    $(rows).append(times);
    $(times).after(notes);
    $(notes).after(saveBtn);


    // TODO:  give the elements the classes that they need e.g using an if statment we can check using moment.js to see if the hour that we're looping ove is past the current hour if so give the text area the class of past
    // // TODO: give the elements some content 

    if (today.isSame(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(notes).addClass('present');

        // // TODO: How can I compare the hours of my rows, to the current time? (Use moment.js get the current time and compare to the time that is being assigned to the row)

    } else if (today.isBefore(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(notes).addClass('future');

        // // TODO:  give the elements the classes that they need e.g using an if statment we can check using moment.js to see if the hour that we're looping ove is past the current hour if so give the text area the class of past

    } else if (today.isAfter(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(notes).addClass('past');
    }
}

// // TODO: Create click event listener for my buttons 

$('.saveBtn').on('click', function() {

    // // TODO:  give the elements the classes that they need e.g using an if statment we can check using moment.js to see if the hour that we're looping ove is past the current hour if so give the text area the class of past
    // // TODO:  Grab the value of the text are and save it to a var (I nedd to be able to save the text from the text area that is in the same row as my button)

    localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
        // // TODO: using localStorage.setItem save the text to local storage
    console.log(localStorage)
});

// // TODO: retrieve the data from local storage using localStorage.getItem and show them back on the text area that they belong to (How can i know what text from local storage goes to what text area?)

$(document).on("click", function() {
    hoursToSave = $('.hour').toArray();
    for (i = 0; i < hours.length; i++) {
        $(hoursToSave[i]).siblings('textarea').text(localStorage.getItem($(hoursToSave[i]).attr('data-time')));
    }
});