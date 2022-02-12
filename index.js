// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log("1. Array ages: ", ages)

//1a  Programmatically subtract the value of the first element in the array from the value in the last element of the array
//(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
// Print the result to the console.
let subtract = ages[ages.length - 1] - ages[0];
console.log("1.a. " + subtract);

//1b Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// Pushing number 25 in the array which takes last position in the array 
ages.push(25);
console.log(ages);
subtract = ages[ages.length - 1] - ages[0];
console.log("1.b. ", subtract);

// 1c	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
    avg = sum / ages.length;
}
console.log("1.c. The average age is", + avg);

// 2:	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log("2", names);

// 2a 	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// Creating a for loop that will iterate names array and acces each index 
avg = 0;
for (let i = 0; i < names.length; i++) {
    avg += (names[i].length / names.length);
}
console.log("2.a. Average number of letters per name is", avg);

// 2b	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
for (let i = 0; i < names.length; i++) {
    console.log("2.b", names.join(' '));
}

// 3	How do you access the last element of any array?
// nameOfArray[nameOfArray.length-1];
// example using our names array:
console.log("3.", names[names.length - 1]);

//4	How do you access the first element of any array?
// nameOfArray[0] - index 0 because array elements start at position 0
// example using our names array:
console.log("4.", names[0]);

//5	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("5.", nameLengths);

// 6 Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let sumOfNum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNum += nameLengths[i];
}
console.log("6. Sum of all the elements in the array is", sumOfNum);

// 7	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function twoParameters(word, n) {
    let concat = '';
    for (let i = 0; i < n; i++) {
        concat += word;
    }
    return concat;
}
console.log("7.", twoParameters("Milan", 4));

// 8  Write a function that takes two parameters,
// firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
let fullName = (firstName, lastName) => (firstName + " " + lastName);

console.log("8.", fullName("Aleksa", "Marjanov"));

// 9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function arrayOfNumbers(array1) {
    let sumOfArray = 0;
    for (let i = 0; i < array1.length; i++) {
        sumOfArray += array1[i];
    }
    if (sumOfArray > 100) {
        return true;
    }
    else {
        return false;
    }
}
console.log("9.", arrayOfNumbers([5, 6, 7, 40])); // false
console.log("9.", arrayOfNumbers([3, 5, 50, 60])); // true

// 10	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function numbers(arr) {
    let sumOfArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfArr += arr[i];
        average = (sumOfArr / arr.length);
    }
    return average;
}
console.log("10.", numbers([5, 15, 20, 25]));
console.log("10.", numbers([30, 40, 50, 60]));

// 11 	Write a function that takes two arrays of numbers and returns true
// if the average of the elements in the first array is greater than the average of the elements in the second array.
function twoArr(x, y) {
    if (numbers(x) > numbers(y)) {
        return true;
    }
    return false;
}
console.log("11.", twoArr([1, 2, 3, 4, 5], [5, 6, 7, 8, 9]));
console.log("11.", twoArr([20, 10, 10, 13, 15], [7, 8, 9, 10, 11]));

//12 Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    }
    return false;
}

console.log("12.", willBuyDrink(false, 12.75));
console.log("12.", willBuyDrink(true, 11));
console.log("12.", willBuyDrink(true, 10));

/*13 Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
* Function that will prompt user to enter a number from 0-15 and it will transform that number to binary code length of byte 
* Since computer works with only 0,1 and all the letters/symbols,numbers on the keyboard are assigned some value in binary code I thought
* It would be fun to create something simple like for numbers 0-15 
*/

function binary() {

    var bin;
    // asking user to enter a number
    bin = prompt('Entering a number 0-15, will be transformed to binary(byte)');
    console.log('13. number that user has entered is:', bin);

    switch (bin) {
        case '0':
            alert('Your number is 0000 0000');
            break;
        case '1':
            alert('Your number is 0000 0001');
            break;
        case '2':
            alert('Your number is 0000 0010');
            break;
        case '3':
            alert('Your number is 0000 0011');
            break;
        case '4':
            alert('Your number is 0000 0100');
            break;
        case '5':
            alert('Your number is 0000 0101');
            break;
        case '6':
            alert('Your number is 0000 0110');
            break;
        case '7':
            alert('Your number is 0000 0111');
            break;
        case '8':
            alert('Your number is 0000 1000');
            break;
        case '9':
            alert('Your number is 0000 1001');
            break;
        case '10':
            alert('Your number is 0000 1010 or Letter: A in hexadecimal');
            break;
        case '11':
            alert('Your number is 0000 1011 or Letter: B in hexadecimal');
            break;
        case '12':
            alert('Your number is 0000 1100 or Letter: C in hexadecimal');
            break;
        case '13':
            alert('Your number is 0000 1101 or Letter: D in hexadecimal');
            break;
        case '14':
            alert('Your number is 0000 1110 or Letter: E in hexadecimal');
            break;
        case '15':
            alert('Your number is 0000 1111 or Letter: F in hexadecimal ');
            break;
        default:
            alert('Error! Please enter a number from 0-15');
    }

}
binary();



