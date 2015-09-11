(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpSchedule', gpScheduleDirective);

  /* @ngInject */
  function gpScheduleDirective() {
    return {
      restrict: 'E',
      replace: false,
      transclude: true,
      templateUrl: 'app/components/schedule/schedule.html',
      scope: {
      },
      controller: ScheduleController,
      controllerAs: 'vm'
    };

    /* @ngInject */
    function ScheduleController() {

    }
  }

})();
