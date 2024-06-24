/* NodeJS : It is an Javascript Runtime Environment.It is used for server side programming.
    Note : NodeJs is not an language,library or framework. */

/* Install Node : Follow Node Installtion pdf to install node. */    

/* Node REPL(Read-Evaluate-Print-Loop) : The Node. js Read-Eval-Print-Loop (REPL) is an interactive shell that processes Node. js expressions. The shell reads JavaScript code the user enters, evaluates the result of interpreting the line of code, prints the result to the user, and loops until the user signals to exit.
    Note : 1)Node REPL is equivalet to console window of browser.
           2)Use Node REPL on commandline/terminal/git bash. */

/* Q.How to start Node REPL on command line.
 Ans: node => We start REPL simply by running "node" on commandline/terminal/git bash.  */

/* Command on REPL :
    1).help : Show the list of special commands.
    2).clear : Resets the REPL context to an empty.
    3).exit : Close the I/O stream,causing the REPL to exit.
    and many more search on google. */

/* Q.How to run JavaScript program using NodeJS Terminal. 
Ans: node filename.js */

/* Ex1  : On terminal your path is on current file of parent folder.  */
let n=5;
for (let i = 0; i < n; i++) {
    console.log("hello, ",i);
}
console.log("bye!");

/* 
> node script.js

output:
hello,  0
hello,  1
hello,  2
hello,  3
hello,  4
bye!
*/

/* Process Object : The process object provides information about and control over,the current Node.js process. */
/* Type on terminal :
> node (Go to the REPL)
> process (Show all process details and objects)
> process.version (Show the version of NoseJS)
> process.release  (Show the Release Version details)
> process.cwd() (Show the file path of current working directory(cwd))
> .exit (to exit from REPL) */

/* process.argv : Returns an array containing the arguments which is passed by an node.js process i.e on command line. */

/* Ex1 : On terminal your path is on current file of parent folder. */
console.log(process.argv)
 
let args=process.argv;
for(let i=2;i<args.length;i++){
    console.log("hello to ",args[i]);
}
/*
Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/Learning/NodeJS Learn/NodeJS Part1  
>node script.js
output 1:
[
  'C:\\Program Files\\nodejs\\node.exe',
  'E:\\Learning\\Apna College\\NodeJS Learn\\NodeJS Part1\\script.js'
]
*/

/*
Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/Learning/NodeJS Learn/NodeJS Part1 
>node script.js jay amit
output 2:
[
  'C:\\Program Files\\nodejs\\node.exe',
  'E:\\Learning\\Apna College\\NodeJS Learn\\NodeJS Part1\\script.js',
  'jay',
  'amit'
]
hello to jay
hello to amit
*/

/* 1)Exports in Files */
/*  module.exports : The module.exports is actually a property of the module object in node.js. module. Exports is the object that is returned to the require() call. By module.exports, we can export functions, objects, and their references from one file and can use them in other files by importing them by require() method.
    require() : A built-in function to include external modules (external data such as object,variable values,functions)  that exist in seperate files.  */
/* Ex1 */
const MathValues=require('./math');
console.log(MathValues); // { sum2: [Function (anonymous)], PI2: 3.14 }

/* 2)Exports in Directories : 1)Always index.js is entry point for exports if we have multiple files of JS.  */
/* Ex1 */
let info = require('./Fruits');
console.log(info); // [ { name: 'apple', color: 'red' }, { name: 'mango', color: 'Yellowish orange' } ]
console.log(info[0]); // { name: 'apple', color: 'red' }

/* Ex2 */
let info1 = require('./Fruits/mango');
console.log(info1); // { name: 'mango', color: 'Yellowish orange' }

/* NPM(Node Package Manager) : NPM is a Package Manager for NodeJS that helps in managing and sharing reusable Javascript code.
                                1)It having libraries of Packages like express,react,figlet,etc
                                2)Libraries of Package can be install using command line tools.
    URL to search on browser for libraries of package in NPM : https://www.npmjs.com/ */
/* 1] Local Installation of Figlet library in 'FigletDir' Folder.
        Type on Command line/Git Bash :
        Step1: Go to FigletDir folder
              cd FigletDir 
        Step2:
        Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/Learning/NodeJS Learn/NodeJS Part1/FigletDir
        >npm install figlet.
        Step3: Create index.js file and copy the code of this website https://www.npmjs.com/package/figlet to see the figlet library output
        >node index.js  */

/* Installing any package it contain 
1)node_modules : The node_modules folder contains every installed dependency for your project/library
2)package-lock.json : It records the exact version of every installed dependency,including its sub-dependencies and their versions.  */

/* output 
   _      _ _        __        __         _     _ _ _
| | | | ___| | | ___   \ \      / /__  _ __| | __| | | |
| |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | | |
|  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|_|
|_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_|_)
*/

/* 3)package.json : The package.json file contains descriptive and functional metadata about a project such as name,version and dependency
    Note : If node-module and package-lock.json is deleted or when we get code from github we dont have node-module and package-lock.json So, due to package.json we again install node_modules and package-lock.json file using command "npm install" 
    a)npm install : It install package and any package dependency.
*/

/* 
    b)npm init : To create our package.json file
    Q.Now create a folder called MyProject and create your own package.json and also install 2 library called figlet and give-me-a-joke
        Type on GitBash :
        Step1: Create folder MyProject
              cd MyProject
        Step2:
        Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/Learning/NodeJS Learn/NodeJS Part1/MyProject
        >npm init
        >package name : (myproject)
        >version : (1.0.0)
        >description : This is my first project
        >entry point:(index.js)
        ..
        >author: Sanket Aher
        license: (ISC)
        Step3:
        Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/Learning/NodeJS Learn/NodeJS Part1/MyProject
        >npm install figlet
        >npm install give-me-a-joke
        Step4:
        Now see package.json file
*/

/* Note: 1)Using package.json file we can install node_modules and package-lock.json => npm install
         2)We want to create package.json in folder => npm init */


/* 2]Global installation of figlet library i.e access in any files and folders
        Type on GitBash
        Step1: (Syntax : npm install -g packageName)
        Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/Learning/NodeJS Learn/NodeJS Part1
        npm install -g figlet
        Step2: (Syntax : npm link packageName)
        Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/Learning/NodeJS Learn/NodeJS Part1
        npm link figlet
        Step3:
        Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/Learning/NodeJS Learn/NodeJS Part1
        node script.js

*/
/* Ex1 */         
var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
}
console.log(data);
});

/*_   _      _ _        __        __         _     _ _ _
| | | | ___| | | ___   \ \      / /__  _ __| | __| | | |
| |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | | |
|  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|_|
|_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_|_)
*/

/* import : The import statement is used to import modules exported by some other module. A module is a file that contains a piece of reusable code.
            Syntax : import {nameOne,nameTwo,..} from module-name
    Disavd of import : Node.js doesn’t support ES6 import directly. If we try to use import for importing modules directly in Node.js it will throw out the error.
    To overcome disadv : There are two methods to use ES6 import statement in Node.js
                         1)Changing content in package.json file : Add "type":"module" in package.json file
                         2)Using the esm module : npm install esm (Install package). */

//Try Ex1 and Ex2 of import on ImportKeyword Folder to unserstand better

/* Ex1 */
//import {sum,PI} from "./math1.js"
//console.log(sum(1,2));

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

//    import { generate} from "random-words";
//    console.log(generate());

/* Q.Difference between require Vs import?
 Ans: 1)We can't selectively load only the pieces we need with require,but with import we can selectively load only the pieces we need which saves memory.
      2)Loading is synchronous for 'require' but can be asynchronous for 'import'.   */
