var exec = require('child_process').exec;
var ret = exec('grunt --config grunt.js', function(err, stdout, stderr) {
//  console.log('err', err);
  console.log('stdout', stdout);
//  console.log('stderr', stderr);
});
