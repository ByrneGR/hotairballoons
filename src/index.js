import './styles/index.scss';

// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
//   myMove()
// });
let audio = document.querySelector("audio")
let animationBtn = document.querySelector("#pause_animation")
let beginContainer = document.querySelector("#begin_container")

audio.src = "./dist/assets/westayedupallnight.mp3"

const context = new AudioContext();
const src = context.createMediaElementSource(audio);
const analyser = context.createAnalyser();
var gainNode = context.createGain();
src.connect(analyser);
analyser.connect(context.destination);
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

checkDataArray(dataArray)


window.onload = function () {
  printNoFillSky()
  // setAnimationRunning()
  // // toggleAnimation()
  launchBalloon()


  hide(audio)
  hide(animationBtn)




  // colorSky();
}

function setAnimationRunning() {
  printSky()
  var a = document.getElementById("svgObject");
  let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")
  treeAnimation.forEach(node => {
    node.style.webkitAnimationPlayState = 'running'
  })
}

function launchBalloon() {
  var elem = document.getElementById('balloon2');
  //  elem.style.transform = 'translate(-500px, 300px)'
  var xPos = -60;
  var yPos = 30;
  setInterval(move, 10);

  function move() {
    if (xPos < 52) {
      xPos += 0.015
    } else {
      xPos = -60;
      yPos = 30
    }
    if (xPos < -5) {
      yPos -= 0.008
      // else if (xPos >= -5 && xPos < 5) {
      //   yPos = 0
    } else {
      yPos += 0.008
    }
    // else {
    //   yPos++
    // }   
    elem.style.transform = 'translate( ' + xPos + 'vw, ' + yPos + 'vw )'
  }
}

function printSky() {
  var a = document.getElementById("svgObject");
  var svg = a.contentDocument.querySelector("svg").outerHTML;
  var encoded = window.btoa(svg);
  let html_ele = document.getElementById("html_ele")
  html_ele.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";

}

function printNoFillSky() {
  var a = document.getElementById("svgObjectNoFill");
  // Get the SVG document inside the Object tag
  var svgDoc = a.contentDocument;
  var svg = a.contentDocument.querySelector("svg").outerHTML;
  var encoded = window.btoa(svg);
  let html_ele = document.getElementById("html_ele")
  html_ele.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";

}

document.querySelector('#session_btn').addEventListener('click', musicPlay);

function musicPlay() {


  audio.play()
  document.removeEventListener('click', musicPlay);
  // let readyText = document.getElementById("readytext")
  // readyText.remove();
  toggleAnimation()  
  hide(beginContainer) 
  reveal(audio)
  reveal(animationBtn)
}

document.querySelector("#pause_animation").addEventListener('click', toggleAnimation)
document.querySelector("#logo_top_left").addEventListener('click', refresh)



function toggleAnimation() {
  var a = document.getElementById("svgObject");
  let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")


  treeAnimation.forEach(node => {
    let style = node.style;
    if (style.webkitAnimationPlayState === 'running') {
      style.webkitAnimationPlayState = 'paused';
      style.animationPlayState = 'paused';
      style.mozAnimationPlayState = 'paused';
      style.oAnimationPlayState = 'paused';
      printSky()
    } else {

      style.webkitAnimationPlayState = 'running';
      style.animationPlayState = 'running';
      style.mozAnimationPlayState = 'running';
      style.oAnimationPlayState = 'running';
      style.webkitAnimationPlayState = 'running';

      printSky()
    }

  })
}

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


function checkDataArray(dataArray) {
  setInterval(render, 500);

}

function render() {
  analyser.getByteFrequencyData(dataArray);
  // console.log(dataArray)
  //spliting the data array into 2 pieces upper half and lower half
  // const lowerHalf = dataArray.slice(0, dataArray.length / 2);
  // const upperHalf = dataArray.slice(
  //   dataArray.length / 2 + 1,
  //   dataArray.length
  // );
  // //creating subsections of 1/4 for sound frequencies
  // const lowerHalfFreq = lowerHalf.slice(0, lowerHalf.length / 2);
  // const lowerUpperHalfFreq = lowerHalf.slice(
  //   lowerHalf.length / 2,
  //   lowerHalf.length
  // );
  // const upperLowerFreqHalf = upperHalf.slice(0, upperHalf.length / 2);
  // const upperUpperFreqHalf = upperHalf.slice(
  //   upperHalf.length / 2 + 1,
  //   upperHalf.length
  // );
  // const lowerAvg = avg(lowerHalfFreq);
  // const lowerUpperAvg = avg(lowerUpperHalfFreq);
  // const upperLowerAvg = avg(upperLowerFreqHalf);
  // const upperUpperAvg = avg(upperUpperFreqHalf);
  // const lowerLowerMax = max(lowerHalfFreq);
  // const lowerUpperMax = max(lowerUpperHalfFreq);
  // const upperLowerMax = max(upperLowerFreqHalf);
  // const upperUpperMax = max(upperUpperFreqHalf);
  // const lowerLowerMin = min(lowerHalfFreq);
  // const lowerUpperMin = min(lowerUpperHalfFreq);
  // const upperLowerMin = min(upperLowerFreqHalf);
  // const upperUpperMin = min(upperUpperFreqHalf);
  // const lowerLowerFr = lowerAvg / lowerHalfFreq.length;
  // const lowerUpperFr = lowerUpperAvg / lowerUpperHalfFreq.length;
  // const upperLowerFr = upperLowerAvg / upperLowerFreqHalf.length;
  // const upperUpperFr = upperUpperAvg / upperUpperFreqHalf.length;
  // const lowerLowerMaxFr = lowerLowerMax / lowerHalfFreq.length;
  // const lowerUpperMaxFr = lowerUpperMax / lowerUpperHalfFreq.length;
  // const upperLowerMaxFr = upperLowerMax / upperLowerFreqHalf.length;
  // const upperUpperMaxFr = upperUpperMax / upperUpperFreqHalf.length;
  // const lowerLowerMinFr = lowerLowerMin / lowerHalfFreq.length;
  // const lowerUpperMinFr = lowerUpperMin / lowerUpperHalfFreq.length;
  // const upperLowerMinFr = upperLowerMin / upperLowerFreqHalf.length;
  // const upperUpperMinFr = upperUpperMin / upperUpperFreqHalf.length;
}


