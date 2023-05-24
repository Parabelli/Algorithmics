---
id: ecur1oxy
title: Hello2
file_version: 1.1.2
app_version: 1.9.8
---

You ask 2 string to the user in the console and you concatenate them

\--

This code prompts the user to input two `phrases` through the command line, concatenates them with a space in between, and logs the result to the console. It uses the built-in `readline` module and its `createInterface` method to read input from `process.stdin` and write output to `process.stdout`, and then closes the interface with `rl.close()`.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 01_variables/2_concatenate_sentence.js
```javascript
1      const readline = require("readline");
2      
3      const rl = readline.createInterface({
4        input: process.stdin,
5        output: process.stdout,
6      });
7      
8      rl.question("first phrase : ", (phrase1) => {
9        rl.question("second phrase : ", (phrase2) => {
10         var conc = phrase1 + " " + phrase2;
11         console.log(conc);
12         rl.close();
13       });
14     });
15     
```

<br/>

This code snippet uses the `readline` module to create an interface that prompts the user to enter a price and a VAT percentage. It then calculates the price with VAT and logs the result to the console. Finally, it closes the interface.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 01_variables/3_VAT.js
```javascript
1      const readline = require("readline");
2      
3      const rl = readline.createInterface({
4        input: process.stdin,
5        output: process.stdout,
6      });
7      
8      rl.question("Price($) : ", (num1) => {
9        rl.question("VAT(%) : ", (num2) => {
10         var add = +num1 + +num1 * (+num2 * 0.01);
11         console.log(`The price with VAT is ${add}`);
12         rl.close();
13       });
14     });
15     
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBQWxnb3JpdGhtaWNzJTNBJTNBUGFyYWJlbGxp/docs/ecur1oxy).