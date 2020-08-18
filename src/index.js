import "./styles/index.scss";

// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
//   myMove()
// });


window.onload = function () {
var elem = document.getElementById("balloon2");
 myMove()
// elem.style.transform = "translate(100px, 200px)"

}

function myMove() {
  debugger;
  var elem = document.getElementById("balloon2");
      //  elem.style.transform = "translate(-500px, 300px)"
  var xPos = -60;
  var yPos = 30;
  setInterval(frame, 5);

  function frame() {
    debugger
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
    } else  {
      yPos += 0.008
    }
    // else {
    //   yPos++
    // }   
      elem.style.transform = "translate( " + xPos + "vw, " + yPos + "vw )"

    debugger
 }
}

            // <!-- <animateTransform attributeName="transform" type="translate" from="0 0" to="150 0" begin="0s" dur="6s"
            // repeatCount = "indefinite" / > -->