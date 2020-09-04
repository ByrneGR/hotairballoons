
// var iframeElement = document.querySelector('iframe');
// // var audio = SC.Widget(iframeElement);
// let audio = new Audio()
// audio.src = iframeElement.src
// audio.controls = true;
// audio.autoplay = true;

let audio1 = document.querySelector("audio")

const context = new AudioContext();
const source = context.createMediaElementSource(audio1);
const analyser = context.createAnalyser();
source.connect(analyser);
analyser.connect(context.destination)

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// var gainNode = context.createGain();
// gainNode.connect(context.destination);
// var gain = 1;

// gainNode.gain.setValueAtTime(gain, context.currentTime);
// var gainNode = context.createGain();
// src.connect(analyser);
// analyser.connect(context.destination);
// analyser.fftSize = 256;
// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);
// analyser.getByteTimeDomainData(dataArray);


// function avg(nums) {
//   return nums.reduce((a, b) => (a + b)) / nums.length;
// }

// function max(nums) {
//   return Math.max.apply(Math, nums)
//   // debugger
//   // })
// }

// function last40Arr(num) {
//   // debugger
//   last40.push(num)
//   if (last40.length >= 40)
//     last40.shift()
// }



function Visualizer() {
  // audio.play()
   requestAnimationFrame(this.draw.bind(this))
//  setInterval(this.render, 1000)
}

Visualizer.prototype.draw = function() {

    // ctx.fillStyle = "transparent";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let radius = 200;
  let bars = 400;

  ctx.beginPath()
  // ctx.arc(
  //   canvas.width / 2,
  //   canvas.height / 2,
  //   radius,
  //   0,
  //   2 ^ Math.PI 
  //   );

ctx.stroke();
analyser.getByteFrequencyData(dataArray)

for (var i = 0; i < bars; i++) {
  let radians = (Math.PI * 2) / bars;
  let bar_height = dataArray[i] * 0.5;

  let x  = canvas.width / 2 + Math.cos(radians * i) * radius;
  let y  = canvas.height / 2 + Math.sin(radians * i) * radius;
  debugger

  // let x = 300

  let x_end = canvas.width / 2 + Math.cos(radians * i) * (radius + bar_height);
  let y_end = canvas.height / 2 + Math.sin(radians * i) * (radius + bar_height);
  let color = "rgb(" + 200 + ", " + (200 - dataArray[i]) + ", " + dataArray[i] + ")";

  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x_end, y_end);
  ctx.stroke();


  }
  requestAnimationFrame(this.draw.bind(this))
}

// Visualizer.prototype.render = function () {
//   this.console.log(dataArray)
// }







Visualizer.prototype.render = function() {

  analyser.getByteFrequencyData(dataArray);
  console.log(dataArray)

//   //spliting the data array into 2 pieces upper half and lower half
//   const lowerHalf = dataArray.slice(0, dataArray.length / 2);
//   const upperHalf = dataArray.slice(
//     dataArray.length / 2 + 1,
//     dataArray.length
//   );
//   // console.log(lowerHalf)
//   // //creating subsections of 1/4 for sound frequencies
//   const lowerHalfFreq = lowerHalf.slice(0, lowerHalf.length / 2);
//   const lowerUpperHalfFreq = lowerHalf.slice(
//     lowerHalf.length / 2,
//     lowerHalf.length
//   );
//   const upperLowerFreqHalf = upperHalf.slice(0, upperHalf.length / 2);
//   const upperUpperFreqHalf = upperHalf.slice(
//     upperHalf.length / 2 + 1,
//     upperHalf.length
//   );
//   const lowerAvg = avg(lowerHalfFreq);
//   const lowerUpperAvg = avg(lowerUpperHalfFreq);
//   const upperLowerAvg = avg(upperLowerFreqHalf);
//   const upperUpperAvg = avg(upperUpperFreqHalf);
//   // console.log(lowerAvg)
//   // console.log(lowerUpperAvg)

//   const lowerLowerMax = max(lowerHalfFreq);
//   const lowerUpperMax = max(lowerUpperHalfFreq);
//   const lowerMax = max(lowerHalf)
//   // console.log(lowerMax)
//   // last40Arr(lowerUpperMax)
//   // if (!last40.includes(0) && (lowerUpperMax === max(last40)) && (lowerUpperMax / avg(last40.slice(37, 40))) > 1.05) {
//   //   var a = document.getElementById("svgObject");
//   //   let stopGradientMid = a.contentDocument.querySelector("svg").querySelector("#stop_gradient_mid")
//   //   // debugger
//   //   stopGradientMid.style.stopColor = "rgba(250, 169, 169, 1)"
//   //   printSky()
//   //   // console.log(lowerUpperMax)
//   // }
//   // checkDataArray()
//   // const upperLowerMax = max(upperLowerFreqHalf);
//   // const upperUpperMax = max(upperUpperFreqHalf);
//   // const lowerLowerMin = min(lowerHalfFreq);
//   // const lowerUpperMin = min(lowerUpperHalfFreq);
//   // const upperLowerMin = min(upperLowerFreqHalf);
//   // const upperUpperMin = min(upperUpperFreqHalf);
//   // const lowerLowerFr = lowerAvg / lowerHalfFreq.length;
//   // const lowerUpperFr = lowerUpperAvg / lowerUpperHalfFreq.length;
//   // const upperLowerFr = upperLowerAvg / upperLowerFreqHalf.length;
//   // const upperUpperFr = upperUpperAvg / upperUpperFreqHalf.length;
//   // const lowerLowerMaxFr = lowerLowerMax / lowerHalfFreq.length;
//   // const lowerUpperMaxFr = lowerUpperMax / lowerUpperHalfFreq.length;
//   // const upperLowerMaxFr = upperLowerMax / upperLowerFreqHalf.length;
//   // const upperUpperMaxFr = upperUpperMax / upperUpperFreqHalf.length;
//   // const lowerLowerMinFr = lowerLowerMin / lowerHalfFreq.length;
//   // const lowerUpperMinFr = lowerUpperMin / lowerUpperHalfFreq.length;
//   // const upperLowerMinFr = upperLowerMin / upperLowerFreqHalf.length;
//   // const upperUpperMinFr = upperUpperMin / upperUpperFreqHalf.length;
  }


module.exports = Visualizer;