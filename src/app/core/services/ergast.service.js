(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .factory('ergastService', ergastServiceFactory);

  // Ergast API Limits
  // ------------------------------
  // 4 requests within 2 seconds
  // 200 requests within 1 hour

  /** @ngInject */
  function ergastServiceFactory($resource) {


    /* Paramaterised URL
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    var url = 'http://ergast.com/api/:series/:season/:round/:resource.json';


    /* Default Parameters
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    var paramDefaults = {
      series    : 'f1',
      season    : 'current',
      round     : 'last',
      resource  : 'results'
    };


    /* Custom Resource Actions
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    var actions = {
      getResource: {
        method: 'GET',
        params: {resource: '@resource'}
      },
      getDriverStandings: {
        method: 'GET',
        params: {resource: 'driverStandings'}
      },
      getConstructorStandings: {
        method: 'GET',
        params: {resource: 'constructorStandings'}
      }
    };


    /* Return $resource Instance
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    return $resource(url, paramDefaults, actions);

  }

})();
