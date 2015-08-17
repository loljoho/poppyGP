(function() {
  'use strict';
// http://devdactic.com/twitter-rest-api-angularjs/
  angular
    .module('poppyGP.content')
    .controller('TwitterController', TwitterController);

  /** @ngInject */
  function TwitterController($twitterApi) {
    var vm = this;

    vm.twitterKey   = 'STORAGE.TWITTER.KEY';
    vm.twitterToken = '';
    vm.tweet        = {};

    activate();

    function activate() {

    }
  }
})();
