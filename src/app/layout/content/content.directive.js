(function() {
  'use strict';

  angular
    .module('poppyGP.layout')
    .directive('gpContent', gpContentDirective);

  /** @ngInject */
  function gpContentDirective() {
    var directive = {
      restrict: 'E',
      replace: false,
      transclude: true,
      templateUrl: 'app/layout/content/content.html',
      controller: ContentController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function ContentController() {

    }

  }

})();
