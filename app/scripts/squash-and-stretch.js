'use strict';

window.addEventListener('load', function() {
  var squashButton = document.getElementById('squash-button');
  var squashImage = document.getElementById('squash');

  squashButton.addEventListener('click', function() {
    window.Velocity(squashImage, {
      translateX: ['600px', '0px']
    }, {
      duration: 600,
      easing: [40, 9],
      queue: false
    });
    window.Velocity(squashImage, {
      scaleY: [ [0.7, 1], [40, 9] ],
    }, {
      duration: 120
    });
    window.Velocity(squashImage, {
      scaleY: [1.3, 0.6],
      scaleX: [ 0.7, 1]
    }, {
      duration: 160,
      easing: [40, 9]
    });
    window.Velocity(squashImage, {
      scaleY: [ 1, 1.3 ],
      scaleX: [ 1, 0.7 ]
    }, {
      duration: 600,
      easing: [40, 9]
    });
  });
});
