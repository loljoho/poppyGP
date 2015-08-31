(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('ContentController', ContentController);


  /** @ngInject */
  function ContentController($log) {
    var vm = this;

    vm.toggleContent = toggleContent;

    activate();


    function activate() {

    }

    function toggleContent() {

    }

  }
})();
