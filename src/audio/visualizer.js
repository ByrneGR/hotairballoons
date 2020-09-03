
let audio = document.querySelector("audio")

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


function avg(nums) {
  return nums.reduce((a, b) => (a + b)) / nums.length;
}

function max(nums) {
  return Math.max.apply(Math, nums)
  // debugger
  // })
}

// function last40Arr(num) {
//   // debugger
//   last40.push(num)
//   if (last40.length >= 40)
//     last40.shift()
// }



function Visualizer() {
  

}

Visualizer.prototype.render = function() {
  analyser.getByteFrequencyData(dataArray);
  console.log(dataArray)
  //spliting the data array into 2 pieces upper half and lower half
  const lowerHalf = dataArray.slice(0, dataArray.length / 2);
  const upperHalf = dataArray.slice(
    dataArray.length / 2 + 1,
    dataArray.length
  );
  // console.log(lowerHalf)
  // //creating subsections of 1/4 for sound frequencies
  const lowerHalfFreq = lowerHalf.slice(0, lowerHalf.length / 2);
  const lowerUpperHalfFreq = lowerHalf.slice(
    lowerHalf.length / 2,
    lowerHalf.length
  );
  const upperLowerFreqHalf = upperHalf.slice(0, upperHalf.length / 2);
  const upperUpperFreqHalf = upperHalf.slice(
    upperHalf.length / 2 + 1,
    upperHalf.length
  );
  const lowerAvg = avg(lowerHalfFreq);
  const lowerUpperAvg = avg(lowerUpperHalfFreq);
  const upperLowerAvg = avg(upperLowerFreqHalf);
  const upperUpperAvg = avg(upperUpperFreqHalf);
  // console.log(lowerAvg)
  // console.log(lowerUpperAvg)

  const lowerLowerMax = max(lowerHalfFreq);
  const lowerUpperMax = max(lowerUpperHalfFreq);
  const lowerMax = max(lowerHalf)
  // console.log(lowerMax)
  // last40Arr(lowerUpperMax)
  // if (!last40.includes(0) && (lowerUpperMax === max(last40)) && (lowerUpperMax / avg(last40.slice(37, 40))) > 1.05) {
  //   var a = document.getElementById("svgObject");
  //   let stopGradientMid = a.contentDocument.querySelector("svg").querySelector("#stop_gradient_mid")
  //   // debugger
  //   stopGradientMid.style.stopColor = "rgba(250, 169, 169, 1)"
  //   printSky()
  //   // console.log(lowerUpperMax)
  // }
  // checkDataArray()
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


module.exports = Visualizer;