(function() {
  'use strict';

  angular
    .module('poppyGP.layout')
    .directive('gpSidebar', gpSidebarDirective);

  /** @ngInject */
  function gpSidebarDirective() {
    var directive = {
      restrict: 'E',
      replace: false,
      transclude: true,
      templateUrl: 'app/layout/sidebar/sidebar.html',
      controller: 'SidebarController',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

  }

})();
