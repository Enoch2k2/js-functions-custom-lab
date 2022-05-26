// define your functions here
function doMath(num1, num2, equation) {
  if(equation === "+") {
    return num1 + num2;
  }
  else if(equation === "-") {
    return num1 - num2;
  }
  else if(equation === "*") {
    return num1 * num2;
  }
  else {
    return num1 / num2;
  }
}

function sayHelloToGrandma(string) {
  if(string.toUpperCase() === string) {
    return 'Not since 1939!'
  }
  else if(string.toLowerCase() === string) {
    return 'Huh? Speak up!'
  } else {
    return 'I love you too!'
  }
}

/** Don't delete this line **/
exports.sayHelloToGrandma = sayHelloToGrandma;
exports.doMath = doMath;