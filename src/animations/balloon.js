


function Balloon() {
  this.launchBalloon()
}  

 Balloon.prototype.launchBalloon = function() {
    var elem = document.getElementById('balloon2');
    // var elem2 = document.getElementById('canvas');

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
      // elem2.style.transform = 'translate( ' + xPos + 'vw, ' + yPos + 'vw )'
    }
  }



module.exports = Balloon;
