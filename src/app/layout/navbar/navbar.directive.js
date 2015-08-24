(function() {
  'use strict';

  angular
    .module('poppyGP.layout')
    .directive('gpNavbar', gpNavbarDirective);

  /** @ngInject */
  function gpNavbarDirective() {
    var directive = {
      restrict: 'E',
      replace: false,
      transclude: true,
      templateUrl: 'app/layout/navbar/navbar.html',
      controller: 'NavbarController',
      controllerAs: 'vm',
      bindToController: true,
      link: function(scope, element, attr, ctrl) {
        $('.brand').click(function() {
          console.log('Clicked');
          ctrl.toggleBrand();
        });
      }
    };

    return directive;
  }

})();
