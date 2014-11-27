'use strict';

window.addEventListener('load', function() {
  var stagingButton = document.getElementById('staging-button');
  var loggedInButtons = document.getElementsByClassName('logged-in-button');
  var loggedOutButtons = document.getElementsByClassName('logged-out-button');
  var loggedIn = false;

  function fadeIn(el, delay) {
    window.Velocity(el, {
      scaleX: ['1', '0'],
      scaleY: ['1', '0'],
      opacity: ['1', '0']

    }, {
      duration: 700,
      easing: [500, 20],
      delay: delay
    });
  }

  function fadeOut(el, delay) {
    window.Velocity(el, {
      scaleX: ['0', '1'],
      scaleY: ['0', '1'],
      opacity: ['0', '1']
    }, {
      duration: 400,
      easing: 'ease',
      delay: delay
    });
  }

  stagingButton.addEventListener('click', function() {
    loggedIn = !loggedIn;
    var longestLength = loggedInButtons.length > loggedOutButtons.length ? loggedInButtons.length : loggedOutButtons.length;

    for(var i = longestLength - 1; i >= 0; i--) {
      var currentLoggedInButton = null;
      var currentLoggedOutButton = null;
      if(loggedIn) {
        currentLoggedInButton = loggedInButtons[i];
        currentLoggedOutButton = loggedOutButtons[i];
      } else {
        currentLoggedInButton = loggedOutButtons[i];
        currentLoggedOutButton = loggedInButtons[i];
      }

      if(currentLoggedInButton) {
        fadeIn(currentLoggedInButton, 150 + i * 100);
      }

      if(currentLoggedOutButton) {
        fadeOut(currentLoggedOutButton, i * 100);
      }
    }
  });
});
