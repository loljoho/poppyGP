(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('NavbarController', NavbarController);


  /** @ngInject */
  function NavbarController($log) {
    var vm = this;

    vm.buttons    = [];

    vm.toggleBrand = toggleBrand;

    activate();

    function activate() {
      $log.info('NavbarController activated');
    }

    function toggleBrand() {
      $log.info('Brand Toggled');
    }

  }

})();
