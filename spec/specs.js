describe('pigify', function() {

    it('will add ay to the end of a word starting with a vowel', function() {
        expect(pigify('apple')).to.equal('appleay');
    });

    it('will move the first consonant of a word to the end and add ay', function() {
        expect(pigify('beard')).to.equal('eardbay');
    });

    it('will move the first two consonants of a word to the end and add ay', function() {
        expect(pigify('stop')).to.equal('opstay');
    });

    it('will move qu from start to the end and add ay', function() {
        expect(pigify('quiet')).to.equal('ietquay');
    });

    it('will pigify all words', function() {
        expect(pigify('array')).to.equal('arrayay');
    });

});
