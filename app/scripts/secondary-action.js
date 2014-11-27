'use strict';

window.addEventListener('load', function() {
  var secondaryActionButton = document.getElementById('secondary-action-button');
  var bigBlob = document.getElementsByClassName('big-blob')[0];
  var smallBlobs = document.getElementsByClassName('small-blob');

  secondaryActionButton.addEventListener('click', function() {
    bigBlob.style.opacity = 0;
    window.Velocity(bigBlob,
      {
        opacity: [1, 0],
        scaleX: [1, 0],
        scaleY: [1, 0]
      }, {
        duration: 400,
        easing: [30, 8],
        delay: 200
      }
    );

    for(var i in smallBlobs) {
      var currentBlob = smallBlobs[i];
      currentBlob.style.opacity = 0;

      window.Velocity(currentBlob,
        {
          opacity: [1, 0],
          translateY: ['0%', '-100%']
        },
        {
          easing: [40, 8],
          duration: 500,
          delay: 500 + 60*i
        }
      );
    }
  });
});
