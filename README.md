#FizzBuzz in Ruby and JavaScript

For numbers 1 to 15, if the number is a multiple of 3, print "Fizz", multiple of 5, print "Buzz", if a multiple of both 3 & 5 print "FizzBuzz". if not print the numbers as normal.

## FizzBuzz Rules (features/ behaviours we want our program to have)

1)if multiple of 3 print "Fizz"
2)if multiple of 5 print "Buzz"
3)if multiples of 3 & 5 print "FizzBuzz"
4)prints the numbers out

## Steps for Ruby:

1)Create a Gemfile
2)Source(library repository, specify where we need to look for our gems), version of ruby(optional), ask for RSpec
3)Bundler install (to test that rspec gem has worked)
4) Create spec & lib files
5) Write and execute a test (make it red then make it pass)

## In JS

1) Uses Jasmine to test and uses the command `` open SpecRunner.html`` to run the test.
2) Create spec and script files
3) To test the program in the console, press `cmd + option + i` in the same window where your SpecRunner.html is loaded up and then do the following:
  `var fizzBuzz = new FizzBuzz();`        (creates new instance of fizzBuzz)

  `for (var i = 1; i <= 100; i++) { `         (prints numbers 1-100 showing )
    `console.log(fizzBuzz.play(i));
  }`

you can also call the method play which should result in fizzbuzz behaviour

` fizzBuzz.play(18) => 'Fizz'
  fizzBuzz.play(20) => 'Buzz'
  fizzBuzz.play(45) => 'FizzBuzz'
  fizzBuzz.play(37) => '37' `
