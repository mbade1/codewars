// Given a list of numbers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// odd_or_even([0])          ==  "even"
// odd_or_even([0, 1, 4])    ==  "odd"
// odd_or_even([0, -1, -5])  ==  "even"

function oddOrEven(array) {
    if (array.length === 0) { return 'even' }
    let reduced = array.reduce((acc, value) => acc + value );
    console.log(reduced)
    if (Math.abs(reduced) % 2 === 0) { return 'even' }
    if (Math.abs(reduced) % 2 === 1) { return 'odd'}
  }