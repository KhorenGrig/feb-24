// even or odd
let n = 6;
let result;

if (n % 2 === 0) {
  result = "even"
} else {
  result = "odd"
}

console.log(result); // prints even or odd



// weekday
let weekdayNumber = 1;
let weekday = "";

switch (weekdayNumber){
  case 1: 
    weekday = "Monday";
    break;
  case 2:
    weekday = "Tuesday";
    break;
  case 3:
    weekday = "Wednesday";
    break;
  case 4:
    weekday = "Thursday";
    break;
  case 5:
    weekday = "Friday";
    break;
  case 6:
    weekday = "Saturday";
    break;
  case 7:
    weekday = "Sunday";
    break;
  default:
    console.log('default');
    break;
}

console.log(weekday); // monday, tuesday, wed... weekend for sat and sun


// max
let a = 5;
let b = 9;
let max;

if (a > b) {
  max = a;
} else {
  max = b;
}

console.log(max); // should print a or b