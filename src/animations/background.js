

let r = 250;
let g = 153;
let b = 153;




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

Background.prototype.changeColor = function(stopMid, stopTop, stopMtn) {
  debugger

  // node.style.stopColor = "red"
  if (r === 250 && g < 250 && b === 153 ) {
    g += 1
  }
  if (r > 153 && g === 250 && b === 153) {
    r -= 1
  }  

  if (r === 153 && g === 250 && b < 250) {
    b += 1
  }  

  if (r === 153 && g > 153 && b === 250) {
    g -= 1
  }

  if (r < 250 && g === 153 && b === 250) {
    r += 1
  }

  if (r === 250 && g === 153 && b > 153) {
    b -= 1
  }




    // node.style.stopColor = "rgb(250" + ", " + i + ",  250)" 
    // // node.style.stopColor = "rgb(255, 165, 0)"
      //  stopMid.style.stopColor = "rgb(250, " + i + ", " + (100 - i) + ")"
       stopTop.style.stopColor = "rgb(" + r + ", " + g + ", " + b +")";
       stopMid.style.stopColor = "rgb(" + g + ", " + r + ", " + b +")";
       stopMtn.style.stopColor = "rgb(" + b + ", " + g + ", " + r +")";
       this.printSky()
}






module.exports = Background;