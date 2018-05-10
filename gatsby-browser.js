var FontFaceObserver = require('fontfaceobserver');

// Define phase 2 fonts
const interNormal = new FontFaceObserver('Inter UI', { weight: 400 });
const interSemiBold = new FontFaceObserver('Inter UI Medium', { weight: 500 });

exports.onInitialClientRender = () => {
  Promise.all([interNormal.load(), interSemiBold.load()]).then(function() {
    document.documentElement.classList.add('fonts-enabled');

    Promise.all([
      interNormal.load(),
      interSemiBold.load(),
    ]).then(function() {
      // document.documentElement.classList.add('fonts-enabled');
    });
  });
};
