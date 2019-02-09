var https = require('https');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chuck){
      console.log('[-- CHUNK OF LENGTH ' + chuck.length + '--]');
      console.log(chuck.toString());
  });
}

https.request(options, callback).end();

console.log("I've made the request!");

