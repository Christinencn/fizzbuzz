describe('FizzBuzz', function() {  //(1) start with a describe method.

  var fizzBuzz; // (2) declare a variable inside function block

  beforeEach(function() { // (5/8) normally add the new instance to the it block but doing this applies new instance to every block.
    fizzBuzz = new FizzBuzz();
  });

  describe('knows when a number is divisible by', function() {  //(3)we use nested describe blocks instead of 'context'
    it(" 3, it fizzes", function() { // (4) using an it statement
      expect(fizzBuzz.play(3)).toEqual('Fizz'); //(6) expectation; toBe is the matcher. we don't use the implicit subject anymore, use variable and call method on it.
    });

    it(" 5, it buzzes", function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it(" 3 and 5, it fizzbuzzes", function(){
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

  });

    describe('knows when a number is not divisible by 3, 5 or both', function() {
      it('just prints the number', function(){
        expect(fizzBuzz.play(1)).toEqual(1);
      });

    });

});
