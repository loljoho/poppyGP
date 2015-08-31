(function() {
  'use strict';

  angular
    .module('poppyGP.layout')
    .controller('SidebarController', SidebarController);


  /** @ngInject */
  function SidebarController($log) {
    var vm = this;

    vm.toggleSidebar = toggleSidebar;

    activate();


    function activate() {

    }

    function toggleSidebar() {

    }

  }
})();
