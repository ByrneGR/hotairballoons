import './styles/index.scss';

// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
//   myMove()
// });


window.onload = function () {

  // colorSky();
}

function clickBalloon() {

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
  	// Get the SVG document inside the Object tag
    var svgDoc = a.contentDocument;
    var svg = a.contentDocument.querySelector("svg").outerHTML;
    var encoded = window.btoa(svg);
    let html_ele = document.getElementById("html_ele")
    html_ele.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";
}

document.addEventListener('click', musicPlay);
function musicPlay() {
  var iframeElement = document.querySelector('iframe');
  var widget1 = SC.Widget(iframeElement);
  debugger
  widget1.play()
  document.removeEventListener('click', musicPlay);
  let readyText = document.getElementById("readytext")
  readyText.remove();
  launchBalloon()
  printSky()
}

