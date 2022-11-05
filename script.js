var audio = document.getElementById("music");

function play() {
 var audio = document.getElementById("music");
 var text = document.getElementById("text");
 var startbutton = document.getElementById("button");
 document.getElementById("question1button1").style.animationPlayState = "running";
 document.getElementById("question1button2").style.animationPlayState = "running";
 startbutton.style.display = "none";
 text.style.animationPlayState = "running";
  audio.play();
   for(var i = 1; i < 15; i++) {
    var text = document.getElementById("text" + i);
    text.style.animationPlayState = "running";
   }  
   openFullscreen()
  }
  
  function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  function playpart2() {
    document.getElementById("question1button1").style.display = "none";
    document.getElementById("question1button2").style.display = "none";
    document.getElementById("question1button1").style.animationPlayState = "paused";
    document.getElementById("question1button2").style.animationPlayState = "paused";
 
    for(var i = 15; i < 28; i++) {
    var text = document.getElementById("text" + i);
    text.style.animationPlayState = "running";
   }  
   document.getElementById("question2button1").style.animationPlayState = "running";
   document.getElementById("question2button2").style.animationPlayState = "running";
  }

  function playpart3() {
    document.getElementById("question2button1").style.display = "none";
    document.getElementById("question2button2").style.display = "none";
    document.getElementById("question2button1").style.animationPlayState = "paused";
    document.getElementById("question2button2").style.animationPlayState = "paused";
    for(var i = 28; i < 42; i++) {
      var text = document.getElementById("text" + i);
      console.log(text);
      text.style.animationPlayState = "running";
     }  
     document.getElementById("question3button1").style.animationPlayState = "running";
     document.getElementById("question3button2").style.animationPlayState = "running";
  }
  
  function playpart4() {
    document.getElementById("question3button1").style.display = "none";
    document.getElementById("question3button2").style.display = "none";
    document.getElementById("question3button1").style.animationPlayState = "paused";
    document.getElementById("question3button2").style.animationPlayState = "paused";
    for(var i = 42; i < 72; i++) {
      var text = document.getElementById("text" + i);
      console.log(text);
      text.style.animationPlayState = "running";
     }  
  }
  function stop() {
    var audio = document.getElementById("music");
    audio.pause();
    document.getElementById("question1button1").style.display = "none";
    document.getElementById("question1button2").style.display = "none";
    document.getElementById("question2button1").style.display = "none";
    document.getElementById("question2button2").style.display = "none";
    document.getElementById("textstop").style.animationPlayState = "running";
  }