var baseNumeralValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var convert = function (numerals) {
    var value = 0;
    for (var i = 0; i < numerals.length; i++) {
        if ( i+1 < numerals.length && baseNumeralValues[numerals[i]] < baseNumeralValues[numerals[i+1]]) {
            value += baseNumeralValues[numerals[i+1]] - baseNumeralValues[numerals[i]];
            i++;
        }
        else
            value+= baseNumeralValues[numerals[i]];
    }
    return value;
}