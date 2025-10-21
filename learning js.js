
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