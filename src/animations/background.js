


function Background() {
}

Background.prototype.printSky = function () {

    var a = document.getElementById("svgObject");
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

Background.prototype.toggleAnimation = function () {
  
  var a = document.getElementById("svgObject");
  let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")


  treeAnimation.forEach(node => {
    let style = node.style;
    if (style.webkitAnimationPlayState === 'running') {
      style.webkitAnimationPlayState = 'paused';
      style.animationPlayState = 'paused';
      style.mozAnimationPlayState = 'paused';
      style.oAnimationPlayState = 'paused';
      this.printSky()
    } else {

      style.webkitAnimationPlayState = 'running';
      style.animationPlayState = 'running';
      style.mozAnimationPlayState = 'running';
      style.oAnimationPlayState = 'running';
      style.webkitAnimationPlayState = 'running';

      this.printSky()
    }

  })
}

Background.prototype.setAnimationRunning = function () {
  this.printSky()
  var a = document.getElementById("svgObject");
  let treeAnimation = a.contentDocument.querySelector("svg").querySelectorAll(".tree_animation")
  treeAnimation.forEach(node => {
    node.style.webkitAnimationPlayState = 'running'
  })
}






module.exports = Background;