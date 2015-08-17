(function() {
  'use strict';

  angular
    .module('poppyGP.content')
    .factory('twitterService', twitterServiceFactory);

  // Twitter API Limits
  // ------------------------------
  // GET search/tweets
  //
  // @see https://dev.twitter.com/rest/public/rate-limits


  /** @ngInject */
  function twitterServiceFactory($resource) {
    var credentials     = btoa(consumerKey + ':' + consumerSecret);

    /* Parameterised URL
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    var url = 'https://api.twitter.com/';

    /* Default Parameters
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    var paramDefaults = {
      resource: '@resource'
    };

    /* Custom Resource Actions
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    var actions = {
      getAuthToken: {
        method: 'POST',
        url: 'https://api.twitter.com/oauth2/token',
        headers: {
          'Authorization': 'Basic ' + credentials,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        data: 'grant_type=client_credentials'
      },
      getResource: {
        method: 'GET',
        params: {
          resource: 'test'
        }
      }
    };

    /* Return $resource Instance
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    return $resource(url, paramDefaults, actions);

  }

})();
