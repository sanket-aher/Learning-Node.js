/* import : The import statement is used to import modules exported by some other module. A module is a file that contains a piece of reusable code.
            Syntax : import {nameOne,nameTwo,..} from module-name
    Disavd of import : Node.js doesn’t support ES6 import directly. If we try to use import for importing modules directly in Node.js it will throw out the error.
    To overcome disadv : There are two methods to use ES6 import statement in Node.js
                         1)Changing content in package.json file : Add "type":"module" in package.json file
                         2)Using the esm module : npm install esm (Install package). */

/* Ex1 */
import {sum,PI} from "./math1.js"
console.log(sum(1,2));

/*  Output:
    Giving error that to add in package.json "type": "module"

    Now create package.json using npm init and add "type": "module" property.
*/
/* Git Bash
    Step1: (Install package.json file)
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/Learning/NodeJS Learn/NodeJS Part1/ImportKeyword
    npm init
    Step2: Add "type": "module" property in package.json file
*/

/* Output :
    3
*/

/* Ex2 : Now install random-words package from website npmjs.com/package/random-words */
/* GitBash:
    Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/Learning/NodeJS Learn/NodeJS Part1/ImportKeyword
    npm install random-words */

import { generate} from "random-words";
console.log(generate());

/* Q.Difference between require Vs import?
 Ans: 1)We can't selectively load only the pieces we need with require,but with import we can selectively load only the pieces we need which saves memory.
      2)Loading is synchronous for 'require' but can be asynchronous for 'import'.   */