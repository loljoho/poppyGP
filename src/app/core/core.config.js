(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .config(config);

  /** @ngInject */
  function config($logProvider, $sceDelegateProvider, $mdThemingProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);

    /* Whitelist Embed URLs
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://www.ustream.tv/embed/**',
      'https://www.ustream.tv/embed/**'
    ]);


    /* Toastr Config
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
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


    /* Configure ngMaterial Themes
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

    // Extend Palettes
    // ------------------------------
    var gpGreyMap = $mdThemingProvider.extendPalette('grey', {
      '300':'e5e5e5', '500':'333333', '800':'424242', 'A100':'d3d3d3',
      'contrastDefaultColor':'light', 'contrastDarkColors'  : ['300', 'A100']
    });
    var gpRedMap  = $mdThemingProvider.extendPalette('red', {
      '300':'ff2e2e', '500':'e90000', '800':'910000', 'A100':'ff5a5a',
      'contrastDefaultColor':'light', 'contrastDarkColors'  : ['300', 'A100']
    });
    var gpOrangeMap = $mdThemingProvider.extendPalette('orange', {
      '300':'feb360', '500':'e89538', '800':'9f5605', 'A100':'ffc889',
      'contrastDefaultColor':'light', 'contrastDarkColors'  : ['300', 'A100']
    });

    // Register Palette Maps
    // ------------------------------
    $mdThemingProvider.definePalette('gpGrey', gpGreyMap)
      .definePalette('gpRed', gpRedMap)
      .definePalette('gpOrange', gpOrangeMap);

    // Configure Default Themes
    // ------------------------------
    $mdThemingProvider.theme('default')
      .primaryPalette('gpGrey')
      .accentPalette('gpRed')
      .warnPalette('gpOrange');


  }

})();
