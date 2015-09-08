(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpSidebar', gpSidebarDirective);

  /** @ngInject */
  function gpSidebarDirective() {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/sidebar/sidebar.html',
      controller: SidebarController,
      controllerAs: 'vm'
    };

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
          label : 'Forum',
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

  }

})();
