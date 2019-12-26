function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(pString='*') {
  return function(singleParameter='special'){
    return `You are ${pString}${singleParameter}${pString}!`
  }
}

let Calculator = {
  add: function(a,b){return a + b},
  subtract: function(a,b){return a - b},
  multiply: function(a,b){return a * b},
  divide: function(a,b){return a / b}
}

function actionApplyer(starting, arrayOfFunctions) {
  if (arrayOfFunctions.length === 0) {
    return starting
  } else {
    arrayOfFunctions.forEach(function(fun) {
      starting = fun(starting)
    })
    return starting
  }
}
