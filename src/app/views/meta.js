define(function(require) {
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var template = require('jst!templates/meta.html');

    return Backbone.View.extend({
        template: template,

        render: function(model) {
            this.$el.html(this.template(model.toJSON()));
            return this;
        }
    });
});