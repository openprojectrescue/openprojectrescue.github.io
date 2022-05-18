function DefinedGreeting() {
  let hour = new Date().getHours();
  if (hour < 9) {
    document.getElementById('defined-greeting').innerHTML = "Guten Morgen!<br> Klasse, dass du da bist.";
    document.getElementById('UserInformation').innerHTML = "Tippe eine, der unten stehenden, SOP (Algorithmen) der Bundeslaender an";
    document.getElementById("fade").style.background="linear-gradient(to top, white, white, #c5cae9)";
    document.getElementById("metaColor").innerHTML="<meta name='theme-color' content='#c5cae9'>";
  }
  else if (hour > 9 && hour < 17) {
    document.getElementById('defined-greeting').innerHTML = "Guten Tag!<br> Klasse, dass du da bist.";
    document.getElementById('UserInformation').innerHTML = "Tippe eine, der unten stehenden, SOP (Algorithmen) der Bundeslaender an";
    document.getElementById("fade").style.background="linear-gradient(to top, white, white, #ffe0b2)";
    document.getElementById("metaColor").innerHTML="<meta name='theme-color' content='#ffe0b2'>";
  }
  else if (hour > 17) {
    document.getElementById('defined-greeting').innerHTML = "Guten Abend!<br> Klasse, dass du da bist.";
    document.getElementById('UserInformation').innerHTML = "Tippe eine, der unten stehenden, SOP (Algorithmen) der Bundeslaender an";
    document.getElementById("fade").style.background="linear-gradient(to top, white, white, #ffcdd2)";
    document.getElementById("metaColor").innerHTML="<meta name='theme-color' content='#ffcdd2'>";
  }
}

function DefinedGreeting_SOPpage() {
  let hour = new Date().getHours();
  if (hour < 9) {
    document.getElementById("fade").style.background="linear-gradient(to top, white, white, #c5cae9)";
    document.getElementById("metaColor").innerHTML="<meta name='theme-color' content='#c5cae9'>";
  }
  else if (hour > 9 && hour < 17) {
    document.getElementById("fade").style.background="linear-gradient(to top, white, white, #ffe0b2)";
    document.getElementById("metaColor").innerHTML="<meta name='theme-color' content='#ffe0b2'>";
  }
  else if (hour > 17) {
    document.getElementById("fade").style.background="linear-gradient(to top, white, white, #ffcdd2)";
    document.getElementById("metaColor").innerHTML="<meta name='theme-color' content='#ffcdd2'>";
  }
}

function LANG_EN() {
  alert("A cookie has been saved into your cache. So you can use this App in english on every page. If you want to change to german you can reset your browser history")
  let hour = new Date().getHours();
  if (hour < 9) {
    document.getElementById('defined-greeting').innerHTML = "Good Morning!<br> We apriciate you're here";
    document.getElementById('UserInformation').innerHTML = "Chose on of these different SOP which refer to the german federal states";
    document.getElementById("fade").style.background="linear-gradient(to top, white, white, #c5cae9)";
  }
  else if (hour > 9 && hour < 17) {
    document.getElementById('defined-greeting').innerHTML = "Hi there!<br> Good to see you here";
    document.getElementById('UserInformation').innerHTML = "Chose on of these different SOP which refer to the german federal states";
    document.getElementById("fade").style.background="linear-gradient(to top, white, white, #ffe0b2)";
  }
  else if (hour > 17) {
    document.getElementById('defined-greeting').innerHTML = "Good evening!<br> It was a quite nice day";
    document.getElementById('UserInformation').innerHTML = "Chose on of these different SOP which refer to the german federal states";
    document.getElementById("fade").style.background="linear-gradient(to top, white, white, #ffcdd2)";
  }
}
