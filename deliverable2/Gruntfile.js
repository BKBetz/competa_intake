module.exports = function (grunt) {
 const sass = require('node-sass');
  grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      sass: {

         options: {

               implementation: sass,

               sourceMap: true

           },
          dist: {

              files: {

                  'css/main.css': 'sass/main.scss',

                  'css/main(flex).css':'sass/main(flex).scss'

              }

          }

      },

      watch: {

          options: {

              livereload: true,

          },

          css: {

              files: ['**/*.scss'],

              tasks: ['sass'],

          },

      },



  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-sass');



  grunt.registerTask('default', ['watch']);



};
