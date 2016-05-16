/**
 * Version : Ver 1.2016.05161615
 * Author  : jihwan, Chung
 * filename: Gruntfile
 */

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		includereplace: {
			dist: {
				files: [
					{src: '*.html', dest: 'build/iframes', expand: true, cwd: 'dev/iframes'}
				]
			}
		},
		copy: {
			files: [
				// 이미지
				{
					expand: true,
					cwd: ['dev/*/images/','layout/images/'],
					src: ['dev/*/images/*.{png,jpg,gif}', 'layout/images/*.{png,jpg,gif}'],
					dest: ['build/dev/images/','build/images/']
				},
				// html
				{
					expand: true,
					cwd: ['dev/*/','layout/'],
					src: ['dev/*.html','layout/*.html'],
					dest: ['build/dev/','build/']
				}
			]
		}
	});
	require('jit-grunt')(grunt, {
		includereplace: 'grunt-include-replace'
	});

	// Develop task(s).
	grunt.registerTask('dev', ['includereplace']);

	// Build task(s).
	grunt.registerTask('build', ['copy']);

	// Default task(s).
	grunt.registerTask('default', ['dev', 'build', 'uglify', 'jsdoc']);

};
