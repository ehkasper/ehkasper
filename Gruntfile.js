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
		}
	});
	grunt.loadNpmTasks('grunt-cssshrink');
};