---
id: yk99svcx
title: It is what it is
file_version: 1.1.2
app_version: 1.9.8
---

It is used to concatanate two strings together

\--

This code snippet creates a `readline` interface and prompts the user to enter two phrases in the terminal. It concatenates the two phrases and logs the result to the console. Finally, it closes the `readline` interface.
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

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBQWxnb3JpdGhtaWNzJTNBJTNBUGFyYWJlbGxp/docs/yk99svcx).