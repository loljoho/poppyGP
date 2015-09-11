(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('MainController', MainController);


  /** @ngInject */
  function MainController($mdSidenav, $log) {
    var vm = this;

    vm.toggleSidenav  = toggleSidenav;

    activate();

    function activate() {
    }

    function toggleSidenav() {
      $mdSidenav('left').toggle().then(function() {

      });
    }

  }

})();
