// function CallableNumberGenerator(value, func) { 

//   var selfFunction = function() {
//     var v = func.apply(null, arguments);
//     return CallableNumberGenerator(v, func);
//   }

//   var callableNumber = selfFunction.bind(null, value);
//   var value = value;

//   callableNumber.valueOf = function(){ return value };

//   return callableNumber;
// }

// function add() {
//   var value = 0;
//   for(idx in arguments) {
//     value += arguments[idx];
//   }

//   return value;
// }



function add(numberOne) {
    var count = numberOne;

    return function innerAdd(numberTwo) {
      if (numberTwo === undefined) {
        return count;
      } else {
        count += numberTwo;
        return innerAdd;
      }
    }
 }




console.log(add(1)(2)(3)(6)());