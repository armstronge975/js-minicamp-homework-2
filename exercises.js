//Do not change any of the function names

function getBiggest(x, y) {
  if(x > y) {
    return x;
  }
  return y;
}

function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!';
  }
  else if (language === 'English') {
    return 'Hello!';
  }
  else if (language === 'Spanish') {
    return 'Hola!';
  }
  else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
  return (num === 10 || num === 5);
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  return (num < 50 && num > 20);
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
  return (num === Math.floor(num));

}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  if(num % 3 === 0) {
    if (num % 5 === 0) {
      return 'fizzbuzz';
    }
    return 'fizz';
  }
  else if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
  if (num === 0 || num === 1) {
    return false;
  }

  for (var i = 2; i <= num/2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function returnFirst(arr) {
  //return the first item from the array
  if (arr) {
    return arr[0];
  }
}

function returnLast(arr) {
  if (arr) {
    return arr[arr.length - 1];
  }
}

function getArrayLength(arr) {
  if (arr) {
    return arr.length;
  }
}

function incrementByOne(arr) {
  if (arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]++;
    }
  }
  return arr;
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  if (arr && item) {
    arr.push(item);
    return arr;
  }
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
  if (arr && item) {
    arr.unshift(item);
    return arr;
  } 
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
  if (words && words.length > 0) {
    var sentence = words[0];
    for (var i = 1; i < words.length; i++) {
      sentence += ' ' + words[i];
    }
    return sentence;
  }
  return '';
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
  if (arr) {
    return arr.toString().includes(item);
  }
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
  if (numbers) {
    var sum = 0;
  numbers.forEach(function(item) {
    sum += item;
  });
  return sum;
  } 
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  if (testScores) {
    return Math.round(addNumbers(testScores) / testScores.length);
  }
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
  var largest = -100000;
  if (numbers) {
    numbers.forEach(function(item) {
      if (item > largest) {
        largest = item;
      }
    });
    return largest;
  }
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
