define(function(require) {
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var template = require('jst!templates/word.html');

    return Backbone.View.extend({
        template: template,

        render: function(model) {
            return this.template(model.toJSON());
        }
    });
});