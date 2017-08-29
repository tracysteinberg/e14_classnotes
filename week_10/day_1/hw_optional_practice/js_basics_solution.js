// Section 1

// What types are these?

/* 1.1 */ 1;               // Number
/* 1.2 */ "cat";           // String
/* 1.3 */ true;            // Boolean
/* 1.4 */ [];              // Array
/* 1.5 */ {};              // Object
/* 1.6 */ 1.1;             // Number
/* 1.7 */ var myVariable;  // Undefined


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */  1;               // True
/* 2.2 */  "cat";           // True
/* 2.3 */  true;            // True
/* 2.4 */  NaN;             // False
/* 2.5 */  [];              // True
/* 2.6 */  {};              // True
/* 2.7 */  undefined;       // False
/* 2.8 */  "";              // False
/* 2.9 */  0;               // False


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
  var num = 1;

// 3.2 Assign a variable that is a string
  var str = "This is a string";

// 3.3 Assign a variable that is a boolean
  var bool = true;

// 3.4 Assign a variable that is an object
  var obj = {};


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false.
  // if (shouldGreet) {
  //   console.log('Hello!');
  // }
  // else {
  //   console.log('Bye!');
  // }


// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
  var firstElement = animals[0];

// 5.2. Assign the last element to a variable
  var lastElement = animals[animals.length - 1];

// 5.3. Assign the length of an array to a variable
  var len = animals.length;

// 5.4. Add an item to the end of the array
  animals.push("alpaca");

// 5.5. Add an item to the start of the array
  animals.unshift("aye-aye");

// 5.6. Assign the index of hedgehog to a variable
  var indexOfHedgehog = animals.indexOf("hedgehog");


// Section 6

// 6.1 Create an array of 5 vegetables
  var vegetables = ["carrot", "brocolli", "peas", "sweetcorn", "potato"];

// 6.2 Loop over the array and write to the console using a "while"

  var i = 0;
  while (i < vegetables.length) {
    console.log(vegetables[i]);
    i++;
  }

// 6.3 Loop again using a "for" with a counter

  for (var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
  }

// 6.4 Loop again using a "for of"

  for (var vegetable of vegetables) {
    console.log(vegetable);
  }

  // Section 7

var accounts = [50.00, 30.00, 10000.00, 50.76, 1.00];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts

function getTotalBalance(accounts){
  var total = 0;
  for (amount of accounts){
    total += amount;
  }
  return total;
}
getTotalBalance(accounts);

// 7.2 Find the index of the account with the largest balance

function getLargestBalance(accounts){
  // we shouldn't default to 0 in case all amounts are negative.
  var largest = accounts[0];
  for (amount of accounts){
    if ( amount > largest ) largest = amount;
  }
  return largest;
}
getLargestBalance(accounts);

// 7.3 Find the index of the account with the smallest balance

function getSmallestBalance(accounts){
  var smallest = accounts[0];
  for (amount of accounts){
    if ( amount < smallest ) smallest = amount;
  }
  return smallest;
}
getSmallestBalance(accounts);

// 7.4 Calculate the average bank account value

function getAverageBalance(accounts){
  var total = 0;
  for (amount of accounts){
    total += amount;
  }
  var numItems = accounts.length;
  var average = total / numItems
  return average;
}
getAverageBalance(accounts);
