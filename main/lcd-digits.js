function loadLcdDigits() {
    return [
        {
            digit:'0',
            firstLine:'._.',
            secondLine:'|.|',
            thirdLine:'|_|'
        },
        {
            digit:'1',
            firstLine:'...',
            secondLine:'..|',
            thirdLine:'..|'
        },
        {
            digit:'2',
            firstLine:'._.',
            secondLine:'._|',
            thirdLine:'|_.'
        },
        {
            digit:'3',
            firstLine:'._.',
            secondLine:'._|',
            thirdLine:'._|'
        },
        {
            digit:'4',
            firstLine:'...',
            secondLine:'|_|',
            thirdLine:'..|'
        },
        {
            digit:'5',
            firstLine:'._.',
            secondLine:'|_.',
            thirdLine:'._|'
        },
        {
            digit:'6',
            firstLine:'._.',
            secondLine:'|_.',
            thirdLine:'|_|'
        },
        {
            digit:'7',
            firstLine:'._.',
            secondLine:'..|',
            thirdLine:'..|'
        },
        {
            digit:'8',
            firstLine:'._.',
            secondLine:'|_|',
            thirdLine:'|_|'
        },
        {
            digit:'9',
            firstLine:'._.',
            secondLine:'|_|',
            thirdLine:'..|'
        }
    ];
}

function buildDigit(inputs) {
    var digits = [];
    var number = inputs.toString();

    digits.push(number.split(""));

    return digits;
}

function buildLcdDigit(digits) {
    var lcdDigits = [];

    digits.forEach(function (digit) {
        loadLcdDigits().forEach(function (lcdDigit) {
            if(digit === lcdDigit.digit)
                lcdDigit.push(lcdDigit);
        });
    });

    return lcdDigits;
}

function buildLcdLine(lcdDigits) {
    var lcdLines;
    var allFirstLine = '';
    var allSecondLine = '';
    var allThirdLine = '';

    lcdDigits.forEach(function (lcdDigit) {
        allFirstLine += '/t' + lcdDigit.firstLine;
        allSecondLine += '/t' + lcdDigit.secondLine;
        allThirdLine += '/t' + lcdDigit.thirdLine;
    });
    lcdLines = {lcdDigits:lcdDigits,allFirstLine:allFirstLine,allSecondLine:allSecondLine,allThirdLine:allThirdLine};

    return lcdLines;
}

function buildLcdDigitsText(lcdLines) {
    return '' + lcdLines.allFirstLine + '/n' + lcdLines.allSecondLine + '/n' + lcdLines.allThirdLine + '/n';
}

function consoleLcdDigits() {
    var digits = buildDigit(910);
    var lcdDigits = buildLcdDigit(digits);
    var lcdLines = buildLcdLine(lcdDigits);
    var lcdDigitsText = buildLcdDigitsText(lcdLines);

    console.log(lcdDigitsText);
}
