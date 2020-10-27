// Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
    //split the string into an array
    let splitted = s.split(' ');
    console.log(splitted)
    let result = [];
    //iterate over the array
    for (let i =0 ; i < splitted.length; i++) {
      if (splitted[i] === splitted[i + 1]){ 
        delete splitted[i]
      } 
      if (splitted[i] !== undefined){
       result.push(splitted[i]) 
      }
    }
    console.log(result)
    return result.join(' ')
      //if the index  is equal to the next index, push it to a result
  
  }