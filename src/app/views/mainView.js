define(function(require) {
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var template = require('jst!templates/mainView.html');
    var dataFeed = require('text!data_feed/data.json');
    var Words = require('collections/words');
    var WordView = require('views/word');
    var Meta = require('views/meta');

    return Backbone.View.extend({
        template: template,
        el: '#main',
        templateModel: {},

        initialize: function() {
            this.data = JSON.parse(dataFeed)['topics'] || [];
            this.words = new Words(this.data);
            this.words.markWithColour();
            this.words.addTextSize();
            this.render();
            this.renderWords();
        },

        render: function() {
            this.$el.html(this.template(this.templateModel));
            return this;
        },

        renderWords: function() {
            var that = this;
            this.meta = new Meta({el: '.right'});
            var element = this.$el.find('.left');
            this.wordView = new WordView();
            this.words.forEach(function(el) {
                var newWord = $(that.wordView.render(el));
                element.append(newWord);
                newWord.click(function() { that.meta.render(el); });
            });
        }
    });
});