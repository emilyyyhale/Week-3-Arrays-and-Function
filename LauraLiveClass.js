// function repeatWord (word, num) {
//     let repeater = ''
//     for(let i = 0; i < num; i++)

// }

// repeatWord("Helllo", 3);



// function willBuyDrink (isHotOutside, moneyInPocket) {
//     console.log (isHotOutside && moneyInPocket > 10.50);
// }

// willBuyDrink(true, 20);



function reverse(input) {
    if (typeof(input) === "boolean") {
        console.log(!input);
    } else if (typeof(input) === "string") {
        input = input.split("");
        console.log(input.reverse().join());
    } else if (typeof(input) === "number") {

    } else {
        console.log(input.reverse());
    }
}

reverse("hello");



function bonus (grossInvoiced, profitMargin) {
    
}