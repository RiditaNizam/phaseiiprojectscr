$(document).ready(function() {
    // More Info button on Events page
    $('[data-toggle="tooltip"]').tooltip();
});

var allBtn = document.getElementById('all');
var theater = document.getElementById('theater');
var sports = document.getElementById('sports');
var beauty = document.getElementById('beauty');
var film = document.getElementById('film');
var dance = document.getElementById('dance');
var music = document.getElementById('music');
var outdoor = document.getElementById('outdoor');
var allEvents = document.getElementsByClassName('card');

// Show all events
allBtn.addEventListener('click', () => {
    showEvent('all');
});

// Show only theater events
theater.addEventListener('click', () => {
    showEvent('theater')
});

// Show only beauty events 
beauty.addEventListener('click', () => {
    showEvent('beauty')
});

// Show only film events 
film.addEventListener('click', () => {
    showEvent('film')
});

// Show only fitness events 
sports.addEventListener('click', () => {
    showEvent('sports')
});

// Show only dance events 
dance.addEventListener('click', () => {
    showEvent('dance')
});

// Show only music events 
music.addEventListener('click', () => {
    showEvent('music')
});

// Show only outdoor events 
outdoor.addEventListener('click', () => {
    showEvent('outdoor')
});

function showEvent(choice) {
    // If choice is 'all'
    if (choice == "all") choice = "";
    
    for (var i = 0; i < allEvents.length; i++) {
        // Split class string into array
        var arr = allEvents[i].className.split(" ");
        // Remove all 'hide' classes from array
        while (arr.indexOf('hide') > -1) {
            arr.splice(arr.indexOf('hide'), 1);
        }
        // Join remaining elements of array into a string
        allEvents[i].className = arr.join(" ");

        // If event's classes does not include the choice, then hide that event 
        if (allEvents[i].className.indexOf(choice) === -1) {
            allEvents[i].className += " " + 'hide';
        }
    // End of loop
    }
}

// back to top button
var amountScrolled = 300;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.sf-back-to-top').fadeIn('slow');
    } else {
        $('a.sf-back-to-top').fadeOut('slow');
    }
});

$('a.sf-back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});
// end of back to top button