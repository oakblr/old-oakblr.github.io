 var count = 0;
 var loading = 1;
 var phoneLogo = document.getElementById('phone');

 console.log(window.innerHeight, window.innerWidth);

 function noscroll() {
  window.scrollTo(0, 0);
 }

 var mobileAndTabletcheck = function() {
  var check = false;
  (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
 };

 $(document).ready(function() {
 /* if (mobileAndTabletcheck() == true) {
   console.log("Changing Width")
   document.getElementById("loader").style = "width: 100%;"
   var elems = document.getElementsByTagName('div');

   for (var i = 0; i < elems.length; i++) {
    elems[i].style = "width: 100%;"
   }
  } */

  phoneLogo.style.display = 'none'
  $('.carousel.carousel-slider').carousel({
   fullWidth: true,
   indicators: true
  });
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  window.addEventListener('scroll', noscroll);
  //document.getElementById('website').style.display = "none";

  function animate() {

   var outputbinary = document.querySelector(".output");

   var optionsarray = [0, 1];
   var binaryarray = [];

   var index = 0;

   var animateInterval = setInterval(function() {
    if (count < 500) {
     count += 1;
    }
    else if (mobileAndTabletcheck()) {
     if (count > 300) {
      console.log("Phone detected")
      begunPlaying('phone');
      clearInterval(animateInterval);
      loading = 0;
     }


    }
    else {
     if (loading == 1) {
      begunPlaying('timeout');
      clearInterval(animateInterval);
      loading = 0;

     }
    }
    if (binaryarray.length <= 2000) {
     var binarynumber = optionsarray[Math.floor(Math.random() * optionsarray.length)];
     binaryarray.push(binarynumber);
     var str = binaryarray.join(" ");
     outputbinary.innerText = str;
    }

   }, 10);
  }
  animate();


  $('.parallax').parallax();
  $('.modal').modal();
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

  function openTerms() {
   console.log("Hello");
   $('#terms').modal('open');
  }

  /*let timerId = setTimeout(function tick() {
   if (document.getElementById("fp").className == "card-panel blue-grey darken-2 pulse center-align hoverable")
    document.getElementById("fp").className = "card-panel teal pulse center-align hoverable";
   else if (document.getElementById("fp").className == "card-panel teal pulse center-align hoverable")
    document.getElementById("fp").className = "card-panel blue-grey darken-2 pulse center-align hoverable";
   timerId = setTimeout(tick, 500);
  }, 1000); */

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



  var vid = document.getElementById("bgvid");
  vid.setAttribute("allow", "autoplay; fullscreen");


  function vidFade() {
   vid.classList.add("stopfade");
  }

  vid.addEventListener('play', function() {
   begunPlaying('auto')
  });

  function begunPlaying(source) {
   console.log('Source :' + source);
   if (loading == 1) {
    var bgimage;
    if (source == 'auto') {
     bgimage = 'background';
     console.log('begun playing');
    }
    else if (source == 'phone') {
     bgimage = 'mobileBackground';
     phoneLogo.style.display = 'block';
     Materialize.toast("Dear mobile user, for the best experience please use the website on a laptop or desktop", 5000);

    }
    else {
     bgimage = 'background2'
     console.log('Autoplay failed')
    }

    document.getElementById("loader").style.display = 'none'

    /*document.getElementsByTagName('body')[0].style = `background: url('../images/${bgimage}.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;`;*/
    document.getElementsByTagName('body')[0].style = "background-color:rgba(0,0,0,0)"
    document.getElementById('website').style = "visibility: visible; width: 100%;";
    window.removeEventListener('scroll', noscroll);
    var typer = document.getElementById('typewriter');

    typewriter = setupTypewriter(typewriter);


    var options = [{
     selector: '#typewriter',
     offset: 50,
     callback: function(el) {
      Materialize.toast("Welcome to Codefest'19!", 3000);
      typewriter.type();
     }
    }, ];
    Materialize.scrollFire(options);
    loading = 0;
   }
  }

  vid.addEventListener('ended', function() {
   // only functional if "loop" is removed
   vid.pause();
   // to capture IE10
   vidFade();
  });
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
