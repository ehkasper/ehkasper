module.exports = function(grunt) {
	grunt.initConfig({
		cssshrink: {
			options: {
				log: false
			},
			your_target: {
				files: {
					'css': ['css/style.min.css']
				}
			}
		},
		uglify: {
			my_target: {
				files: {
				'javascript/index.min.js': ['javascript/index.js']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-cssshrink');
	grunt.loadNpmTasks('grunt-contrib-uglify');	
};