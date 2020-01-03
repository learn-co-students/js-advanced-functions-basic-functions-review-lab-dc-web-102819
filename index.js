// Your code here

function saturdayFun(activity = 'roller-skate') {
	return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
	return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = '*') {
	let innerFunction = function(param = 'special') {
		return `You are ${string}${param}${string}!`
	}

	return innerFunction
}

let Calculator = {
	add: (a, b) => a +b,
	subtract: (a, b) => a -b,
	multiply: (a, b) => a*b,
	divide: (a, b) => a/b
}

function actionApplyer(startInt, array) {
	if (array.length) {
		for (let i =0; i<array.length; i++) {
			startInt = array[i](startInt)
		}
		return startInt
	}else{
		return startInt
	}
}