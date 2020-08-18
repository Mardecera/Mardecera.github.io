/*jshint esversion: 6 */
/*
(function(window, document, undefined) {
    var device = {};

    // Browser type
    device.browser = {
      msie: (function() {
        return (/msie/i).test(navigator.userAgent);
      })()
    };

    // Screen size
    device.screen = window.screen;

    // Browser size
    device.viewport = {
        height: window.innerHeight,
        width: window.innerWidth
    };

    // Mobile device
    device.mobile = (/mobile/i).test(navigator.userAgent);

    // Make it available
    window.device = device;

    if (window.addEventListener) {
      window.on = window.addEventListener;
    } else {
      window.on =  window.attachEvent;
    }

    window.on('resize', function(e) {
      setTimeout(function() {
        device.viewport = {
          height: window.innerHeight,
          width: window.innerWidth
        };
      }, 100);
    });
})(window, document);*/

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
