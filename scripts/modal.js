// Get the modal
var modal = document.getElementById("settingsBox");

// Get the button that opens the modal
var btn = document.getElementById("settingsButton");

var clickbox = document.getElementById("click-interceptor");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Button actions
var namesPlayButton = document.getElementById("names-play-button");
namesPlayButton.onclick = function() {
  namesDiv = document.getElementById("names");
  namesDiv.style.animationPlayState = 'running';
}

var namesPauseButton = document.getElementById("names-pause-button");
namesPauseButton.onclick = function() {
  namesDiv = document.getElementById("names");
  namesDiv.style.animationPlayState = 'paused';
}


var namesRestartButton = document.getElementById("names-restart-button");
namesRestartButton.onclick = restartScroller;


function restartScroller(){
  namesDiv = document.getElementById("names");
  const names_clone = namesDiv.cloneNode(true);
  namesDiv.parentNode.replaceChild(names_clone, namesDiv);
}

