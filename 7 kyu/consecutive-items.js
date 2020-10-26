// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

function consecutive(arr, a, b) {
    let total = a + b;
    let result;
    for (let i = 0; i < arr.length; i++) {
  
      if (arr[i] + arr[i + 1] === total || arr[i] + arr[i - 1] === total) { return true}
      else { result = false}
    }
    return result
  }