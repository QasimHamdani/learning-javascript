
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


//Take the array you made in the last question. 
// Find the largest number in the array. 
// Use the filter() function for arrays to filter 
// all numbers in the array that are larger than half of the maximum number. 
// Console.log the new array
//This answers that question
const largestNumber= Math.max(...randomNumbers);
const halfMax = largestNumber / 2;
const filteredArray = randomNumbers.filter(number => number > halfMax);
console.log(filteredArray);



const sum2 = randomNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum2);

console.log("--- Colour Array ---");
myColourStringArray.forEach((myColourStringArray, index) => {
  console.log(`[${index}] ${myColourStringArray}`);
});
console.log("--------------------");

class Movie {
  constructor(title, mainCharacter, FavCharacter, genre, ratingOutOf10) {
    this.title = title; // String variable
    this.mainCharacter = mainCharacter; // String variable
    this.FavCharacter = FavCharacter; 
    this.genre = genre; 
    this.ratingOutOf10= ratingOutOf10;
  }
  printMovieDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Main Character:: ${this.mainCharacter}`);
    console.log(`Favourite Character: ${this.FavCharacter}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Rating out of 10: ${this.ratingOutOf10}`);

  }
}


//const myMovie = new Movie("Star Wars", "Luke Skywalker","Anakin Skywalker", "Science Fiction", 9.75);
//myMovie.printMovieDetails();

const myMovie = [
  new Movie("The Amazing Spiderman", "Spiderman", "Peter Parker", "Action", 9.88),
  new Movie("Rocky IV ", "Rocky", "Rocky", "Sports", 9.79),
  new Movie("Cars", "Lightning McQueen", "Lightning McQueen", "Action", 9.94),
  new Movie("Cars 2", "Lightning McQueen", "Lightning McQueen", "Action", 9.95 ),
  new Movie("Toy Story 3", "Woody", "Buzz Lightyear", "Action", 8.10),
  new Movie("Dumb And Dumber", "Lloyd Christmas", "Lloyd Christmas", "Comedy", 9.97),
  new Movie("The Amazing Spiderman 2", "Spiderman", "Peter Parker", "Action", 9.78),
  new Movie("Harry Potter and the Goblet of Fire", "Harry Potter", "Harry Potter", 9.12),
  new Movie("Zootopia", "Judy Hopps", "Nick Wilde", "Action", 8.98),
  new Movie("Minions", "Kevin", "Bob", "Action", 9.55),
];
myMovie.printMovieDetails();
console.log("Original Array:", myMovie);
const filteredMovies = myMovie.filter(movie => movie.name.startsWith("A"));
console.log("\nFiltered People (names starting with 'A'):", filteredMovies);

const ratingOutOf10 = myMovie.map(movie => movie.ratingOutOf10);
console.log("\nRating:", ratingOutOf10);

