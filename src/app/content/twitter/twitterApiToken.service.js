(function() {
  'use strict';

  angular
    .module('poppyGP.content')
    .factory('twitterApiTokenService', twitterApiTokenServiceFactory);

  // Twitter API Limits
  // ------------------------------
  // GET search/tweets
  //
  // @see https://dev.twitter.com/rest/public/rate-limits


  /** @ngInject */
  function twitterApiTokenServiceFactory(OAuthProvider) {
    
    OAuthProvider.configure({
      baseUrl       : 'https://api.twitter.com',
      clientId      : '',
      clientSecret  : '',
      grantPath     : 'oauth2/token',
      revokePath    : 'oauth2/invalidate_token'
    });

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
