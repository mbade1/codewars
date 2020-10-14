// ISBN-10 identifiers are ten digits. The first nine digits are on the range 0 to 9. The last digit can be either on the range 0 to 9 or the letter 'X' used to indicate a value of 10.

// For an ISBN-10 to be valid, the sum of the digits multiplied by their position has to equal zero modulo 11. For example, the ISBN-10: 1112223339 is valid because:

// (((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) % 11) == 0
// Complete the validISBN10() function.

// validISBN10('1112223339') ; should return true
// validISBN10('1234554321') ; should return true
// validISBN10('1234512345') ; should return false

function validISBN10(isbn) {
    //if the length is not 10 return false
    //if the letter at the end of the string is an X, that number is worth 10
    console.log(isbn[isbn.length - 1])
    if (isbn.length !== 10) { return false; }
    //split the string
    let splitted = isbn.split('');
    //establish a counter
    let counter = 0;
    //iterate over the splitted string
    for (let i = 0; i < splitted.length; i++) {
      //if the item in iteration is "X" and it's NOT at the end of the array, false
      if ((splitted[i] === 'X') && (splitted[i] !== isbn[isbn.length -1])) {
        return false
      }
      //add to counter the item * indexOf that item
      if ((splitted[i]) === 'X') {
        counter += (10 * 10)
      } else {
      counter += (splitted[i] * (i+1))
      }
    }
    
    //check to see if the counter % 11 is 0. This automatically checks if counter is NaN (false)
    //if yes, return true. Otherwise, return false
    if (counter % 11 === 0){ 
      return true 
    } else {
      return false
    }
  }