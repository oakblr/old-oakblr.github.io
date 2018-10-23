 $(document).ready(function() {
  $('.parallax').parallax();
  $('.collapsible').collapsible();
  /*
  $('.button-collapse').sideNav({
   edge: 'left', 
   closeOnClick: true, 
   draggable: true, 
   onOpen: function(el) {
    
   }, 
  }); */
  $(".button-collapse").sideNav();

  $('a[href^="#"]').on('click', function(e) {
   e.preventDefault();

   var target = this.hash;
   if (target != "#questions1" && target != "#questions2" && target != "#questions3" && target != "#dates" && target != "#terms") {
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

 var deadline = 'January 20 2019 09:00:00 GMT+0530';
 initializeClock('clockdiv', deadline);


 (function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
   (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
   m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
 })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
 ga('create', 'UA-38470922-9', 'auto');
 ga('send', 'pageview');

 function setupTypewriter(t) {
  var HTML = t.innerHTML;

  t.innerHTML = "";

  var cursorPosition = 0,
   tag = "",
   writingTag = false,
   tagOpen = false,
   typeSpeed = 100,
   tempTypeSpeed = 0;

  var type = function() {

   if (writingTag === true) {
    tag += HTML[cursorPosition];
   }

   if (HTML[cursorPosition] === "<") {
    tempTypeSpeed = 0;
    if (tagOpen) {
     tagOpen = false;
     writingTag = true;
    }
    else {
     tag = "";
     tagOpen = true;
     writingTag = true;
     tag += HTML[cursorPosition];
    }
   }
   if (!writingTag && tagOpen) {
    tag.innerHTML += HTML[cursorPosition];
   }
   if (!writingTag && !tagOpen) {
    if (HTML[cursorPosition] === " ") {
     tempTypeSpeed = 0;
    }
    else {
     tempTypeSpeed = (Math.random() * typeSpeed) + 50;
    }
    t.innerHTML += HTML[cursorPosition];
   }
   if (writingTag === true && HTML[cursorPosition] === ">") {
    tempTypeSpeed = (Math.random() * typeSpeed) + 50;
    writingTag = false;
    if (tagOpen) {
     var newSpan = document.createElement("span");
     t.appendChild(newSpan);
     newSpan.innerHTML = tag;
     tag = newSpan.firstChild;
    }
   }

   cursorPosition += 1;
   if (cursorPosition < HTML.length - 1) {
    setTimeout(type, tempTypeSpeed);
   }

  };

  return {
   type: type
  };
 }

 var typer = document.getElementById('typewriter');

 typewriter = setupTypewriter(typewriter);


 var options = [{
  selector: '#typewriter',
  offset: 50,
  callback: function(el) {
   Materialize.toast("Welcome to Codefest!", 3000);
   typewriter.type();
  }
 }, ];
 Materialize.scrollFire(options);
 
 var vid = document.getElementById("bgvid");
// var pauseButton = document.querySelector("#polina button");

 if (window.matchMedia('(prefers-reduced-motion)').matches) {
  vid.removeAttribute("autoplay");
  vid.pause();
//  pauseButton.innerHTML = "Paused";
 }

 function vidFade() {
  vid.classList.add("stopfade");
 }

 vid.addEventListener('ended', function() {
  // only functional if "loop" is removed 
  vid.pause();
  // to capture IE10
  vidFade();
 });


/* pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
   vid.play();
   pauseButton.innerHTML = "Pause";
  }
  else {
   vid.pause();
   pauseButton.innerHTML = "Paused";
  }
 }) */
 