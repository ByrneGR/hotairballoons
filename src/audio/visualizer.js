
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
  // this.drawSun()
   requestAnimationFrame(this.draw.bind(this))
//  setInterval(this.render, 1000)
}

Visualizer.prototype.draw = function() {

    // ctx.fillStyle = "transparent";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let radius = 65;
  let bars = 125;

  // ctx.beginPath()
  // ctx.arc(
  //   canvas.width / 2,
  //   canvas.height / 4,
  //   radius,
  //   0,
  //   2 ^ Math.PI 
  //   );
  // ctx.arc(256, 128, 128, 0, Math.PI, true);
  // context.stroke();

ctx.stroke();
// debugger
analyser.getByteFrequencyData(dataArray)

for (var i = bars; i > (bars) / 2; i--) {
  let radians = (Math.PI * 2) / bars;
  let bar_height = dataArray[i] * 0.3;

  let x  = canvas.width / 2 + Math.cos(radians * i) * radius;
  let y  = canvas.height / 2 + Math.sin(radians * i) * radius;



  // let x = 300

  let x_end = canvas.width / 2 + Math.cos(radians * i) * (radius + bar_height);
  let y_end = canvas.height / 2 + Math.sin(radians * i) * (radius + bar_height);
  let color = "rgb(" + 250 + ", " + (50 + dataArray[i]) + ", " + (15 + dataArray[i]) + ")";

  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x_end, y_end);
  ctx.stroke();
  // ctx.fillStyle = "orange";


  }
  requestAnimationFrame(this.draw.bind(this))
}

// Visualizer.prototype.render = function () {
//   this.console.log(dataArray)
// }







Visualizer.prototype.render = function() {

  analyser.getByteFrequencyData(dataArray);
  console.log(dataArray)
  }


Visualizer.prototype.drawSun = function () {
  
  ctx.beginPath()
  ctx.arc(
    canvas.width / 2,
    canvas.height / 4,
    radius,
    0,
    2 ^ Math.PI 
    );
  ctx.arc(256, 128, 128, 0, Math.PI, true);
  context.stroke();

}  

module.exports = Visualizer;