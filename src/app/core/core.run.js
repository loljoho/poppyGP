(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
