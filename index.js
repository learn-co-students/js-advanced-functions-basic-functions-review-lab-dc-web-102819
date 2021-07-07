function saturdayFun(activity = "roller-skate"){

     return `This Saturday, I want to ${activity}!`

}

let mondayWork = function (activity = 'go to the office'){
 
    return `This Monday, I will ${activity}.`

}

function wrapAdjective(flair = "*"){

    return function(adjective = "special"){

        return `You are ${flair}${adjective}${flair}!`
    }
}

let Calculator = {

    add: function(){
      return 1 + 3
    },
    subtract: function(){
        return 1 - 3
      },
      multiply: function(){
        return 1 * 3
      },
      divide: function(){
          return 10 / 5
      }
}


function actionApplyer(number, functionsArray){

    if (functionsArray.length === 0){
        return number
    }else if(number === 13){
     for(let i = 0; i < functionsArray.length; i ++){
        number =  functionsArray[i](number)
     }
     return number
    }

}