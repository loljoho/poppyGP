(function () {
  'use strict';

  angular
    .module('poppyGP.content')
    .constant('twitterUrls', {
      'APP_ONLY_AUTH' : 'https://api.twitter.com/oauth2/token',
      'REQUEST_TOKEN' : 'https://api.twitter.com/oauth/request_token',
      'AUTHORISE'     : 'https://api.twitter.com/oauth/authorize',
      'ACCESS_TOKEN'  : 'https://api.twitter.com/oauth/access_token'
    });
})();
