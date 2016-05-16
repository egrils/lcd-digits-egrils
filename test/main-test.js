describe('lcd-digits', function () {
    describe('Integration Testing', function() {
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
                    '._. ... ._. \n' +
                    '|_| ..| |.| \n' +
                    '..| ..| |_| \n'
                ;

            expect(console.log).toHaveBeenCalledWith(expectText);
        });

    });

    describe('unit test',function () {
        describe('buildDigit', function () {

            it('should return correct array', function () {
                var digits = buildDigit(910);
                var expectArray = ['9','1','0'];

                expect(digits).toEqual(expectArray);
            });
        });

        describe('buildLcdDigit', function () {

            it('should return correct array', function () {
                var lcdDigits = buildLcdDigit(['9','1','0']);
                var expectArray = [
                    {
                        firstLine:'._.',
                        secondLine:'|_|',
                        thirdLine:'..|'
                    },
                    {
                        firstLine:'...',
                        secondLine:'..|',
                        thirdLine:'..|'
                    },
                    {
                        firstLine:'._.',
                        secondLine:'|.|',
                        thirdLine:'|_|'
                    }

                ];

                expect(lcdDigits).toEqual(expectArray);
            });
        });

        describe('buildLcdLine', function () {

            it('should return correct array', function () {
                var lcdDigits = [
                    {
                        firstLine:'._.',
                        secondLine:'|_|',
                        thirdLine:'..|'
                    },
                    {
                        firstLine:'...',
                        secondLine:'..|',
                        thirdLine:'..|'
                    },
                    {
                        firstLine:'._.',
                        secondLine:'|.|',
                        thirdLine:'|_|'
                    }

                ];
                var lcdLines = buildLcdLine(lcdDigits);
                var expectObject = {
                    allFirstLine:'._. ... ._. ',
                    allSecondLine:'|_| ..| |.| ',
                    allThirdLine:'..| ..| |_| '
                };

                expect(lcdLines).toEqual(expectObject);
            });
        });
    });
});
