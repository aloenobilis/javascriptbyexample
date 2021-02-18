/*----------------------+
* Javascript By Example |
*-----------------------*/

// +--Variables--+
// i
var name = 'Sash';
var year = 2021;
var name = 12;
// ii
let greeting = 'hello';
greeting = name;
let greeting = 'we come in peace'; // error: already declared
// iii
const salary = 45000;
salary = 1000000;  // error: assignment to constant


// +--Math--+
// i. basic math operators
document.write('5 + 4 = ', 5 + 4, '<br/>');
document.write('5 - 4 = ', 5 - 4, '<br/>');
document.write('5 * 4 = ', 5 * 4, '<br/>');
document.write('5 / 4 = ', 5 / 4, '<br/>');
document.write('5 % 4 = ', 5 % 4, '<br/>');

// ii. max min values
document.write('Max Num = ', Number.MAX_VALUE, '<br/>');
document.write('Min Num = ', Number.MIN_VALUE, '<br/>');

// iii. A JS number can only hold precision up to 16 digits
precisionTest = 0.1000000000000001
document.write(precisionTest + 0.1000000000000001, '<br/>');

// iv. rounding
var balance = 891.26;
document.write('Monthly payment: ', (balance/12).toFixed(2), '<br/>');

// v. common operations
var randNum = 5;
document.write('randNum++ = ', randNum++, '<br/>'); // 5
document.write('++randNum = ', ++randNum, '<br/>'); // 7
document.write('randNum-- = ', randNum--, '<br/>'); // 7
document.write('--randNum = ', --randNum, '<br/>'); // 5

document.write('randNum += 5 = ', randNum += 5, '<br/>'); // 10
document.write('randNum -= 5 = ', randNum -= 5, '<br/>'); // 5
document.write('randNum *= 5 = ', randNum *= 5, '<br/>'); // 25
document.write('randNum /= 5 = ', randNum /= 5, '<br/>'); // 5

// vi. order of operations
document.write('3 + 2 * 8 = ', 3 + 2 * 8, '<br/>'); // 19
document.write('(3 + 2) * 8 = ', (3 + 2) * 8, '<br/>'); // 40

// vii. Math methods and properties (subset)
document.write('Math.abs(-8) = ', Math.abs(-8), '<br/>');
document.write('Math.cbrt(1000) = ', Math.cbrt(1000), '<br/>');
document.write('Math.ceil(9.25) = ', Math.ceil(9.25), '<br/>');
document.write('Math.floor(9.25) = ', Math.floor(9.25), '<br/>');
document.write('Math.round(9.25) = ', Math.round(9.25), '<br/>');
document.write('Math.log(10) = ', Math.log(10), '<br/>');
document.write('Math.log10(10) = ', Math.log10(10), '<br/>');
document.write('Math.max(10, 5) = ', Math.max(10, 5), '<br/>');
document.write('Math.min(10, 5) = ', Math.min(10, 5), '<br/>');
document.write('Math.pow(4,2) = ', Math.pow(4,2), '<br/>');
document.write('Math.sqrt(1000) = ', Math.sqrt(1000), '<br/>');

// +--Random Numbers--+
// Note: .toString() is only used to insert the output as a string to the document
// i
document.write('Random: ', Math.random().toString(), '<br/>');
document.write('Random # (1 - 10) : ', Math.floor((Math.random() * 10) + 1).toString(), '<br/>');
// ii
document.write('Converted String: ', Number('3.14').toString(), '<br/>');
document.write('Converted Int: ', parseInt('3.14').toString(), '<br/>');
document.write('Converted Float: ', parseFloat('3.14').toString(), '<br/>');

// +--Strings--+
// Note: Strings like arrays in Javascript start at index 0
// i. String Methods
var randStr = "She sells " + "sea shells " + "on the sea shore";

document.write('String Length: ', randStr.length + '<br/>'); // 37
document.write('Index for \"shells\" : ', randStr.indexOf('shells') + '<br/>'); // 14
document.write(randStr.slice(14, 20) + '<br/>'); // shells
document.write(randStr.slice(14) + '<br/>'); // shells on the sea shore
document.write(randStr.substr(14, 6) + '<br/>'); // shells
document.write(randStr.replace('sea shells', 'ice cream') + '<br/>'); // She sells ice cream on the sea shore
document.write('At Index 2: ', randStr.charAt(2) + '<br/>'); // e

var randStrArray = randStr.split(' ');
console.log(randStrArray); // [ "She", "sells", "sea", "shells", "on", "the", "sea", "shore" ]

randStr = randStr.trim();

document.write(randStr.toUpperCase() + '<br/>'); // SHE SELLS SEA...
document.write(randStr.toLowerCase() + '<br/>'); // she sells sea...

// +--Styling Strings--+
var strToStyle = 'Lollapalooza';
document.write('Big: ', strToStyle.big() + '<br/>');
document.write('Bold: ', strToStyle.bold() + '<br/>');
document.write('Font Color: ', strToStyle.fontcolor('orange') + '<br/>');
document.write('Font size: ', strToStyle.fontsize('6em') + '<br/>');
document.write('Link: ', strToStyle.link('https://github.com/') + '<br/>');
document.write('Italics: ', strToStyle.italics() + '<br/>');
document.write('Small: ', strToStyle.small() + '<br/>');
document.write('Strike: ', strToStyle.strike() + '<br/>');
document.write('Sub: ', strToStyle.sub() + '<br/>');
document.write('Sup: ', strToStyle.sup() + '<br/>');

// +--if--+
/*
Conditional Operators:
Relational Operators: == === !=  > < >= <=
  - == compares if the values are equal
  - === compares if the values and value types are equal
Logical Operators: && || !
 */
