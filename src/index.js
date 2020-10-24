const VOCABULARY = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety'
}

const HUNDRED = 'hundred';

function isVocabDec(number) {
    return typeof VOCABULARY[number] !== "undefined";
}

module.exports = function toReadable (number) {
    if (typeof number !== "number") {
        return 'Not a number!'
    }

    const stringNumber = number + '';

    if (VOCABULARY[stringNumber] !== undefined) {
        return VOCABULARY[stringNumber];
    }
    if (number % 100 === 0) {
        return `${VOCABULARY[stringNumber[0]]} ${HUNDRED}`;
    }

    const length = stringNumber.length;
    let result = '';

    for (let i = 0; i < length; ++i) {
        const order = length - i;

        if (order === 3) {
            result += `${VOCABULARY[stringNumber[i]]} ${HUNDRED} `
        } else if (order === 2) {
            const twoDigit = `${stringNumber[i]}${stringNumber[i+1]}`;

            if (isVocabDec(+twoDigit)) {
                result += VOCABULARY[+twoDigit]
                break;
            } else {
                result += VOCABULARY[`${stringNumber[i]}0`];
            }
        } else if (order === 1) {
            result += ` ${VOCABULARY[stringNumber[i]]}`
        }
    }

    return result;
}
