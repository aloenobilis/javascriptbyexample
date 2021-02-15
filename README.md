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
10. [While](#While)
11. [Do While](#DoWhile)
12. [For](#For)
13. [For In](#ForIn)
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
<body>
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
</body>
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
<body>
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
</body>
```