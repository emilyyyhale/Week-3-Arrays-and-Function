let names = [
    'Dax',
    'Emily',
    'Hayes',
    'Thor',
    'Stark'
];

console.log(names);

console.log(names[2]);








function cookInMicrowave (food, seconds) {
    return ("microwaving " + food + ' for ' + seconds + ' seconds! ');
}

var burrito = cookInMicrowave("burrito", 60);

console.log(burrito);








function runRace() {
    var runners = [];

    runners.push("Emily")
    runners.push("Dax")
    runners.push("Hayes")

    var winner = runners[0]

    alert(winner + " won!")
}

runRace()