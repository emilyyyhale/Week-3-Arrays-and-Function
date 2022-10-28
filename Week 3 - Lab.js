let array1 = [1, 5, 6, 9, 10, 14];
console.log(array1);

// print the 3rd element in array1
console.log(array1[2]);

// print the last element in array1
console.log((array1)[array1.length-1]);

// add 16 and 3 to array1
array1.push(16, 3)
console.log(array1);

// sort the array, then print the 3rd element again
// did it change?
array1.sort();
console.log(array1);


console.log(array1[2]);


// create a variable called myTodoList that holds an empty array
let myTodoList = [];

// add three todo items to the array using a built-in array method
myTodoList.push('Schedule weekly todos', 'Unbox presents', 'Write Hayes an email')
console.log(myTodoList)

// remove the second item in the array
myTodoList.splice(1,1)
console.log(myTodoList)

// create another array, yourTodoList, and add two todo items
let yourTodoList = ['Walk the dogs', 'Clean the kitchen']
console.log(yourTodoList)

// create another array, ourTodoList
// combine myTodoList and yourTodoList into ourTodoList
let ourTodoList = myTodoList.concat(yourTodoList);
console.log(ourTodoList);

// sort the following array from Z-A
ourTodoList.sort();
console.log(ourTodoList)

ourTodoList.reverse()
console.log(ourTodoList)

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed
function reverse(x) {
    if (typeof(x) === "boolean") {
        return !x;
    } else if (typeof(x) === "number") {
        return x.reverse
    } else if (typeof(x) === "string") {
        return x.reverse
    } else {
        console.log ('Must be an array; solution tbd');
    }
}

console.log(reverse(true));
// console.log(reverse('animal'));
// console.log(reverse(7654));

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
function addingMachine() {
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        let numbers = arguments[i];
        sum = sum + numbers
    } 
    return sum
}

console.log(addingMachine(1,2,3,4));

// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin

// function myBonus(grossInvoiced, profitMargin){
//     let profits = grossInvoiced * profitMargin;

//     let tier1Max = 100000
//     let tier2Max = 400000
//     let tier3Max = 500000

//     let tier1Rate = .1
//     let tier2Rate = .2
//     let tier3Rate = .35
//     let tier4Rate = .4

//     let maxtier1Bonus = tier1Max * tier1Rate
//     let maxtier2Bonus = tier2Max * tier2Rate + maxtier1Bonus
//     let maxtier3Bonus = tier3Max * tier3Rate + maxtier2Bonus

//     if (profits <= tier1Max)
// }




