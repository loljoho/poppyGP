(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .factory('coreService', coreServiceFactory);

  /** @ngInject */
  function coreServiceFactory($resource) {

    // Parameterised URL
    var url = 'assets/data/:resource.json';

    // Default Parameters
    var paramDefaults = {
      resource  : '@resource'
    };

    // Custom Actions
    var actions = {
      getAccess: {
        method: 'GET',
        params: {resource: 'access'}
      }
    };

    return $resource(url, paramDefaults, actions);

    //$log.error('XHR Failed for getTest.\n' + angular.toJson(error.data, true));
    //$log.info('XHR Success: ' + response.data);
  }

})();
