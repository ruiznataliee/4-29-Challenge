//1 Convert the following function into an arrow function named "arrowMyFunction".
//const myFunction = function (num1, num2) {
//   return num1 + num2;
//};

const arrowMyFunction = (num1, num2) => {
    return num1 + num2
}
console.log(arrowMyFunction(4, 4));

//2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
//const add100 = function (money) {
//   return money + 100;
//};

let arrowAdd100 = money => money + 100;
console.log(arrowAdd100(80));


//3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
//Examples:
//countLetters('Hello my name is John', 'i') returns 1
//countLetters('Hello my name is John', 'h') returns 2

var countLetters = (argue, arrow) => {
    return argue.split(arrow).length;
}
console.log(countLetters("Hello world", "b"));