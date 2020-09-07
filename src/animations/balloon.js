const Background = require("./background.js")
// const back = new Background;
let i = 0

function Balloon(background) {
  this.launchBalloon();
  this.background = background;
  this.test = [];
  this.toggleAnimation()

}  



 Balloon.prototype.launchBalloon = function() {
    var elem = document.getElementById('balloon2');
    // var a = document.getElementById("svgObject");
    // let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")
    // var elem2 = document.getElementById('canvas');

    //  elem.style.transform = 'translate(-500px, 300px)'
  let self = this

  let xMax = 100
  let xMin = -60
  let yMax = 30
  let yMin = 60

  // let xPos = Math.random() * (xMax - xMin) + xMin;
  // let yPos = Math.random() * (yMax - yMin) + yMin;
    var xPos = -70;
    var yPos = 30;

    var i = 0
    setInterval(move, 10);


    function move() {
      if (xPos < 52) {
        xPos += 0.015
      } else {
        self.changeBallonColor()
        xPos = -70;
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
      elem.style
      // elem2.style.transform = 'translate( ' + xPos + 'vw, ' + yPos + 'vw )'


    }
  }


Balloon.prototype.toggleAnimation = function() {

  var a = document.getElementById("svgObjectlight");
  // let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")
  let stopMid = a.contentDocument.querySelector("svg").querySelector("#stop_gradient_mid")
  let stopTop = a.contentDocument.querySelector("svg").querySelector("#stop_gradient_top")
  let stopMtn = a.contentDocument.querySelector("svg").querySelector("#stop_gradient_mtn")
  // debugger
  let backy = this.background
  timeColor()
  setInterval(timeColor, 500)

  function timeColor() {
      backy.changeColor(stopMid, stopTop, stopMtn)
  }
  
}  

Balloon.prototype.changeBallonColor = function () {
  let topLine1 = document.querySelector("#path3066")
  let bottomLine1 = document.querySelector("#path3060")

  let topLine2 = document.querySelector("#path3064")
  let bottomLine2 = document.querySelector("#path3062")

  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)

  let r1 = Math.floor(Math.random() * 255)
  let g1 = Math.floor(Math.random() * 255)
  let b1 = Math.floor(Math.random() * 255)

  let color1 = "rgb(" + r + ", " + g + ", " + b + ")";
  let color2 = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";
  topLine1.style.fill = color1
  bottomLine1.style.fill = color1

  topLine2.style.fill = color2
  bottomLine2.style.fill = color2

}



module.exports = Balloon;
