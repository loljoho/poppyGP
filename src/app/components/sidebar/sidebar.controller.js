(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('SidebarController', SidebarController);


  /** @ngInject */
  function SidebarController() {
    var vm = this;

    vm.navTabs = [];
    vm.tabActive = 0;

    activate();

    function activate() {
      vm.navTabs = [{
        label : 'Announcements',
        icon  : 'announcement',
        name  : 'home'
      }, {
        label : 'Reddit',
        icon  : 'forum',
        name  : 'forum'
      }, {
        label : 'WebIRC',
        icon  : 'people',
        name  : 'chat'
      }, {
        label : 'Settings',
        icon  : 'settings',
        name  : 'settings'
      }];
    }
  }

})();
