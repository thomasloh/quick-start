
module.exports = function(grunt) {

  var PORT = 9001;

  grunt.initConfig({

    // Watch everything plus livereload
    watch: {
      files: ['./*'],
      options: {
        livereload: true
      }
    },
    // Static server
    connect: {
      dev: {
        options: {
          port: PORT,
          base: './'
        }
      }
    },
    exec: {
      open_localhost: {
        command: 'open http://localhost:' + PORT
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-exec');

  // Set default
  grunt.registerTask('default', ['connect', 'exec:open_localhost', 'watch']);

};
