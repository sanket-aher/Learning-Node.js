/* module.exports : The module.exports is actually a property of the module object in node.js. module. Exports is the object that is returned to the require() call. By module.exports, we can export functions, objects, and their references from one file and can use them in other files by importing them by require() method.
    require() : A built-in function to include external modules (external data such as object,variable values,functions)  that exist in seperate files.  */

/* Ex1 */
//module.exports = "hello!";

/* Ex2 */
//const sum =(a,b) => a+b;
//const PI = 3.14;
//let obj={
//    sum:sum,
//    PIValue:PI
//}
//module.exports = obj;

/* Ex3 : Rewrite Ex2 in better way */
//const sum1 =(a,b) => a+b;
//const PI1 = 3.14;
//module.exports = {
 //   sum:sum1,
//   PIValue:PI1
//}

/* Ex4 : Rewrite Ex3 in better way */
module.exports.sum2 =(a,b) => a+b; // OR exports.sum2 =(a,b) => a+b;
exports.PI2 = 3.14; // OR module.exports.PI2 =3.14;

/* Ex5 */
// exports = "hello" => Error
// module.exports = "hello" => Correct


