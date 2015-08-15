(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpContent', gpContentDirective);

  /** @ngInject */
  function gpContentDirective() {
    var directive = {
      restrict: 'E',
      replace: false,
      transclude: true,
      templateUrl: 'app/components/content/content.html',
      controller: ContentController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function ContentController() {

    }

  }

})();
