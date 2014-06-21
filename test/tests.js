describe("Word Cloud", function() {

    it("words content container rendered", function() {
        var el = $('.left');
        expect(el.length).toBeGreaterThan(0);
    });

    it("meta info container rendered", function() {
        var el = $('.right');
        expect(el.length).toBeGreaterThan(0);
    });

    it("words rendered", function() {
        var words = $('.word');
        expect(words.length).toBeGreaterThan(0);
    });

    it("words font size is pre-defined", function() {
        var word = $('.word:first');
        expect([14, 16, 18, 20, 24, 35]).toContain(parseInt(word.css('font-size')));
    });

    it("click shows meta data", function(done) {
        var word = $('.word:first');
        var text = word.text();

        // simulate click event
        var e = jQuery.Event("click");
        word.trigger(e);

        setTimeout(function() {
            var metaText = $('.meta-info').find('div:first').find('b').text();
            expect(text).toEqual(metaText);
            done();
        }, 300);
    });

});