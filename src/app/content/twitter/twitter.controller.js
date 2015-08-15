(function() {
  'use strict';

  angular
    .module('poppyGP.content')
    .controller('TwitterController', TwitterController);

  /** @ngInject */
  function TwitterController($twitterApi) {
    var vm = this;

    vm.twitterKey   = 'STORAGE.TWITTER.KEY';
    vm.twitterToken = '';
    vm.tweet        = {};

    vm.apiConfig = {
      key:    "knFBSfeZzxHSK182Ui8iEhmBF",
      secret: "6mXHJJo35AbDXhp3QsCe4qtuYOtecnQlSzbFTmsLjrZJXObfNJ"
    };

    activate();

    function activate() {

    }
  }
})();
