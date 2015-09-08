(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('MainController', MainController);


  /** @ngInject */
  function MainController($mdSidenav, $mdMedia, $log) {
    var vm = this;

    vm.sidebarLock    = true;

    vm.toggleSidenav  = toggleSidenav;
    vm.isLockedOpen   = isLockedOpen;

    activate();

    function activate() {
    }

    function toggleSidenav() {
      if(vm.sidebarLock) {
        vm.sidebarLock = !vm.sidebarLock;
        $mdSidenav('right').close();
      }
      else if($mdSidenav('right').isOpen()) {
        $mdSidenav('right').close().then(function() {
          vm.sidebarLock = false;
        });
      }
      else if(!$mdSidenav('right').isOpen()) {
        $mdSidenav('right').open().then(function() {
          vm.sidebarLock = true;
        });
      }
      else {
        $log.warn('Some kind of error has occured with the Sidebar!');
      }
    }

    function isLockedOpen() {
      return vm.sidebarLock;
    }

  }

})();
