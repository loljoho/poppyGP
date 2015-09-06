(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpSidebar', gpSidebarDirective);

  /** @ngInject */
  function gpSidebarDirective() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/sidebar/sidebar.html',
      controller: SidebarController,
      controllerAs: 'vm'
    };


    /** @ngInject */
    function SidebarController($mdSidenav, $mdMedia) {
      var vm = this;

      vm.sidebarLock    = true;

      vm.toggleSidenav  = toggleSidenav;
      vm.isLockedOpen   = isLockedOpen;

      activate();

      function activate() {
      }

      function toggleSidenav() {

      }

      function isLockedOpen() {
        return $mdMedia('gt-md') && vm.sidebarLock;
      }

    }
  }

})();
