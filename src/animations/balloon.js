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
  debugger
  let self = this
  var a = document.getElementById("svgObjectlight");
  let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")

    var xPos = -60;
    var yPos = 30;

    var i = 0
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
      elem.style
      // elem2.style.transform = 'translate( ' + xPos + 'vw, ' + yPos + 'vw )'


    }
  }


Balloon.prototype.toggleAnimation = function() {

  var a = document.getElementById("svgObjectlight");
  // let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")
  let stopMid = a.contentDocument.querySelector("svg").querySelector("#stop_gradient_mid") 
  // debugger
  let backy = this.background
  setInterval(timeColor, 1000)

  function timeColor() {
      backy.changeColor(stopMid)
  }
  

  // treeAnimation.forEach(node => {

  //   changeColor(node)
  //   // debugger
  //   // let style = node.style;

  //   // function animateBg(i) {
  //   // node.style.fill = 'hsl(' + i + ', 100%, 50%)';

  //   // setTimeout(function () {
  //   //   toggleAnimation(++i)
  //   // }, i);
  // })

}


// changeColor = function (node) {
//   i += 1
//   debugger
//   // node.style.stopColor = "rbg(250" + ", " + i + ",  250)"  
//   // stopMid.style.stopColor = "rbg(250" + ", " + i + ",  250)"  
//   // node.style.stopColor = "rbg(250" + ", " + "10" + ",  250)"
//   // node.style.stopColor = "rgb(60, 179, 113)";
//   node.style.stopColor = "red"
// }



// skyAnimation = function () {

//   var a = document.getElementById("svgObject");
//   let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")


//   treeAnimation.forEach(node => {
//     let style = node.style;
//     if (style.webkitAnimationPlayState === 'running') {
//       style.webkitAnimationPlayState = 'paused';
//       style.animationPlayState = 'paused';
//       style.mozAnimationPlayState = 'paused';
//       style.oAnimationPlayState = 'paused';
//       this.printSky()
//     } else {

//       style.webkitAnimationPlayState = 'running';
//       style.animationPlayState = 'running';
//       style.mozAnimationPlayState = 'running';
//       style.oAnimationPlayState = 'running';
//       style.webkitAnimationPlayState = 'running';

//       this.printSky()
//     }

//   })




module.exports = Balloon;
