'use strict';

window.addEventListener('load', function() {
  var followthroughButton = document.getElementById('followthrough-button');
  var followthroughContainer = document.getElementById('followthrough-container');
  var followthroughImage = document.getElementById('followthrough');

  followthroughButton.addEventListener('click', function() {
    window.Velocity(followthroughContainer,
      {
        translateX: ['400px', '0px']
      },
      600,
      [40, 9]
    );

    window.Velocity(followthroughImage,
      {
        translateX: '10px'
      },
      {
        easing: [400, 25],
        duration: 200,
        delay: 120
    });

    window.Velocity(followthroughImage,
      {
        translateX: '0px'
      },
      {
        easing: [20, 9],
        duration: 500
    });
  });
});
