

module.exports = function(grunt) {


  grunt.initConfig({
    
      //CONCATENAR ARQUIVOS   
      concat: {
        options: {
          stripBanners: true,
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
        },        
        dist: {
            src: ["js/a.js", "js/b.js"]
          , dest: "dist/js/app.js"
        }
      },      
      
    // MINIFICAR ARQUIVOS      
    uglify: {
    my_target: {
      files: {
        'dest/output.min.js': ['dist/js/app.js']
      }
    }
  }   
  });
  
  
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    
    grunt.registerTask('default', ['concat', 'uglify']);
};


