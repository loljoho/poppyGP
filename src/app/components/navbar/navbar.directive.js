(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpNavbar', gpNavbarDirective);

  /** @ngInject */
  function gpNavbarDirective() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm'
    };


    /** @ngInject */
    function NavbarController() {
      var vm = this;

      vm.buttons    = [];

      activate();

      function activate() {
        vm.buttons = [1, 2, 3];
      }

    }
  }

})();
