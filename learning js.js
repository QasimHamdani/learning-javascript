
console.log("I am printing");

const randomNumber = Math.floor(Math.random() * 1000) + 1;
const isDivisibleBy7 = randomNumber % 7 === 0;
const isDivisibleBy9 = randomNumber % 9 === 0;
console.log(`The randomly generated number is: ${randomNumber}`);

if (isDivisibleBy7 && isDivisibleBy9) {
    console.log("Success: The number is divisible by both 7 and 9.");
} else { console.log("Failure: The number is not divisible by both 7 and 9.");
}

const temp = 97
const weather = temp > 90 ? "too hot" : temp <60 ? "too cold" : "perfect"
console.log(weather)


function addNumbers(number1, number2){
    return number1+number2;
   
}
const sum = addNumbers(5, 29)
console.log("the sum is", sum)


function Hi(name, age) {
  return `Hi, ${name}! You are ${age} years old.`;
}
const callHiWithRandomParams = () => {
  const randomNames = ["Johnny", "Bo", "Jaxson", "Baker"];
  const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
  const randomAge = Math.floor(Math.random() * 60); 

  return Hi(randomName, randomAge);
};


console.log(callHiWithRandomParams());
console.log(callHiWithRandomParams());

let myColourStringArray = [
    "red", "blue", "green", "white", "red",
    "yellow", "black", "gold", "maroon", "purple",
    "pink", "turquoise", "orange", "silver", "bronze"
];

console.log(myColourStringArray.length);
console.log(myColourStringArray[0]);
console.log(myColourStringArray[myColourStringArray.length - 1]);

const randomIndex = Math.floor(Math.random() * myColourStringArray.length);
console.log("Random element:", myColourStringArray[randomIndex]);

myColourStringArray.sort();
console.log("Sorted array:", myColourStringArray);


myColourStringArray.push("black", "white");
console.log("Array after pushing:", myColourStringArray);

myColourStringArray.push(67);
console.log("Array after adding an integer:", myColourStringArray);


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumbers = [];
const arrayLength = 10;

for (let i = 0; i < arrayLength; i++) {
  // Generate a random number between 29 and 87 (inclusive)
  randomNumbers.push(getRandomInt(29, 87));
}
let maxDistance = 0;
let element1 = 0;
let element2 = 0;

for (let i = 0; i < randomNumbers.length - 1; i++) {
    const currentDistance = Math.abs(randomNumbers[i] - randomNumbers[i + 1]);
    if (currentDistance > maxDistance) {
    maxDistance = currentDistance;
    element1 = randomNumbers[i];
    element2 = randomNumbers[i + 1];
  }
}
console.log("The array is:", randomNumbers);
console.log(`The greatest distance between consecutive elements is ${maxDistance}, found between ${element1} and ${element2}.`);

const squaredArray = randomNumbers.map(number => number * number);

console.log(squaredArray);
