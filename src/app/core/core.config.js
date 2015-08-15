(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .config(config);

  /** @ngInject */
  function config($logProvider, $sceDelegateProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options = {
      "closeButton"       : true,
      "debug"             : false,
      "newestOnTop"       : false,
      "progressBar"       : false,
      "positionClass"     : "toast-bottom-left",
      "preventDuplicates" : false,
      "onclick"           : null,
      "showDuration"      : "300",
      "hideDuration"      : "1000",
      "timeOut"           : "3000",
      "extendedTimeOut"   : "1000",
      "showEasing"        : "swing",
      "hideEasing"        : "linear",
      "showMethod"        : "fadeIn",
      "hideMethod"        : "fadeOut"
    };

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://www.ustream.tv/embed/**'
    ]);

    // OAuth Config (MOVE THIS)
    //OAuthProvider.configure({
    //  baseUrl: 'https://userstream.twitter.com/1.1/user.json',
    //  clientId: '',
    //  clientSecret: ''
    //});

  }

})();
