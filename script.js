const daysText = document.querySelector('.days')
const hoursText = document.querySelector('.hours')
const minutesText = document.querySelector('.minutes')
const secondsText = document.querySelector('.seconds')


var countDownDate = new Date("Jul 20, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
   daysText.textContent = days
   hoursText.textContent = hours
   minutesText.textContent = minutes
   secondsText.textContent = seconds
    
  // If the count down is over, write some text 
  if (distance < 0) {
    daysText.textContent = 'E'
    hoursText.textContent = 'I'
    minutesText.textContent = 'D'
    secondsText.textContent = '😍'
  }
}, 1000);