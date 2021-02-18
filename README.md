
# Javascipt By Example 
<img alt="js logo" src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" height="80px">

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
7. [Conditional: If](#If)
8. [Conditional: Switch](#Switch)
9. [Conditional: Ternary Operator](#Ternary)
10. [Loop: While](#While)
11. [Loop: Do While](#DoWhile)
12. [Loop: For](#For)
13. [Loop: For In](#ForIn)
14. [Arrays](#Arrays)
15. [Functions](#Functions)
16. [Functions: Pass Function as Parameter](#PassFunction)
17. [Functions: Receive Variable Number of Arguments](#ReceiveVariable)
18. [Functions: Return Variable Number of Arguments](#ReturnVariable)
19. [Functions: Recursive Functions](#Recursive)
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
    - RegEx

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
### Conditional: If
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
### Conditional: Switch
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
### Conditional: Ternary Operator
```html
<script>
    var age = 18;

    var canDrive = (age >= 18) ? true : false;
    document.write('You ', canDrive == true ? 'can' : 'cannot', ' drive.');  // You can drive. 
</script>
```

<a name="While"></a>
### Loop: While
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
### Loop: Do While
```html
<script>
    do {
        var guess = prompt('Guess a number between 1 and 10: ');
    } while(guess != 6);

    alert('You guessed 6 correctly!');

</script>
```

<a name="For"></a>
### Loop: For
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
### Loop: For In
```html
<script>
    var client = {name: 'Good Brewery', address: 'Bills Farm', invoice: true, total: '$12,000'};
    for(k in client) {
        document.write(client[k], '<br/>');
    }
</script>
```

<a name="Arrays"></a>
### Arrays
i. structure and methods <br/>
ii. sort

```html
<script>
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
</script>
```

<a name="Functions"></a>
### Functions
i. definition <br/>
ii. function scope

```html
<script>
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
</script>
```

<a name="PassFunction"></a>
### Functions: Pass Function as Parameter
i. function as parameter <br/>
ii. function expressions

```html
<script>
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
</script>
```

<a name="ReceiveVariable"></a>
### Functions: Receive Variable Number of Arguments
```html
<script>
    function getSum() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum; 
    }

    document.write('Sum: ', getSum(2,3,4,10), '<br/>'); // 19
</script>
```

<a name="ReturnVariable"></a>
### Functions: Return Variable Number of Arguments
```html
<script>
    function square(array) {
        var newArray=[];
        for (var i = 0; i < array.length; i++) {
            newArray.push(array[i] * array[i]);
        }
        return newArray;
    }

    document.write('Array Squared: ', square([1,2,3,4,5,6]).toString(), '<br/>');  // 1,4,9,16,25,36
</script>
```
<a name="Recursive"></a>
### Functions: Recursive Functions
```html
<script>
    function factorial(num) {
        if(num <= 1) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }

    document.write('Factorial of 4 = ', factorial(4), '<br/>');
</script>
```
<a name="EventHandling"></a>
### Event Handling
```html
<script>
    function greet(message) {
        alert(message);
    }
</script>
<a href="Javascript:void(0)" onClick="alert('Hello')">Say Hello</a> <br/>
<a href="Javascript:void(0)" onClick="greet('Howdy partner!')">Greet</a> <br/>
```

<a name="MouseEvents"></a>
### Mouse Events

```html
<a href="Javascript:void(0)"
    onmouseover="this.style.color ='red';"
    onmouseout="this.style.color = 'green';"
    ondblclick="this.text='You double clicked'"
    onmousedown="this.text='Hold me down!'"
    onmouseup="this.text='Dont go'">
    Make me red
</a> 
<br/>
<input type="text" id="txtInpt" onChange="var data = document.getElementById('txtInpt').value; alert(data);" />
```

<a name="KeyEvents"></a>
### Key Events
```html
<form action="#" id="exForm">
   <input id="exInput" type="text">

   <p id="keyData">Key Data Here</p>
   <input type="submit" value="Submit">
   <input type="reset" value="Reset"> 
</form> 
<br/>
    <script type="text/javascript">
    function getChar(event) {
        if(event.which == null) {
            return String.fromCharCode(event.keyCode);
        } else if (event.which != 0 && event.charCode != 0) {
            return String.fromCharCode(event.which);
        } else {
            return null;
        }
    }

    document.getElementById('exInput').onkeypress = 
        function(event) {
            var char = getChar(event || window.event);
            if(!char) return false;

            document.getElementById('keyData').innerHTML = char + ' key was pressed';
            return true;
        }
</script>
```

<a name="ChangeTag"></a>
### Change Tag Value
```html
<input id="exInput2" type="text">
<p id="keyData2">Focus on input</p>
<script>
    document.getElementById('exInput2').onfocus = 
    function(event) {
        document.getElementById('keyData2').innerHTML = 'Input Focused';
    }

    document.getElementById('exInput2').onselect = 
    function(event) {
        document.getElementById('keyData2').innerHTML = 'Text Selected';
    }
</script>
```

<a name="ChangeClass"></a>
### Change Class
Note: CSS, HTML and JS are used
```html
<style type="text/css">
    .hidden {display: none;}
    .show {display: inline !important;}
</style>

<img height="180px" src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" id="logo"> <br/>
<button id="logoButton">Get Logo</button>

<script type="text/javascript">
    document.getElementById('logoButton').onclick = 
        function(event) {
            document.getElementById('logo').className = "show";
        }

    document.getElementById('logo').onclick = 
        function(event) {
            document.getElementById('logo').className = "hidden";
        }

    document.getElementById('logo').onmouseover = 
        function(event) {
            document.getElementById('logo').src = 
                "https://raw.githubusercontent.com/voodootikigod/logo.js/master/jsconfasia/jsconfasia.png";
        }

    document.getElementById('logo').onmouseout = 
        function(event) {
            document.getElementById('logo').src = 
                "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png";
        }
</script>    
```

<a name="ChangeInput"></a>
### Change Input Element
```html
<input id="mouseInput" type="text" size="30"> <br/>
<script type="text/javascript">
    document.getElementById('mouseInput').onmouseover = 
        function(event) {
            document.getElementById('mouseInput').value = "Mouse over"; 
        }

    document.getElementById('mouseInput').onmouseout = 
        function(event) {
            document.getElementById('mouseInput').value = "Mouse out"; 
        }
</script>
```

<a name="MouseXY"></a>
### Mouse X / Y Coordinates
```html
Mouse X: <input type="text" id="mouseX"><br/>
Mouse Y: <input type="text" id="mouseY"><br/> 

<script type="text/javascript">
    document.body.onmousemove = function(e) {
        e = e || window.event;

        var pageX = e.pageX;
        var pageY = e.pageY;

        if(pageX === undefined || pageY === undefined) {
            pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        document.getElementById('mouseX').value = pageX;
        document.getElementById('mouseY').value = pageY;
    };
</script>
```

<a name="GetElements"></a>
### Get Elements by Tag Name
```html
<input type="text" id="i1" value="Input 1"> <br/>
<input type="text" id="i2" value="Input 2"> <br/>
<input type="text" id="i3" value="Input 3"> <br/>
<button id="clearInputs">Clear</button>
<script>
    document.getElementById('clearInputs').onclick = function(e) {
        var inputElements = document.getElementsByTagName('input');
        for(var i=0; i<inputElements.length; i++) {
            if(inputElements[i].type == 'text') {
                inputElements[i].value = '';
            }
        }
    };
</script>
```


<a name="ElementStyling"></a>
### Element Styling
```html
<div id="exDiv">
    Now what are the possibilities of warp drive? Cmdr Riker's nervous system has been invaded by an unknown microorganism. The organisms fuse to the nerve, intertwining at the molecular level. That's why the transporter's biofilters couldn't extract it. The vertex waves show a K-complex corresponding to an REM state. The engineering section's critical. Destruction is imminent. Their robes contain ultritium, highly explosive, virtually undetectable by your transporter.
</div>

<button id="changeBgCol">Background Color</button>
<button id="changeBrdrStyle">Border Style</button>
<button id="changeBrdrWidth">Border Width</button>
<button id="changeFontSize">Font Size</button>


<script type="text/javascript">
    document.getElementById('changeBgCol').onclick = function(e) {
        document.getElementById('exDiv').style.backgroundColor = 'red';
    }

    document.getElementById('changeBrdrStyle').onclick = function(e) {
        document.getElementById('exDiv').style.border = '2px solid blue';
    }

    document.getElementById('changeBrdrWidth').onclick = function(e) {
        document.getElementById('exDiv').style.borderWidth = 'thick';
    }

    document.getElementById('changeFontSize').onclick = function(e) {
        document.getElementById('exDiv').style.fontSize = 'xx-small';
    }
</script>
```


<a name="URLs"></a>
### Manipulating URLs
```html
<button id="search">Go to Google</button> <br/>
<button id="forward">Forward Page</button> <br/>
<button id="back">Back Page</button> <br/>
<button id="reload">Reload Page</button> <br/>

<script type="text/javascript">
    document.write("Current url : ", window.location.href, '<br/>');
    document.write("Host name : ", window.location.hostname, '<br/>');
    document.write("Path name : ", window.location.pathname, '<br/>');

    document.getElementById('search').onclick = function(e) {
        window.location.href = 'https://google.com';
    }

    document.getElementById('forward').onclick = function(e) {
        history.forward();
    }

    document.getElementById('back').onclick = function(e) {
        // history.back();
        history.go(-1);
    }

    document.getElementById('reload').onclick = function(e) {
        window.location.reload();
    }
</script>
```

<a name="ChildNodes"></a>
### Editing Child Nodes
```html
<div id="exDiv">
    <p>
    <i>Unidentified</i> vessel travelling at sub <strong>warp speed</strong>, bearing 235.7. Fluctuations in energy readings from it, Captain. All transporters off. A strange set-up, but I'd say the graviton generator is depolarized. The dark colourings of the scrapes are the leavings of natural rubber, a type of non-conductive sole used by researchers experimenting with <small>electricity</small>. The molecules must have been partly de-phased by the anyon beam.
    </p>
</div>
<script>
    var pElements = document.getElementsByTagName('p');
    pElements[0].style.backgroundColor = 'antiquewhite';

    document.childNodes[2].style.backgroundColor = '#6b6b6b';

    for(var i=0; i<document.childNodes.length; i++) {
        console.log(document.childNodes[i]);
    }

    var exDiv = document.getElementById('exDiv');
    exDiv.childNodes[1].style.color = 'blue';
    exDiv.childNodes[1].childNodes[1].style.color = 'red';

    document.write('Node type: ', exDiv.childNodes[1].childNodes[1].nodeType, '<br/>');  // 1
    document.write('Node name: ', exDiv.childNodes[1].childNodes[1].nodeName, '<br/>');  // I
</script>
```

<a name="SettingAttributes"></a>
### Setting Attributes
```html
<img height="180px" alt="js logo" src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" id="logo"> <br/>
<script>
    var logo = document.getElementById('logo');
    document.write('Logo alt value : ', logo.getAttribute('alt'), '<br/>');

    var logoAttrList = logo.attributes;
    for(var i=0; i<logoAttrList.length; i++) {
        document.write('Attribute ', i, ': ', logoAttrList[i].nodeName, ' : ', logoAttrList[i].nodeValue, '<br/>');
    }
</script>
```


<a name="AddingElements"></a>
### Adding Elements
i. creating elements <br/>
ii. inserting elements

```html
<div id="exDiv">
    <small>The red planet awaits</small>
</div>
<script type="text/javascript">
    // i
    var heading = document.createElement('h1');
    heading.setAttribute('id', 'title');
    heading.innerHTML = 'WE ARE GOING TO MARS!';
    
    exDiv = document.getElementById('exDiv');
    exDiv.appendChild(heading);


    var altJ = document.createElement('span');
    altJ.innerHTML = '∆';
    // ii
    exDiv.insertBefore(altJ, exDiv.childNodes[0]);
</script>
```
<a name="OOJS"></a>
### Object Orientated JavaScript
i.  objects <br/>
ii. generic objects <br/>
iii. Shared prototypes <br/>
    - are basically static varibles that are available from the object type, they can be created on the fly. <br/>
    - static methods can also be added and overidden
```html
<script type="text/javascript">
    // i
    var account = {
        owner: "bunny@rabbit.x",
        name: "Checking",
        branch: "23 West St",
        balance: 62.15,
        funcDebit: function(debitAmount) {
            this.balance -= debitAmount;
        },
        funcCredit: function(creditAmount) {
            this.balance += creditAmount;
        }
    }

    document.write('$', account.balance, '<br/>');  // $62.15
    account.branch = "109 Dorothy Parker Ave";
    document.write(account.branch, '<br/>'); // 109 Dorothy Parker Ave
    account.hasCredit = true;
    document.write('Has credit: ', account.hasCredit, '<br/>'); // true
    delete account.hasCredit;

    // ii
    function Account(owner, name, branch, balance) {
        this.owner = owner;
        this.name = name;
        this.branch = branch;
        this.balance = balance;
        this.funcDebit = function(debitAmount) {
            this.balance -= debitAmount;
        };
        this.funcCredit = function(creditAmount) {
            this.balance += creditAmount;
        };
    };

    var myAccount = new Account('jack@rabbit.x', 'Savings', '99 Parke Ave', 22.22);
    myAccount.funcCredit(7.78);
    document.write('$', myAccount.balance, '<br/>'); // $30
    // iii
    Account.prototype.hasCredit = true;
    document.write('Has credit: ', myAccount.hasCredit, '<br/>'); // true
    Account.prototype.formattedBalance = function(symbol){
        document.write(symbol, this.balance.toFixed(2), '<br/>');
    };
    myAccount.formattedBalance('€'); // €30.00
    myAccount.formattedBalance('£'); // £30.00
</script>    
```

<a name="FormValidation"></a>
### Form Validation
Note: This is just example validation
```html
<form name="myForm" onsubmit="return validateForm()" method="post">
    Name: <input type="text" name="fname">
    <input type="submit" value="Submit">
</form>
<script>
    function validateForm() {
      var x = document.forms["myForm"]["fname"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }
    }
</script>
```


<a name="ExceptionHandling"></a>
### Exception Handling
i. creating a RegEx object <br/>
ii. validating string input <br/>
iii. try catch

```html
Enter your name: 
<input type="text" id="myInput" onblur="validateInput(this, document.getElementById('mySpan'));"> <br/>
<span id="mySpan"></span>

<script>
    // i.
    // const re = /^[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}/;
    const reg = RegExp('^[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}');

    // ii
    function validateInput(input, output) {
        if(reg.test(input.value) == false) {
            output.innerHTML = 'Please enter a valid name';
        }
    }

    // iii
    try {
        doesnotexist();
    } catch(e) {
       if (e instanceof TypeError) {
        alert(e);
      } else if (e instanceof RangeError) {
        alert(e);
      } else if (e instanceof EvalError) {
        alert(e);
      } else if (e instanceof ReferenceError) {
        alert(e); // ReferenceError: doesnotexist is not defined
      } else {
        // statements to handle any unspecified exceptions
        console.log(e); // pass exception object to error handler
      }
    }
</script>
```
<br/>
<br/>

#### References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide <br/>
- https://www.w3schools.com/jsref/default.asp <br/>

<br/>
<hr/>

```javascript
/*<-------------------->+
* Javascript By Example |
*<----------------2021->*/ 
```