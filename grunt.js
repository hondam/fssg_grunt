var exec = require('child_process').exec;

module.exports = function(grunt) {
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'fssg.js', 'test/fssg-test.js']
    },
    qunit: {
      all: ['test/index.html']
    }
  });

  grunt.registerTask('notify', function(){
    exec("growlnotify -t 'fssg_grunt' -m 'grunt build finish'");
  });

  grunt.registerTask('default', 'lint qunit notify');
};
