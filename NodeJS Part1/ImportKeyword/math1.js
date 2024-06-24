/* import : The import statement is used to import modules exported by some other module. A module is a file that contains a piece of reusable code.
            Syntax : import {nameOne,nameTwo,..} from module-name
    Disavd of import : Node.js doesn’t support ES6 import directly. If we try to use import for importing modules directly in Node.js it will throw out the error.
    To overcome disadv : There are two methods to use ES6 import statement in Node.js
                         1)Changing content in package.json file : Add "type":"module" in package.json file
                         2)Using the esm module : npm install esm (Install package). */

export const sum=(a,b)=>a+b;
export const mult=(a,b)=>a*b;
export const g=9.8;
export const PI=3.14;
