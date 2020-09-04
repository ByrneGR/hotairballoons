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


// const context = new AudioContext();
// const src = context.createMediaElementSource(audio);
// const analyser = context.createAnalyser();
// src.connect(analyser);
// debugger

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);


window.onload = function () {
  back.printNoFillSky()
  // setInterval(callRender, 1000)

  const b = new Balloon;
  // const viz = new Visualizer

}

document.querySelector('#session_btn').addEventListener('click', () => {
  back.toggleAnimation()
  audio.play()
  hide(beginContainer)
  // reveal(audio)
  reveal(animationBtn);
    const viz = new Visualizer
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


// function callRender() {
//   const viz = new Visualizer
//   // setInterval(viz.render(), 1000)
//   setInterval(callRender, 1000)
// }





