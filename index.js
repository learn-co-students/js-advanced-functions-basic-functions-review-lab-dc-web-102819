// Your code here
function saturdayFun(activity="roller-skate") {
    return "This Saturday, I want to " + activity + "!";
}

let mondayWork = function(activity="go to the office") {
    return "This Monday, I will " + activity + "." 
}

function wrapAdjective(flair="*") {
    return function(adj="special") {
        return "You are " + flair + adj + flair + '!'
    }
}

let Calculator = {
    add: function(addend1, addend2) {
        return addend1 + addend2
    },
    subtract: function(minuend, subtrahend) {
        return minuend - subtrahend
    },
    multiply: function(multplicand, multiplier) {
        return multplicand * multiplier
    },
    divide: function(dividend, divisor) {
        return dividend / divisor
    }
}

let actionApplyer = function(startInt, callbacks) {
    return callbacks.reduce((accumulator, func) => func(accumulator), startInt);
    }