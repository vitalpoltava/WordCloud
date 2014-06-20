define(function(require) {
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var Word = require('models/word');

    return Backbone.Collection.extend({
        model: Word,

        /**
         *  Adding a new property 'color' to models depending on sentiment score
         */
        markWithColour: function() {
            var data = this.toJSON();
            data.forEach(function(el) {
                var sentiment = parseInt(el.sentimentScore, 10) || 0;
                if (sentiment > 60) {
                    el.color = 'lightgreen';
                } else if (sentiment < 40) {
                    el.color = 'red';
                } else {
                    el.color = 'darkgray';
                }
            });
            this.reset();
            this.add(data);
        },

        /**
         *  Adding a text size from pre-defined list depending on relative mentioning figure
         */
        addTextSize: function() {
            var sizes = [14, 16, 18, 20, 24, 35]; // text sizes pre-defined
            var prop = 'burst';
            var data = _.sortBy(this.toJSON(), function(el) {return el[prop]});
            var least = data[0][prop];
            var most = data[data.length-1][prop];
            var step = parseInt((most - least)/5);

            data.forEach(function(el) {
                var volume = parseInt(el[prop], 10) || 0;
                el.textSize = sizes[parseInt(volume/step)] || sizes[0];
            });
            this.reset();
            this.add(_.shuffle(data));
        }
    });
});