# Javascript By Example

## Overview

This document holds notes to create a Go by Example like language overview for Javascript. This will surely be added
to, taken away from and tested over time as the ecosystem and language specification evolve.

### Table of Contents
1. [Introduction](#Introduction)
2. [Variables](#Variables)
3. [Math](#Math)
4. [Random Numbers](#Random)
5. [Strings](#Strings)
6. [Styling Strings](#Styling)
7. [If](#If)
8. [Switch](#Switch)
9. [Ternary Operator](#Ternary)
10. [While Loop](#While)
11. [Do While Loop](#DoWhile)
12. [For Loop](#For)
13. [For In Loop](#ForIn)
14. [Arrays](#Arrays)
15. [Functions](#Functions)
16. [Pass Function as Parameter](#PassFunction)
17. [Receive Variable Number of Arguments](#ReceiveVariable)
18. [Return Variable Number of Arguments](#ReturnVariable)
19. [Recursive Functions](#Recursive)
20. [Event Handling](#EventHandling)
21. [Mouse Events](#MouseEvents)
22. [Key Events](#KeyEvents)
23. [Change Tag Value](#ChangeTag)
24. [Change Class](#ChangeClass)
25. [Change Input Element](#ChangeInput)
26. [Mouse X / Y Coordinates](#MouseXY)
27. [Get Elements by Tag Name](#GetElements)
28. [Element Styling](#ElementStyling)
29. [Manipulating URLs](#URLs)
30. [Editing Child Nodes](#ChildNodes)
31. [Setting Attributes](#SettingAttributes)
32. [Adding Elements](#AddingElements)
33. [Object Orientated JavaScript](#OOJS)
34. [Form Validation](#FormValidation)
35. [Exception Handling](#ExceptionHandling)


<a name="Introduction"></a>
### Introduction
i. index.html <br/>
ii. importing javascript <br/>
iii. introductory example

i. index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- ii -->
    <script src="./by_example.js"></script>
    <title>JS By Example</title>
</head>
<body>
    <!-- insert code here -->
</body>
</html>
```

iii.
```html
<body>
    <p id="sayHello"></p>
    <script>
        var name = prompt('What is your name?')

        if(name != null){
            document.getElementById('sayHello').innerHTML = "Hello " + name
        } else {
            alert('Please enter your name next time')
        }
    </script>
</body>
```

<a name="Variables"></a>
### Variables
i. ```var```: Declares a variable, optionally initializing it to a value.<br/>
ii. ```let```: Declares a block-scoped, local variable, optionally initializing it to a value. <br />
iii. ```const```: Declares a block-scoped, read-only named constant. <br />

```html
<script>
    <!-- i -->
    var name = 'Sash';
    var year = 2021;
    var name = 12;
    <!-- ii -->
    let greeting = 'hello';
    greeting = name;
    let greeting = 'we come in peace'; // error: already declared
    <!-- iii -->
    const salary = 45000;
    salary = 1000000;  // error: assignment to constant
</script>
```

<a name="Math"></a>
### Math
i. basic math operators <br/>
ii. max min values <br/>
iii. precision <br/>
iv. rounding <br/>
v. common operations <br/>
vi. order of operations <br/>
vii. math methods and properties <br/>
```html
<script>
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
</script>
```

<a name="Random"></a>
### Random Numbers
Note: .toString() is only used to insert the output as a string to the document <br/>
i. pseudo random number between 0 and 1 <br/>
ii. converting strings to number types 
```html
<script>
    <!-- Note: .toString() is only used to insert the output as a string to the document -->
    // i
    document.write('Random: ', Math.random().toString(), '<br/>');
    document.write('Random # (1 - 10) : ', Math.floor((Math.random() * 10) + 1).toString(), '<br/>');
    // ii
    document.write('Converted String: ', Number('3.14').toString(), '<br/>');
    document.write('Converted Int: ', parseInt('3.14').toString(), '<br/>');
    document.write('Converted Float: ', parseFloat('3.14').toString(), '<br/>');
</script>
```

<a name="Strings"></a>
### Strings
Note: Strings like arrays in Javascript start at index 0 <br/>
i. String Methods
```html
<script>
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
</script>
```

<a name="Styling"></a>
### Styling Strings
```html
<script>
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
</script>
```

<a name="If"></a>
### If
Conditional Operators: <br/>
- Logical Operators: && || ! <br/>
- Relational Operators: == === !=  > < >= <= <br/>
```==``` compares if the values are equal <br/>
```===``` compares if the values and value types are equal <br/>


i. if else <br/>
ii. boolean logic
```html
<script>
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
</script>
```

<a name="Switch"></a>
### Switch
```html
<script>
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
</script>
```

<a name="Ternary"></a>
### Ternary Operator
```html
<script>
    var age = 18;

    var canDrive = (age >= 18) ? true : false;
    document.write('You ', canDrive == true ? 'can' : 'cannot', ' drive.');  // You can drive. 
</script>
```

<a name="While"></a>
### While Loop
```html
<script>
    var i = 1;
    while(i <= 10) {
        document.write(i, '<br/>');
        i++;
    }
</script>
```

<a name="DoWhile"></a>
### Do While Loop
```html
<script>
    do {
        var guess = prompt('Guess a number between 1 and 10: ');
    } while(guess != 6);

    alert('You guessed 6 correctly!');

</script>
```

<a name="For"></a>
### For Loop
```html
<script>
    for (var i = 0; i <= 20; i++) {
        if((i % 2) === 0) continue;
        if(i === 17) break;
        document.write(i, '<br/>');
    }
</script>
```

<a name="ForIn"></a>
### For In Loop
```html
<script>
    var client = {name: 'Good Brewery', address: 'Bills Farm', invoice: true, total: '$12,000'};
    for(k in client) {
        document.write(client[k], '<br/>');
    }
</script>
```

...


<br/>
<br/>
<hr/>

```javascript
/*<-------------------->+
* Javascript By Example |
*<----------------2021->*/ 
```