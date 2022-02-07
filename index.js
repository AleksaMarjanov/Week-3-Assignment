// 1:
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let sum = 0;

//1a
let subtract = ages[ages.length - 1] - ages[0];
console.log(subtract);

//1b
ages.push(26);
console.log(subtract);

// 1c
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
    avg = sum / ages.length;

}
console.log("The average age is", + avg);

// 2:
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

// 2a
avg = 0;
for (let i = 0; i < names.length; i++) {
    avg += (names[i].length / names.length);

}
console.log("Average number of letters per name is", avg);

// 2b
for (let i = 0; i < names.length; i++) {
    console.log(names.join(''));
}
// 3

console.log(names[names.length - 1]);

//4
console.log(names[0]);

//5 
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);

}
console.log(nameLengths);

// 6 

let sumOfNum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNum += nameLengths[i];
}
console.log(sumOfNum);

// 7
function twoParameters(word, n) {
    let concat = '';
    for (let i = 0; i <= n; i++) {
        concat += word;
    }
    return concat;
}

console.log(twoParameters("Milan", 4));


// 8 
function fullName(firstName, lastName) {
    return (firstName + " " + lastName);

}
console.log(fullName("Aleksa", "Marjanov"));

// 9

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
console.log(arrayOfNumbers([5, 6, 7, 40])); // false
console.log(arrayOfNumbers([3, 5, 50, 60])); // true

// 10
function numbers(arr) {
    let sumOfArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfArr += arr[i];
        average = (sumOfArr / arr.length);
    }
    return average;
}
console.log(numbers([5, 15, 20, 25]));
console.log(numbers([30, 40, 50, 60]));

// 11 
function twoArr(x, y) {

    if (numbers(x) > numbers(y)) {
        return true;
    }
    return false;

}
console.log(twoArr([1, 2, 3, 4, 5], [5, 6, 7, 8, 9]));
console.log(twoArr([20, 10, 10, 13, 15], [7, 8, 9, 10, 11]));

//12

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    }
    return false;
}

console.log(willBuyDrink(false, 12.75));
console.log(willBuyDrink(true, 11));
console.log(willBuyDrink(true, 10));

//13
