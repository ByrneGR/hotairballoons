import './styles/index.scss';
const Balloon = require("./animations/balloon.js")
const Background = require("./animations/background.js")
const Visualizer = require('./audio/visualizer.js')

const back = new Background;
var iframeElement = document.querySelector('iframe');
// var audio = SC.Widget(iframeElement).src;
let audio = document.querySelector("audio")
let animationBtn = document.querySelector("#pause_animation")
let beginContainer = document.querySelector("#begin_container")





window.onload = function () {
  back.printNoFillSky()
  hide(audio)
  // setInterval(callRender, 1000)

  // const viz = new Visualizer

}

document.querySelector('#session_btn').addEventListener('click', () => {
    const b = new Balloon(back);
  back.printSky()
  // back.toggleAnimation()
  audio.play()
  hide(beginContainer)
  reveal(audio)
  // toggleAnimation(0)
  // reveal(audio)
  // reveal(animationBtn);
    const viz = new Visualizer
});



// document.querySelector("#pause_animation").addEventListener('click', () => {
//   // back.modeChange()
// });

document.querySelector("#logo_top_left").addEventListener('click', refresh)



function hide(element) {
  element.style.display = "none";
}

function reveal(element) {
  element.style.display = "block";
}


function refresh() {
  location.reload();
  return false;
}


var modal = document.getElementById("about_modal_container");

// Get the button that opens the modal
var aboutBtn = document.getElementById("about-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

aboutBtn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}