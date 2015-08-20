(function() {
  'use strict';

  angular
    .module('poppyGP.components')
    .directive('gpVideo', gpVideoDirective);

  /* @ngInject */
  function gpVideoDirective() {
    return {
      restrict: 'E',
      replace: false,
      transclude: false,
      templateUrl: 'app/components/video/video.html',
      controller: VideoController,
      controllerAs: 'vm'
    };

    /** @ngInject */
    function VideoController() {
      var vm = this;
      vm.joho = '';

      activate();

      function activate() {
        vm.joho = 'Joho';
      }

    }

  }

})();
