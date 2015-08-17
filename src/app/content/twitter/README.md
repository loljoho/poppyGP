`src/app/content/twitter/`
===

Twitter REST API access

Application-Only Authentication Flow
------------------------------------

__Authentication Flow__

 * Encode __consumer key__ and __consumer secret__ into __credentials__
 * Retrive __bearer token__ by making request to [POST oauth2/token](https://dev.twitter.com/oauth/reference/post/oauth2/token) endpoint with __credentials__
 * Access REST API by authenticating with __bearer token__


### Encoding Consumer Key and Secret into Credentials

__Step 1: URL encode consumer key & secret in adherence with [RFC 1738](http://www.ietf.org/rfc/rfc1738.txt)__
```js
encodeURIComponent( /* consumerKey or consumerSecret */ )
  .replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
  });
```

__Step 2: Concatenate__

```js
var credentials = concate(consumerKey, ':', consumerSecret);
```

__Step 3: Base64 encode bearer token credentials__

```js
Base64.encode(credentials);
base64_encode(credentials);
```

### Obtaining Bearer Token

Send request to `oauth2/token`:
```js
var req = {
  method: 'POST',
  url: 'https:\/\/api.twitter.com\/oauth2\/token',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Authorization': 'Basic eHZ6MWV2RlM0d0VFUFRHRUZQSEJvZzpMOHFxOVBaeVJnNmllS0dFS2hab2xHQzB2SldMdzhpRUo4OERSZHlPZw=='
  },
  data: 'grant_type=client_credentials'
};
```

The value calculated in step 1 must be exchanged for a bearer token by issuing a request to POST oauth2 / token:

 * The request must be a `HTTP POST` request.  
 * The request must include an `Authorization header` with the value of `Basic <base64 encoded value from step 1>``.
 * The request must include a `Content-Type` header with the value of `application/x-www-form-urlencoded;charset=UTF-8`.
 * The body of the request must be `grant_type=client_credentials`.

Example request (Authorization header has been wrapped):

```
POST /oauth2/token HTTP/1.1
Host: api.twitter.com
User-Agent: My Twitter App v1.0.23
Authorization: Basic eHZ6MWV2RlM0d0VFUFRHRUZQSEJvZzpMOHFxOVBaeVJn
                     NmllS0dFS2hab2xHQzB2SldMdzhpRUo4OERSZHlPZw==Content-Type: application/x-www-form-urlencoded;charset=UTF-8
Content-Length: 29
Accept-Encoding: gzip

grant_type=client_credentials
```
If the request was formatted correctly, the server will respond with a JSON-encoded payload:

Example response:
```json
HTTP/1.1 200 OK
Status: 200 OK
Content-Type: application/json; charset=utf-8
...
Content-Encoding: gzip
Content-Length: 140

{"token_type":"bearer","access_token":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2FAAAAAAAAAAAAAAAAAAAA%3DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}
```
  Applications should verify that the value associated with the token_type key of the returned object is bearer. The value associated with the access_token key is the bearer token.

  Note that one bearer token is valid for an application at a time. Issuing another request with the same credentials to /oauth2/token will return the same token until it is invalidated.



Request Limits
---
> `GET application / rate_limit_status` supports application-only authentication. By issuing requests to this method with your application bearer token, you’ll receive a response indicating the current window’s per-resource rate limiting context. Instead of receiving a “rate_limit_context” field indicating the access token being used, you will receive a “application” field instead, with the value being your application’s consumer key.
```json
{
 "rate_limit_context": {
  "application": "nXtEH7H0mi0qT8kSyo7DQ"
 },
 "resources": {
    "search": {
      "/search/tweets": {
        "limit": 450,
        "remaining": 420,
        "reset": 1362436375
      }
    }
  }
}
```
> Another way to discover which methods support application-only auth is by finding those methods with application-only auth rate limits on the [rate limit index](https://dev.twitter.com/rest/public/rate-limits) documentation.


---

```
(function() {
var serviceModule = angular.module('InfoDashboard.services', ['ngResource'])

serviceModule.factory('twitterApiToken', function ($resource, $http) {
  var consumerKey = encodeURIComponent('<your consumer key>')
  var consumerSecret = encodeURIComponent('<your consumer secret>')
  var credentials = Base64.encode(consumerKey + ':' + consumerSecret)

  // Twitters OAuth service endpoint
  var twitterOauthEndpoint = $http.post(
      'https://api.twitter.com/oauth2/token'
      , "grant_type=client_credentials"
      , {headers: {'Authorization': 'Basic ' + credentials, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}
  )
  twitterOauthEndpoint.success(function (response) {
      // a successful response will return
      // the "bearer" token which is registered
      // to the $httpProvider
      serviceModule.$httpProvider.defaults.headers.common['Authorization'] = "Bearer " + response.access_token
  }).error(function (response) {
        // error handling to some meaningful extent
      })

var r = $resource('https://api.twitter.com/1.1/search/:action',
      {action: 'tweets.json',
          count: 10,
      },
      {
<span style="line-height: 1.5;">                    paginate: {method: 'GET'}</span>
      })

  return r;
}
...
.config(function ($httpProvider) {
 serviceModule.$httpProvider = $httpProvider
});
})()
```