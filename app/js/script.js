// Counter:

// Set the date we're counting down to
var countDownDate = new Date("Dec 24, 2022 23:59:00").getTime();

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

  // Add a zero before single number values: 
  if(days < 10) {
    days = '0' + days;
  }
  if(hours < 10) {
    hours = '0' + hours;
  }
  if(minutes < 10) {
    minutes = '0' + minutes;
  }
  if(seconds < 10) {
    seconds = '0' + seconds;
  }

  // Display the result in the element with id="counter" and the html for the rest of the elements
  // document.getElementById('counter').innerHTML = 
  // '<div class="count-num days-count">'    + days    + '<span class="count-num-inner"></span><div class="count-text">days</div></div>' + 
  // '<div class="count-num hours-count">'   + hours   + '<span class="count-num-inner"></span><div class="count-text">hours</div></div>' + 
  // '<div class="count-num minutes-count">' + minutes + '<span class="count-num-inner"></span><div class="count-text">minutes</div></div>' + 
  // '<div class="count-num seconds-count">' + seconds + '<span class="count-num-inner"></span><div class="count-text">seconds</div><div class="swing-bottom-fwd"></div></div>';

  document.getElementById('days-count').innerHTML = days;
  document.getElementById('hours-count').innerHTML = hours;
  document.getElementById('minutes-count').innerHTML = minutes;
  document.getElementById('seconds-count').innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);
