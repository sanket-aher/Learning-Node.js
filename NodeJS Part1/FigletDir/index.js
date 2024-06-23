/* NPM(Node Package Manager) : NPM is a Package Manager for NodeJS that helps in managing and sharing reusable Javascript code.
                                1)It having libraries of Packages like express,react,figlet,etc
                                2)Libraries of Package can be install using command line tools.
    URL to search on browser for libraries of package in NPM : https://www.npmjs.com/ */
/* 1) Local Installation of Figlet library in 'FigletDir' Folder.
        Type on Command line/Git Bash :
        Step1: Go to FigletDir folder
              cd FigletDir 
        Step2:
        Sanket Aher@DESKTOP-7UDIT7I MINGW64 /e/Learning/NodeJS Learn/NodeJS Part1/FigletDir
        >npm install figlet.
        Step3: Create index.js file and copy the code of this website https://www.npmjs.com/package/figlet to see the figlet library output
        >node index.js  */

/* Installing any package into contain 
1)node_modules : The node_modules folder contains every installed dependency for your project/library
2)package-lock.json : It records the exact version of every installed dependency,including its sub-dependencies and their versions.  */

var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

/*_
  output:
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