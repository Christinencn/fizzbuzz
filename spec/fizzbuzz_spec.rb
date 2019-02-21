require "fizzbuzz"

describe FizzBuzz do

  it "if mulitples of 3 print Fizz" do
    expect(subject.fizzbuzz(3)).to eq("Fizz")
  end

  it "if multiples of 5 print Buzz" do
  expect(subject.fizzbuzz(5)).to eq("Buzz")
  end

  it "if multiples of 3 & 5 print FizzBuzz" do
  expect(subject.fizzbuzz(15)).to eq("FizzBuzz")
  end

  it "prints any other number" do
      expect(subject.fizzbuzz(2)).to eq(2)
 end
end
