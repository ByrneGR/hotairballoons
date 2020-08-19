import './styles/index.scss';

// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
//   myMove()
// });


window.onload = function () {
  launchBalloon()
  printSky()
  colorSky();
}

function launchBalloon() {
  var elem = document.getElementById('balloon2');
  //  elem.style.transform = 'translate(-500px, 300px)'
  var xPos = -60;
  var yPos = 30;
  setInterval(move, 0.5);

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
  	// Get the SVG document inside the Object tag
    var svgDoc = a.contentDocument;
    var svg = a.contentDocument.querySelector("svg").outerHTML;
    var encoded = window.btoa(svg);
    let html_ele = document.getElementById("html_ele")
    html_ele.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";
}

function colorSky() {
  let svgObject = document.getElementById("svgObject");
  let svgEle = svgObject.contentDocument.querySelector("svg")
  let skyTop = svgEle.getElementById('stop_gradient_top')
  let skyMid = svgEle.getElementById('stop_gradient_mid')
  
  let r = 250
  let g = 169
  let b = 169
  setInterval(paint, 10000);

  function paint() {
    debugger
    if (r === 250 && g === 169 && b === 169) {
      r = 238
      g = 250
      b = 169
    }
    else if (r === 238 && g === 250 && b === 169) {
      r = 169
      g = 250
      b = 230

    } else if (r === 169 && g === 250 && b === 230) {
      r = 233
      g = 169
      b = 250

    }

    else if (r === 233 && g === 169 && b === 250) {
      r = 250
      g = 169
      b = 169
    }


  skyTop.style.stopColor = "rgba( " + r + ", " + g + ", " + b + ")"
  skyMid.style.stopColor = "rgba( " + b + ", " + r + ", " + g + ")"
  printSky()
    debugger
  }
  // <stop id='stop_gradient_1' offset="0.447173" stop-color="rgba(180, 169, 250, 1)"/>

}

// <!-- <animateTransform attributeName='transform' type='translate' from='0 0' to='150 0' begin='0s' dur='6s'
// repeatCount = 'indefinite' / > -->