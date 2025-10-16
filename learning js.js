
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
    const sum = number1+number2;
    return sum;
}
const result = addNumbers(5+29)
console.log("the sum is", sum)