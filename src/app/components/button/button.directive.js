(function() {
  'use strict';

  angular
    .module('poppyGP.components')
    .directive('gpButton', gpButtonDirective);

  /** @ngInject */
  function gpButtonDirective($timeout) {
    var directive = {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<button class="gp-button" ng-transclude></button>',
      link: postLink
    };

    function postLink(scope, element, attr) {
      scope.mouseActive = false;

      element.on('mousedown', function() {
        scope.mouseActive = true;

        $timeout(function() {
          scope.mouseActive = false;
        }, 100);

      }).on('focus', function() {
        if(scope.mouseActive === false) {
          element.addClass('md-focused');
        }
      }).on('blur', function() {
        element.removeClass('md-focused');
      });
    }

    return directive;

  }

})();
