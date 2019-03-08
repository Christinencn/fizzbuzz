var FizzBuzz = function(){   // line defines fizzbuzz / creates a "new class"
}

FizzBuzz.prototype.play = function(number) { // creating a play method, stored on the prototype that we will use to access isDivisibleBy.
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  } else if (this._isDivisibleBy(3,number)) {
    return 'Fizz';
  } else {
    return number;
  }
}
FizzBuzz.prototype._isDivisibleBy = function(divisor, number) { //added _ to indicate it is a private method and thus should only be available within the class.
  return number % divisor === 0;
}
