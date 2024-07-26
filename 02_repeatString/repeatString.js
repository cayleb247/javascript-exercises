const repeatString = function(string, num) {
    if (num == 0 || num < 0) {
        if (num < 0) {
            return 'ERROR';
        } else {
            return '';
        }
    }
    let output = string;

    for (num; num > 1; num--) {
        output += string;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
