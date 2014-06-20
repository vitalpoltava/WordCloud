describe("Word Cloud", function() {

    it("words rendered", function() {
        var words = $('.word');
        expect(words.length).toBeGreaterThan(0);
    });

    it("words font size is pre-defined", function() {
        var word = $('.word:first');
        expect([14, 16, 18, 20, 24, 35]).toContain(parseInt(word.css('font-size')));
    });

});