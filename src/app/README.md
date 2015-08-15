`src/app/`
==========

Application Structure
---------------------

```
app/
├── components/
│   ├── content/                        --> Page Content Section
│   │   ├── content.html
│   │   ├── content.controller.js
│   │   ├── content.directive.js
│   │   └── content.scss
│   ├── navbar/                         --> Top Navbar Directive
│   │   ├── navbar.html
│   │   ├── navbar.directive.js
│   │   ├── navbar.controller.js
│   │   └── navbar.scss
│   ├── video/                          --> Video Directive
│   │   ├── video.html
│   │   ├── video.directive
│   │   └── video.scss
│   └── README.md
│
├── core/                               --> Core App Module
│   ├── services/
│   │   ├── ergast.service.js
│   │   ├── playlist.service.js
│   │   ├── reddit.service.js
│   │   └── twitter.service.js
│   ├── styles/                         --> Custom Sass Partials
│   │   ├── _components.scss
│   │   ├── _gpquery.scss
│   │   ├── _layout.scss
│   │   ├── _mixins.scss
│   │   ├── _structure.scss
│   │   ├── _typography.scss
│   │   └── _variables.scss
│   ├── core.config.js
│   ├── core.constants.js
│   ├── core.module.js
│   ├── core.run.js
│   ├── core.service.js
│   └── README.md
│
├── index.module.js
├── index.scss
└── README.md
```


API Terms & Conditions
-----------------------

This section briefly lists the relevant terms, conditions, and limits attributed to each API consumed by the application.


### Ergast Developer API

 * May not poll more than __four times within two second period__
 * May not poll more than __200 times in one hour__
 * Loops are strongly discouraged


### Reddit API

 * Must __authenticate via OAuth 2__
   * May not __ask for, or store passwords__
   * May only store __authentication tokens__
 * May not poll more than __30 times per minute__ (or __60 times per minute__ when connecting with OAuth2)
   * Monitor `X-Ratelimit-Used` for approximate number of requests used in this period
   * Monitor `X-Ratelimit-Remaining` for approximate number of requests left to use
   * Monitor `X-Ratelimit-Reset` for approximate number of seconds to end of period
 * Must have unique & descriptive client User-Agent string with:
   * Target platform
   * Unique application identifier
   * Version string
   * Username as contact information
 * Must comply with client User-Agent string format:
   * `<platform>:<app ID>:<version string> (by /u/<reddit username>)`  
   * e.g. `User-Agent: android:com.example.myredditapp:v1.2.3 (by /u/kemitche)`
 * Simultaneous resource requests are strongly encouraged over loops
 * Must adhere to [Reddit Rules](https://www.reddit.com/help/contentpolicy)


### Twitter Streaming API

 * Must __handle HTTP 420 error code__ indicative of excessive account logins
 * Simultaneous User Stream connections limited per OAuth application
   * Limited regardless of IP
   * Oldest connection is terminated first
 * [Best practice - consuming both User Streams and REST API]

### Twitter REST API

 * [Limits](https://dev.twitter.com/rest/public/rate-limiting)
