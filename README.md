poppyGP Player
==============

__poppyGP-player__ is a community-centered video and IRC channel web application

Tasklist
--------
 * [ ] Move `src/app/components/content/` to `src/app/content/`
 * [ ] Create new module `poppyGP.content`
 * [ ] Move `src/app/core/services/` to individual `src/app/content/` subdirectories:
   * [ ] `src/app/content/ergast/`
   * [ ] `src/app/content/reddit/`
   * [x] `src/app/content/twitter/`
 * [ ] Implement navbar button `ng-click`
   * [ ] Open Donation Modal
   * [ ] Open Twitter Confirm Link  
   * [ ] Toggle Fullscreen
 * [ ] Implement Twitter features:
   * [ ] API integration and `toastr` for `#poppyGP` or `@poppyGrandPrix` updates
   * [ ] Last Tweet Directive


Overview
--------

__Client Dependencies__

 * [AngularJS][angular] `1.4.x`
   * Angular-Animate
   * Angular-Cookies
   * Angular-Resource
   * Angular-Sanitize
   * Angular-Touch
 * [Moment.js][moment] `2.10.x`
 * [Snoocore][snoocore] `3.2.x`

__Web Services/APIs__

 * [Reddit API][reddit]
 * [Twitter Streaming API][twitter-stream] and [REST API][twitter-rest]
 * [Ergast Developer API][ergast]

__Development Tools__

 * [Node.js][nodejs]
 * [Bower][bower]
 * [npm][npm]
 * [Yeoman][yeoman]
 * [Generator-Gulp-Angular][yo-gulp-ng]


[angular]://angularjs.org
[moment]://momentjs.com
[snoocore]://snoocore.readme.io

[ergast]://ergast.com/mrd/
[reddit]://reddit.com/dev/api
[twitter-stream]://dev.twitter.com/streaming/userstreams
[twitter-rest]://dev.twitter.com/rest/reference/get/statuses/user_timeline

[yeoman]://yeoman.io
[yo-gulp-ng]://github.com/Swiip/generator-gulp-angular/
[bower]://bower.io
[nodejs]://nodejs.org
[npm]://npmjs.com
[gulpjs]://gulpjs.com

[aws]://aws.amazon.com
[firebase]://firebase.com
