module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		coffee: {
			compile: {
				files: {
					'site.js': 'coffee/site.coffee'
				}
			}
		},
		less: {
			compile: {
				files: {
					'site.css': 'less/site.less'
				}
			}
		},
		watch: {
			coffee: {
				files: 'coffee/*.coffee',
				tasks: 'coffee'
					},			
			less: {
				files: 'less//*.less',
				tasks: 'less'
					}
			}
			
	});
	
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['coffee', 'less']);
};
