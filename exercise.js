//1)
let foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var newFoods = foods.slice(1, 4);
console.log(newFoods);

//2)
foods.splice(2, 0, "noodles", "icecream");
console.log(foods);

//3)
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let evenArray = numberArray.filter(function isEven(numberArray) {
    return (numberArray % 2 == 0);
})
console.log(evenArray);

let primeArray = numberArray.filter(function isPrime(numberArray) {
    return numberArray & 1;
})
console.log(primeArray);

//4)
let nonprimeArray = numberArray.filter(function nonPrime(numberArray) {
    return !(numberArray & 1);
})
console.log(nonprimeArray);

//5)
let isEven = (numberArray) => {
    return numberArray % 2 == 0;
}

//6)
const myArray1 = [11, 34, 20, 5, 53, 16];
let squareArray = myArray1.map(function findSquareOfNumbers(myArray1) {
    return (myArray1 * myArray1);
});
console.log(squareArray);

//7)
var myArray = [2, 3, 5, 10];
let mulipliedArray = myArray.reduce(function multiply(initial, myArray) {
    return (initial * myArray);
}, 1);
console.log(mulipliedArray);

let newArray = myArray1.map(function findSquareOfNumbers(myArray1) {
    return (myArray1 * myArray1);
}).reduce(function multiply(initial, myArray) {
    return (initial * myArray);
}, 1);
console.log(newArray);