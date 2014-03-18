module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
    	 options: {
    		 mangle: false,
    	     banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
    	        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
    	 },
    	 my_target: {
    		 files: {
    			 'www/js/www.min.js': ['www/js/angular/www/routes.js', 'www/js/angular/www/controllers.js', 'www/js/angular/www/filters.js', 'www/js/angular/www/directives.js', 'www/js/angular/www/validators.js', 'www/js/angular/www/services.js']
    	     }
    	 }
    },
    watch: {
    	  www: {
    	    files: ['www/css/aksuchy.less','www/css/mixins.less','www/js/angular/www/routes.js', 'www/js/angular/www/controllers.js', 'www/js/angular/www/filters.js', 'www/js/angular/www/directives.js', 'www/js/angular/www/validators.js', 'www/js/angular/www/services.js'],
    	    tasks: ['jsmin', 'make-less'],
    	    options: {
    	    	interrupt: true,
    	    },
    	  }
    },
    less: {
    	  development: {
    	    options: {
    	      paths: ["www/css"]
    	    },
    	    files: {
    	    	 'www/css/styles.css':'www/css/aksuchy.less'
    	    }
    	  }
     }
});


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-image-resize');
  grunt.loadNpmTasks('grunt-contrib-less');
  
  // Default task(s).
  grunt.registerTask('jsmin', ['uglify']);
  grunt.registerTask('watching', ['watch']);
  grunt.registerTask('make-less', ['less']);



};