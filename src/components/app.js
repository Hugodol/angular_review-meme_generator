/* START SOLUTION */
angular.module('meme-generator')

.controller('AppCtrl', function() {
  this.myMemes = [];
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html',
});

/* ELSE
// This is the top most container for the app.
  // The app component will contain the Nav Bar and the Routes.
END SOLUTION */
