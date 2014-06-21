requirejs.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        text: 'libs/require_text',
        jst: 'libs/require_jst'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

define(function(require) {
    'use strict';

    $('body').append('<div id="main"></div>'); // add main wrapper

    // init application
    var App = require('views/mainView');
    new App();
});