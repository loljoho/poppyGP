(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpVideo', gpVideoDirective);

  /* @ngInject */
  function gpVideoDirective() {
    return {
      restrict: 'E',
      replace: false,
      transclude: true,
      templateUrl: 'app/components/video/video.html',
      scope: {
        channelId : '=*?channelId',
        version   : '=*?playerVersion'
      },
      link: function(scope) {
        scope.videoSrc = 'http://www.ustream.tv/embed/' + scope.channelId + '?';
        // Use Old Player
        if(scope.version === 'old') {
          scope.videoSrc += '?v=3&amp;wmode=direct&showtitle=false';
        }
        // New HTML5 Player
        else {
          scope.videoSrc += 'html5ui=1&controls=false&showtitle=false';
        }
      }
    };
  }

})();
