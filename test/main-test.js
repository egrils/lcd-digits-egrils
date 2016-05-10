describe('pos', function() {
    var allLcdDigits;
    var inputs;

    beforeEach(function() {
        allLcdDigits = loadLcdDigits();
        inputs = 910;
    });

    it('should print correct text', function() {

        spyOn(console, 'log');

        consoleLcdDigits(inputs);

        var expectText =
            '```\n' +
            '._. ... ._. \n' +
            '|_| ..| |.| \n' +
            '..| ..| |_| \n' +
            '```'
            ;

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
