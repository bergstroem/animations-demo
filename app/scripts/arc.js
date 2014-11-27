'use strict';

window.addEventListener('load', function() {
  var arcButton = document.getElementById('arc-button');
  var arcImages = document.getElementsByClassName('arc');

  arcButton.addEventListener('click', function() {

    for(var i in arcImages) {
      var arcImage = arcImages[i];
      window.Velocity(arcImage, {
        translateY: [ -i * 120 - 108 + 'px', 'easeInOutSine' ],
        translateX: [ 120 + i * 80 + 'px', [0.12,0.7,0.5,1.4]],
        scaleX: 0.4,
        scaleY: 0.4
      }, {
        duration: 240,
        delay: i * 80
      });
    }
  });
});
