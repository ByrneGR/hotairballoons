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

  // setInterval(callRender, 1000)

  // const viz = new Visualizer

}

document.querySelector('#session_btn').addEventListener('click', () => {
    const b = new Balloon(back);
  back.printSky()
  // back.toggleAnimation()
  audio.play()
  hide(beginContainer)
  // toggleAnimation(0)
  // reveal(audio)
  reveal(animationBtn);
    const viz = new Visualizer
});


// function toggleAnimation(i) {

//   var a = document.getElementById("svgObjectlight");
//   let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")


//   treeAnimation.forEach(node => {
//     // debugger
//     // let style = node.style;

//     // function animateBg(i) {
//     node.style.fill = 'hsl(' + i + ', 100%, 50%)';

//     setTimeout(function () {
//       toggleAnimation(++i)
//     }, i);
//   })

// }



document.querySelector("#pause_animation").addEventListener('click', () => {
  // back.modeChange()
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

// function toggleAnimation(i) {

//   var a = document.getElementById("svgObjectlight");
//   let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")
  

//   treeAnimation.forEach(node => {
//       debugger

//     // let style = node.style;

//     // function animateBg(i) {
//     node.style.stopColor = 'rgb(169, ' +  i + ', ' +'250)';

//     setTimeout(function () {
//       debugger
//       toggleAnimation(++i)
//     }, i);
//   })

// }



// function callRender() {
//   const viz = new Visualizer
//   // setInterval(viz.render(), 1000)
//   setInterval(callRender, 1000)
// }





