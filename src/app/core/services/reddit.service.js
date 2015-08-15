(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .factory('redditService', redditServiceFactory);

  // Reddit API Limits
  // ------------------------------
  // 30 requests within 1 minute

  /** @ngInject */
  function redditServiceFactory($resource) {


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
