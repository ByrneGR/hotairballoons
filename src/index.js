import './styles/index.scss';
const Balloon = require("./animations/balloon.js")
const Background = require("./animations/background.js")
const Visualizer = require('./audio/visualizer.js')


const back = new Background;

let audio = document.querySelector("audio")
let animationBtn = document.querySelector("#pause_animation")
let beginContainer = document.querySelector("#begin_container")



window.onload = function () {
  back.printNoFillSky()
  // setInterval(callRender, 1000)

  const b = new Balloon;

}

document.querySelector('#session_btn').addEventListener('click', () => {
  back.toggleAnimation()
  audio.play()
  hide(beginContainer)
  reveal(audio)
  reveal(animationBtn);
});



document.querySelector("#pause_animation").addEventListener('click', () => {
  back.toggleAnimation()
});

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


function callRender() {
  const viz = new Visualizer
  setInterval(viz.render(), 1000)
}



