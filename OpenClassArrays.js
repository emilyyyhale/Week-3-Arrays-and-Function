// Using the given function, gradList, add the following names to the passed array: 
// "Mary", "Steven", "Eddie". 
// Then, sort the remaining students from Z-A, and return the modified array.

// System already created the array:

// let graduates = [];
// graduates.push("Sarah");
// graduates.push("Brock");
// graduates.push("Greg");
// graduates.push("Gerty");


// 1. Add names:
graduates.push("Mary");
graduates.push("Steven");
graduates.push("Eddie");

// 2. Arrange A to Z then print out the reverse:
graduates.sort()
console.log(graduates.reverse());