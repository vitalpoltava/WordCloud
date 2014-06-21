"use strict";

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        less: {
            compile: {
                options: {
                    compress: true
                },
                files: {
                    'public/css/main.css': ['less/main.less']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['src/app/templates/*.html'], dest: 'public/js/templates', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['src/data_feed/*.json'], dest: 'public/js/data_feed', filter: 'isFile'}
                ]
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/app',
                    src: '**/*.js',
                    dest: 'public/js'
                }]
            }
        },
        jasmine: {
            cloud: {
                src: "public/js/bootstraper.js",
                options: {
                    host: 'http://localhost:8000/',
                    specs: 'test/*.js',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            baseUrl: 'public/js'
                        }
                    }
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task.
    grunt.registerTask('default', ['less', 'uglify', 'copy']);
    grunt.registerTask('styles', ['less']);
    grunt.registerTask('tests', ['connect:server', 'jasmine:cloud']);


};