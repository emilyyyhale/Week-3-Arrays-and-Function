// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// Do not use numbers to reference the last element, find it programmatically; ages[7] – ages[0] is not allowed!
let lastElement = ages[ages.length-1];
console.log(lastElement - ages[0]);

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(10, 18)
console.log(ages);

// Use a loop to iterate through the array and calculate the average age.
var sum = 0;
    for (i=0; i<ages.length; i++) {
        sum = sum + ages[i];
    } 
console.log(sum/ages.length);
// end of question 1





// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names)

// Use a loop to iterate through the array and calculate the average number of letters per name. 
let sumOfLetters = 0;
    for (i = 0; i < names.length; i++) {
        sumOfLetters = sumOfLetters + names[i].length;
    }
console.log(sumOfLetters/names.length);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
for (i=0; i<names.length; i++) {
    (names[i] + " ");
}
console.log(names.join(' '));
// end of question 2





// 3. How do you access the last element of any array?
// nameofArray[nameofArray.length-1]
console.log(names[names.length-1]); //example
// end of question 3





// 4. How do you access the first element of any array?
// nameofArray[0]
console.log ((names[0])); //example
// end of question 4





// 5. Create a new array called nameLengths. 
// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = []

for (i=0; i<names.length; i++) {
    lengthOfName = names[i].length
    nameLengths.push(lengthOfName)
}
console.log(nameLengths)
// end of question 5





// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sum1 = 0;
for (i=0; i<nameLengths.length; i++) {
    sum1 += nameLengths[i]
}
console.log(sum1);
// end of question 6





// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
// itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function function1 (word, n) {
    let result = ' '
    for (i=0; i<n; i++) {
        result = result + word
    }
    return result;
}

console.log(function1('Hello', 3));
// end of question 7





// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.
function fullName (firstName, lastName) {
    console.log (firstName + ' ' + lastName);
}

fullName('Tom', 'Sawyer')
// end of question 8





// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is 
// greater than 100.
function sumGreaterThan100(a) {
    
let totalOfNumbers = 0
    for (i=0; i<a.length; i++) {
        totalOfNumbers += a[i]
    }
    if (totalOfNumbers > 100) {
        return true;
    } else {
        return false;
    }
}

let arrayOfNumbers = [100, 200, 300, 400] // testing it out
console.log(sumGreaterThan100(arrayOfNumbers));

let arrayOfNumbers2 = [1, 2, 3, 4] // testing it out
console.log(sumGreaterThan100(arrayOfNumbers2));
// end of question 9





// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averageOfArray (arr) {

let sumOfNumbers = 0
    for (i=0; i<arr.length; i++) {
        sumOfNumbers += arr[i]
    } 
    return sumOfNumbers / arr.length;
}

let testArray = [1, 2, 3, 4] // testing it out
console.log(averageOfArray (testArray));

let testArray2 = [12, 34, 56] // testing it out
console.log(averageOfArray(testArray2));
// end of question 10





// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the 
// first array is greater than the average of the elements in the second array.
function biggerFirstArray (arrayX, arrayY) {

let sumOfArrayX = 0
    
    for (i=0; i<arrayX.length; i++) {
        sumOfArrayX += arrayX[i]
    }
        let averageOfArrayX = sumOfArrayX / arrayX.length
        console.log(averageOfArrayX)


let sumOfArrayY = 0

    for (i=0; i<arrayY.length; i++) {
        sumOfArrayY += arrayY[i]
    }
        let averageOfArrayY = sumOfArrayY / arrayY.length
        console.log(averageOfArrayY);


if (averageOfArrayX > averageOfArrayY) {
        return true;
    } else {
        return false;
    }
}

// array of numbers to use for testing function biggerFirstArray
let singleDigits = [1, 2, 3, 4] // average = 2.5
let hundreds = [500, 400, 300, 200, 100] // average = 300
let doubleDigits = [45, 66, 28, 92] // average = 57.75
console.log(biggerFirstArray(doubleDigits, singleDigits));
//  end of question 11


// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true 
// if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(false, 3)); // testing it out
console.log(willBuyDrink(true, 11)); // testing it out
// end of question 12




// 13. Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

// let time = [30, 60, 90, 120] // creating an array to represent minutes available

function bakeACake (availableTime) { // figure out what kind of cake to bake based on how much time I have
    if (availableTime < 30) {
        console.log(`Sorry, no time to bake a cake.`);
    } else if (availableTime <60) {
        console.log(`You have just enough time to bake the strawberry cake!`);
    } else if (availableTime <90) {
        console.log(`You can bake the chocolate cake!`);
    } else {
        console.log(`You have time to bake the funfetti cake, let it cool, AND eat it!`)
    }
}

bakeACake(89)
// end of question 13

