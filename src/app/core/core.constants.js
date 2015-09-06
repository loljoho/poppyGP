/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
