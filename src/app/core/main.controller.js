(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('MainController', MainController);


  /** @ngInject */
  function MainController($mdSidenav) {
    var vm = this;

    vm.currentTrack = '';

    vm.toggleSidenav  = toggleSidenav;

    activate();

    function activate() {
      getCurrentTrack();
    }

    function toggleSidenav() {
      $mdSidenav('left').toggle().then(function() {});
    }

    function getCurrentTrack() {
      // This is temporary.
      vm.currentTrack = {
        year  : 2012,
        round : 1,
        name  : 'Australian Grand Prix'
      };
    }

  }

})();
