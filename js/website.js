 $(document).ready(function() {
     $('.parallax').parallax();
     $('.collapsible').collapsible();
     $(".button-collapse").sideNav();
     $('a[href^="#"]').on('click', function(e) {
         e.preventDefault();

         var target = this.hash;
         if (target != "#questions1" && target != "#questions2" && target != "#questions3") {
             var $target = $(target);

             $('html, body').stop().animate({
                 'scrollTop': $target.offset().top - 75
             }, 900, 'swing', function() {
                 window.location.hash = target;
             });
         }

     });
 });

 let timerId = setTimeout(function tick() {
     if (document.getElementById("fp").className == "card-panel blue-grey darken-2 pulse center-align hoverable")
         document.getElementById("fp").className = "card-panel teal pulse center-align hoverable";
     else if (document.getElementById("fp").className == "card-panel teal pulse center-align hoverable")
         document.getElementById("fp").className = "card-panel blue-grey darken-2 pulse center-align hoverable";
     timerId = setTimeout(tick, 500);
 }, 1000);

 function onhover(elem) {
     elem.className = elem.className.replace("darken-4", "darken-2");
 }

 function onnothover(elem) {
     elem.className = elem.className.replace("darken-2", "darken-4");
 }


 function getTimeRemaining(endtime) {
     var t = Date.parse(endtime) - Date.parse(new Date());
     var seconds = Math.floor((t / 1000) % 60);
     var minutes = Math.floor((t / 1000 / 60) % 60);
     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
     var days = Math.floor(t / (1000 * 60 * 60 * 24));
     return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
     };
 }

 function initializeClock(id, endtime) {
     var clock = document.getElementById(id);
     var daysSpan = clock.querySelector('.days');
     var hoursSpan = clock.querySelector('.hours');
     var minutesSpan = clock.querySelector('.minutes');
     var secondsSpan = clock.querySelector('.seconds');

     function updateClock() {
         var t = getTimeRemaining(endtime);

         daysSpan.innerHTML = t.days;
         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

         if (t.total <= 0) {
             clearInterval(timeinterval);
         }
     }

     updateClock();
     var timeinterval = setInterval(updateClock, 1000);
 }

 var deadline = 'January 20 2018 09:00:00 GMT+0530';
 initializeClock('clockdiv', deadline);
 