/* Object Oriented Programming (OOPS) : OOPS is a programming paradigm in computer that relies on the concept of classes and object.It is used to structure a software program into simple,reusable pieces of code,blueprints(usually called classes),which are used to create individual instances of objects.
            To structure our code :1)Object Prototypes 2)New Operator 3)Constructors 4)Classes 5)Inheritance(extends and super keyword). */

/* 1]Object Prototypes:
        Every object in Javascript has a built-in property which is called its prototype.The prototype itself an object , so the prototype will have its own prototype,making whats called a prototype chain.
        Prototypes are the mechanism by which javascript object inherit features from one another.
        It is like a single template object that all object inherit methods and properties from without having their own copy.
        arr.__proto__ (reference/copy)
        Array.prototype
        String.prototype
*/

/* Ex1 */
let arr=[1,2,3];
console.log(arr); // (3) [1, 2, 3] [[Prototype]]: Array(0)

console.log(arr.__proto__); // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
arr.__proto__.push = (n)=>{
    console.log("Pushing number ",n);
}
console.log(arr.push(5)); // Pushing number  5
console.log(arr); // (3) [1, 2, 3] [[Prototype]]: Array(0)

console.log(Array.prototype); // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …] => Shows all methods and properties of Array
console.log(String.prototype); // String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …} => Shows all methods and properties of String

/* Factory Functions : A function that creates objects. */

/* Ex1 */
function PersonMaker(name,age)
{
    const person={
        name:name,
        age:age,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        }
    };
    return person;
}

let p1 = PersonMaker("adam",25);
console.log(p1); // {name: 'adam', age: 25, talk: ƒ}
console.log(p1.talk()); // Hi, my name is adam 

let p2 = PersonMaker("eve",25);
console.log(p2); // {name: 'eve', age: 25, talk: ƒ}
console.log(p2.talk()); // Hi, my name is eve

// Disadvantage of Factory Function : Inefficient of memory bcz every object create its own copy
console.log(p1.talk === p2.talk); //false => bcz it have different memory address copies

// To overcome of factory function use constructor or classes in JS.


/* 2]Constructor with new keyword :
        Constructor : Constructor function is a special function that is used to create and initialize objects in JS. When a new object is created using a constructor function ,it is automatically assigned a set of properties and methods that are defined withing the function 
        new keyword : The 'new' keyword is used to create an instance of object.When used with a constructor function,it creates a new object and sets the constructor functions 'this' keyword to point to the new object.
        
        When a function is called with the new keyword,the function will be used as a constructor.
*/

/* Ex1 */
//Constructor that doest return anything and name start with Capital letter.
function Person(name,age){
    this.name =name;
    this.age=age;
}

Person.prototype.talk=function(){
    console.log(`Hi,my name is ${this.name}`);
};

let p3 = new Person("john",26);
console.log(p3); // Person {name: 'john', age: 26}
console.log(p3.talk()); // Hi,my name is john

let p4 = new Person("smith",27);
console.log(p4); // Person {name: 'smith', age: 27}
console.log(p4.talk()); // Hi,my name is smith

console.log(p3.talk === p4.talk); //true

/* 3]Classes : Classes are a template for creating objects.The constructor method is a special method of a class for creating and initializing an object instance of that class.  */

/* Ex1 */
class Person1{
    constructor(name,age){
        this.name =name;
        this.age=age;
    }
    talk(){
        console.log(`Hi,my name is ${this.name}`);
    }
}

let p5 = new Person1("john",26);
console.log(p5); // Person1 {name: 'john', age: 26}
console.log(p5.talk()); // Hi,my name is john

let p6 = new Person1("smith",27);
console.log(p6); // Person1 {name: 'smith', age: 27}
console.log(p6.talk()); // Hi,my name is smith

console.log(p5.talk === p6.talk); //true

/* Q.Difference between contstructor and class in javascript?
Ans: 1)A constructor is a function that creates an object while a class is a blueprint for creating objects.
     2)classes define the framework whereas constructor actually creates an object and initializes them. */

/* 4]Inheritance : Inheritance in OOP is defined as the ability of a class to derive properties and methods from another class while having its own properties as well.
            
        A class inheritance inherits all the methods and properties from another class use the extends keyword.
        The super() method refers to the parent class to access the properties and methods.
*/

/* Ex1 */

class Person2{
    constructor(name,age){
        this.name = name;
        this.age = age; 
    }
    talk(){
        console.log(`Hi , I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks)
    {
        super(name,age); //parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name,age,subject)
    {
        super(name,age); //parent class constructor is being called
        this.subject = subject;
    }
}

let t1=new Teacher("eve",32,"english");
console.log(t1); // Teacher {name: 'eve', age: 32, subject: 'english'}
console.log(t1.talk()); // Hi,my name is eve

let s1=new Student("adam",25,95);
console.log(s1); // Student {name: 'adam', age: 25, marks: 95}
console.log(s1.talk()); // Hi,my name is adam

console.log(t1.talk === s1.talk); // true

/* Ex2 */
class Mammal{
    constructor(name){
        this.name=name;
        this.type="warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}
class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woff..");
    }
    eat() //override
    {
        console.log("Dog is eating");
    }
}
class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow..");
    }
}

let dog1=new Dog("tuffie");
console.log(dog1); //Dog {name: 'tuffie', type: 'warm-blooded'}
console.log(dog1.eat()); // Dog is eating

let cat1=new Cat("barbie");
console.log(cat1); //Cat {name: 'barbie', type: 'warm-blooded'}
console.log(cat1.eat()); // I am eating