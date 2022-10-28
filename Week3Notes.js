// ARRAYS:
// Create and Add Values to an Array:
let customerNames = [];
customerNames.push('Emily Hale');
customerNames.push('Dax Hale');

// Access an element in the array:
for (i=0; i<customerNames.length; i++) {
    console.log(customerNames[i]);
}

for (name of customerNames) {
    console.log(name);
}

// Map method:
let names = ['Dax', 'Hayes', 'Emily', 'Thor', 'Stark'];
let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths);

// Reduce method:
let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum);

// For Each method:
names.forEach(function(element) {
    console.log(element);
});

// Filter method:
let evens = names.filter(function(element) {
    return element.length % 2 === 0;
});
console.log(evens);

// Splice method:
let removedElement = names.splice(1, 1);
console.log(removedElement);



// FUNCTIONS:
// Declare it:
function myFunction () {
    for (let i=0; i<10; i++) {
        console.log(i);
    }
}

// Invoke it:
myFunction ();

// Parameters and Arguments:
function createfullName (firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

createfullName('Hayes', 'Hale')



// OBJECTS:
let dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Encanto',
    printDVDName: function() {
        console.log(this.dvdName);
    }
}

console.log(dvdPlayer.weight);
dvdPlayer.printDVDName();
