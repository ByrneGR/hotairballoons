let i = 0
let mode = "dark"


function Background() {

}

Background.prototype.printSky = function () {

    var a = document.getElementById("svgObjectlight");
    var svg = a.contentDocument.querySelector("svg").outerHTML;
    var encoded = window.btoa(svg);
    let html_ele = document.getElementById("html_ele")
    html_ele.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";

  }

Background.prototype.printNoFillSky = function () {
    var a = document.getElementById("svgObjectNoFill");
    // Get the SVG document inside the Object tag
    var svgDoc = a.contentDocument;
    var svg = a.contentDocument.querySelector("svg").outerHTML;
    var encoded = window.btoa(svg);
    let html_ele = document.getElementById("html_ele")
    html_ele.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";

  }







// Background.prototype.toggleAnimation = function () {


//   var a = document.getElementById("svgObjectlight");
//   debugger
//   // let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")
//   let stopMid = a.contentDocument.querySelector("svg").querySelector("#stop_gradient_mid")
//   // debugger
//   setInterval(this.background.changeColor(stopMid), 1000)

//   // treeAnimation.forEach(node => {

//   //   changeColor(node)
//   //   // debugger
//   //   // let style = node.style;

//   //   // function animateBg(i) {
//   //   // node.style.fill = 'hsl(' + i + ', 100%, 50%)';

//   //   // setTimeout(function () {
//   //   //   toggleAnimation(++i)
//   //   // }, i);
//   // })

// }


Background.prototype.modeChange = function () {
    if (mode === "dark") {
      debugger
    let object = "svgObject" + mode
      var a = document.getElementById(object);
      var svg = a.contentDocument.querySelector("svg").outerHTML;
      var encoded = window.btoa(svg);
      let html_ele = document.getElementById("html_ele")
      html_ele.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";
      mode = "light"; 
      document.querySelector("#pause_animation").innerHTML = "Light Mode"
  }

    else if (mode === "light") {
    let object = "svgObject" + mode
      var a = document.getElementById(object);
      var svg = a.contentDocument.querySelector("svg").outerHTML;
      var encoded = window.btoa(svg);
      let html_ele = document.getElementById("html_ele")
      html_ele.style.backgroundImage = "url(data:image/svg+xml;base64," + encoded + ")";
      mode = "dark"; 
      document.querySelector("#pause_animation").innerHTML = "Dark Mode"
  }
}  

Background.prototype.changeColor = function(node) {
  debugger

  // node.style.stopColor = "red"
    i += 1
    
    if (i >= 250) {
      i = 0
    }

    // node.style.stopColor = "rgb(250" + ", " + i + ",  250)" 
    // // node.style.stopColor = "rgb(255, 165, 0)"
       node.style.stopColor = "rgb(250, " + i + ", " + (100 - i) + ")"
       this.printSky()
}






module.exports = Background;