function buildDigit(inputs) {
    var digits = inputs.toString().split("");

    return digits;
}

function buildLcdDigit(digits) {
    var lcdDigits = [];

    digits.forEach(function (digit) {
        loadLcdDigits().forEach(function (lcdDigit) {
            if(lcdDigit.digit === digit)
                lcdDigits.push(lcdDigit);
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
        allFirstLine += lcdDigit.firstLine + ' ';
        allSecondLine += lcdDigit.secondLine + ' ';
        allThirdLine += lcdDigit.thirdLine + ' ';
    });
    lcdLines = {lcdDigits:lcdDigits,allFirstLine:allFirstLine,allSecondLine:allSecondLine,allThirdLine:allThirdLine};

    return lcdLines;
}

function buildLcdDigitsText(lcdLines) {
    return '```' + '\n' + lcdLines.allFirstLine + '\n' + lcdLines.allSecondLine + '\n' + lcdLines.allThirdLine + '\n' + '```';
}

function consoleLcdDigits(inputs) {
    var digits = buildDigit(inputs);
    var lcdDigits = buildLcdDigit(digits);
    var lcdLines = buildLcdLine(lcdDigits);
    var lcdDigitsText = buildLcdDigitsText(lcdLines);

    console.log(lcdDigitsText);
}
