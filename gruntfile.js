module.exports = function(grunt) {  
  grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    
    grunt.initConfig({
      uglify: {
        my_target: {
          files: {
           // 'app/assets/javascripts/script.js': ['app/assets/javascripts/js/*.js']
          } //files
        } //my_target
      }, //uglify
      compass: {
        dev: {
          options: {
            require: 'susy',
            config: 'config.rb'
          } //options
        } //dev
      }, //compass
      watch: {
        options: { livereload: true },
        scripts: {
          files: ['app/assets/javascripts/js/*.js'],
          tasks: ['uglify']
        }, //script
        sass: {
          files: ['app/assets/stylesheets/*.scss'],
          tasks: ['compass:dev']
        }, //sass
        html: {
          files: ['**/*.html.erb']
        }
      } //watch
    }) //initConfig
    grunt.registerTask('default', 'watch');
} //exports