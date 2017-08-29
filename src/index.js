/* START SOLUTION */
angular.module('meme-generator', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('generator', {
      url: '/',
      template: '<generator mymemes="$ctrl.myMemes"></generator>',
    })
    .state('myMemes', {
      url: '/mymemes',
      template: '<my-memes mymemes="$ctrl.myMemes"></my-memes>',
    })
});

/* ELSE
// index.js is the root of a Angular app

// Use angular.module to render the app.
END SOLUTION */
