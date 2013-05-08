describe('dupedLetters', function() {
  it('returns an array of all the duplicated letters', function () {
    var testString = 'Ilovetoeatlotsofbacon!';
    expect(dupedLetters(testString)).toEqual(["a", "e", "l", "o", "t"]);
  });

});
