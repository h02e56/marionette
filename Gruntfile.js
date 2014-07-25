module.exports = function(grunt) {


  var path = require('path');
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    __dirname: "./",

    path : {
      dist: __dirname + 'dist',
      src : __dirname + 'src'
    },

    browserify: {
      vendor: {
          src: ['src/main.js'],
          dest: 'dist/build.js'
      }    
    }

  });

  // Default browserify(s).
  grunt.registerTask('serve', [
    'browserify'
  ]);

};
