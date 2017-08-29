/* START SOLUTION */
angular.module('meme-generator')

.controller('MyMemesCtrl', function() {})
.component('myMemes', {
  bindings: {
    mymemes: '<',
  },
  controller: 'MyMemesCtrl',
  templateUrl: 'src/templates/myMemes.html',
});

/* ELSE
// MyMemes Component
  // Should dynamically render all saved memes
END SOLUTION */
