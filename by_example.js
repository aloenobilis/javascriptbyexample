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