// i. if else
// ii. boolean logic

// i
var grade = 94;
if(grade < 65) {
    document.write('D Fail' + '<br/>');
} else if (grade < 75) {
    document.write('C Pass' + '<br/>');
} else if (grade < 85) {
    document.write('B Pass' + '<br/>');
} else if (grade < 95) {
    document.write('A Pass' + '<br/>');
} else if (grade >= 95 && grade <= 99) {
    document.write('A+ Pass' + '<br/>');
} else {
    document.write('A++ Pass' + '<br/>');
} // A Pass

// ii
document.write('true || false = ', true || false, '<br/>'); // true
document.write('!true = ', !true, '<br/>'); // false
document.write('\"5\" == 5 = ', "5" == 5, '<br/>'); // true
document.write('\"5\" === 5 = ', "5" === 5, '<br/>'); // false

// +--Switch--+
var fileType = '.h';
switch(fileType) {
    case '.cc':
    case '.cpp':
        document.write(fileType + 'Filetype C++');
        break;
    case '.py':
        document.write('Filetype: Python');
        break;
    case '.h':
    case '.header':
    case '.hippie':
        document.write('Filetype: Header');
        break;
    default:
        document.write('Filetype: Unknown');
}

// +--Ternary--+
var age = 18;

var canDrive = (age >= 18) ? true : false;
document.write('You ', canDrive == true ? 'can' : 'cannot', ' drive.');  // You can drive. 

// +--While Loop--+ 
var i = 1;
while(i <= 10) {
    document.write(i, '<br/>');
    i++;
}

// +--Do While Loop--+
do {
    var guess = prompt('Guess a number between 1 and 10: ');
} while(guess != 6);
alert('You guessed 6 correctly!');

// +--For Loop--+
for (var i = 0; i <= 20; i++) {
    if((i % 2) === 0) continue;
    if(i === 17) break;
    document.write(i, '<br/>');
}

// +--For In Loop--+
var client = {name: 'Good Brewery', address: 'Bills Farm', invoice: true, total: '$12,000'};
for(k in client) {
    document.write(client[k], '<br/>');
}

// +--Arrays--+
// i. structure and methods
// ii. sort

// i
var pancakes = ['milk', 'egg', 1, 'flour', 2.09];
document.write('First index: ', pancakes[0], '<br/>'); // milk
pancakes[5] = 'hot pan';
pancakes.splice(2, 1, 'sugar', 'cinnemon'); // remove 1 from index 2, insert at index 2
pancakes.splice(4,1); // remove 1 from index 4 
document.write('Array: ', pancakes.valueOf(), '<br/>');
document.write('Array: ', pancakes.join(', '), '<br/>');

delete pancakes[3];
pancakes.sort();

pancakes.pop(); // remove last item
pancakes.push('Avocado', 'Salmon');

pancakes.shift(); // remove first item
pancakes.unshift('white wine', 'water');

document.write('Array: ', pancakes.toString(), '<br/>');

var seasonings = ['salt', 'pepper', 'chilli'];
var newArray = pancakes.concat(seasonings);  // join
for(var i=0; i<newArray.length; i++) {
    document.write(newArray[i], '<br/>');
}

// ii
var numbers = [43,91,2,213,31,1,19];
numbers.sort(function(x,y) { return x - y}); // ascending
document.write('Numerical Sort: ', numbers.toString(), '<br/>')
numbers.sort(function(x,y) { return y - x}); // descending
document.write('Numerical Sort: ', numbers.toString(), '<br/>')

// +--Functions--+
// i. definition
// ii. function scope

// check whether a value is in an array
function inArray(array, value) {
    for(var i=0; i<array.length; i++) {
        if(array[i] === value) {
            return true;
        }
    }
    return false;
}

var vals = ['dog', 1000, 'cat', 3.14, 0];
document.write('In array: ', inArray(vals, 33), '<br/>');

// ii
function divide(num1, num2) {
    var num = num1 / num2;
    return num;
}
document.write('num: ', num, '<br/>'); // error: num is not defined

// +--Pass Function as Parameter--+
// i. function as parameter
// ii. function expressions

// i
function square(num) {
    return num * num;
}

function times2(num) {
    return num * 2;
}

function multiply(func, num) {
    return func(num);
}

document.write('Multiply: ', multiply(square, 3), '<br/>');
document.write('Multiply: ', multiply(times2, 3), '<br/>');

// ii
var cubed = function(num) {
    return num*num*num;
}
var squared = function(num) {
    return num*num;
}

var funcArray = [squared, cubed];
for(var i=0; i<funcArray.length;i++) {
    document.write('Expression: ', funcArray[i](3), '<br/>');
}

document.write('Multiply: ', multiply(squared, 3), '<br/>');
document.write('Multiply: ', multiply(cubed, 3), '<br/>');

// +--Receive Variable Number of Arguments--+
function getSum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum; 
}

document.write('Sum: ', getSum(2,3,4,10), '<br/>'); // 19

// +--Return Variable Number of Arguments--+
function square(array) {
    var newArray=[];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i] * array[i]);
    }
    return newArray;
}

document.write('Array Squared: ', square([1,2,3,4,5,6]).toString(), '<br/>');  // 1,4,9,16,25,36

// +--Recursive Functions--+
function factorial(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

document.write('Factorial of 4 = ', factorial(4), '<br/>');

// +--Event Handling--+ (see readme, example contains html)
// +--Mouse Events--+ (see readme, 〃)
// +--Change Tag Value--+ (see readme, 〃)
// +--Change Class--+ (see readme, 〃)
// +--Change Input Element--+ (see readme, 〃)
// +--Mouse X / Y Coordinates--+ (see readme, 〃)

