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
      controller: 'SidebarController',
      controllerAs: 'vm'
    };

  }

})();
