(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpNavbar', gpNavbarDirective);

  /** @ngInject */
  function gpNavbarDirective() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/navbar/navbar.html',
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
