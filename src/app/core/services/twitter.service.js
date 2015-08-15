(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .factory('twitterService', twitterServiceFactory);

  // Twitter API Limits
  // ------------------------------
  //
  // 


  /** @ngInject */
  function twitterServiceFactory($resource) {


    /* Paramaterised URL
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    var url = '../api/:resource.json';


    /* Default Parameters
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    var paramDefaults = {
      resource: '@resource'
    };


    /* Custom Resource Actions
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    var actions = {
      getResource: {
        method: 'GET',
        params: {resource: 'test'}
      }
    };


    /* Return $resource Instance
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    return $resource(url, paramDefaults, actions);

  }

})();
