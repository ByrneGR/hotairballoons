import "./styles/index.scss";

// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
//   myMove()
// });


window.onload = function () {
// var elem = document.getElementById("balloon2");
 myMove()
}

function myMove() {
  debugger;
  var elem = document.getElementById("balloon2");
      //  elem.style.transform = "translate(-500px, 300px)"
  var xPos = -500;
  var yPos = 300;
  setInterval(frame, 30);

  function frame() {
    debugger
    if (xPos < 1000) {
      xPos ++
    } else { 
      xPos = -500;
    }  
    if (yPos >= 0 && xPos < 0) {
      yPos--;}
    else {
      yPos++
    }   
      elem.style.transform = "translate( " + xPos + "px, " + yPos + "px )"

    debugger
 }
}

            // <!-- <animateTransform attributeName="transform" type="translate" from="0 0" to="150 0" begin="0s" dur="6s"
            // repeatCount = "indefinite" / > -->