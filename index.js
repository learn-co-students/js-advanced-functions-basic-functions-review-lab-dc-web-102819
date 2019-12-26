function saturdayFun(name = "roller-skate"){
   return `This Saturday, I want to ${name}!`
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

let wrapAdjective = function(style = "*"){
    return function(adjust){
        return `You are ${style}${adjust}${style}!`
    }
}   

const Calculator = {
    add: function (a, b){
        return a + b
    },
    subtract: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a/b
    }
}

let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
}
