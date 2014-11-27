'use strict';

window.addEventListener('load', function() {
  var anticipationButton = document.getElementById('anticipation-button');
  var anticipationImage = document.getElementById('anticipation');

  var hidden = false;

  anticipationButton.addEventListener('click', function() {
    if(!hidden) {
      window.Velocity(anticipationImage, {
        translateX: [ '-30px', 'ease-in-out' ]
      }, {
        duration: 250
      });
      window.Velocity(anticipationImage, {
        translateX: '200px'
      }, {
        duration: 600,
        easing: [40, 9]
      });
    } else {
      window.Velocity(anticipationImage, {
        translateX: '0px'
      }, {
        duration: 600,
        easing: [40, 9]
      });
    }
    hidden = !hidden;
  });
});
