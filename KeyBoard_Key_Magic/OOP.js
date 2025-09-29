// __________________________ OBJECT LITERAL __________________________
// let user = {
//     username: "Gugu",
//     age: 1,
//     country: "Ireland",
//     getUserDetails: function(){
//         console.log(`The username is ${this.username} `);
//         console.log(this);
//     }
// };
// user.getUserDetails();
// console.log("hehehh");

// _________________________ CONSTRUCTOR FUNCTION  ________________________________
// function User (username, loginCount, isLoggedIn ) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;
//     this.greeting = function () {
//         console.log(`WELCOME ${this.username}`);
//     }
//     this.greeting();
    // console.log(`${this.username}, ${this.loginCount}, ${this.isLoggedIn}`);
//     return this;
// }

// This calls the function without the new keyword.
// When called this way, this refers to the global object (window in browsers), not a new instance of User.

// const user1 = new User("malaika", 2, true);
// console.log(user1);
// console.log(user1 instanceof User);
// onsole.log(user1 instanceof Object);
// console.log(user1)
// const user2 = new User("Gugu", 5, false);
// console.log(user2)

// ______________________________________ PROTOTYPES _____________________________________
// function multiply(num) {
//     return num*2;
// }
// multiply.power = 5;
// console.log(multiply(4));
// console.log(multiply.power);
// console.log(multiply.prototype)

// ______________________________________Code no.2 _______________________________________
// function CreateUser( username,age,score ) {
//     this.username = username;
//     this.age= age;
//     this.score = score;
// }
// CreateUser.prototype.increment = function() {
//     this.score++;
// }
// CreateUser.prototype.PrintMe = function() {
//     console.log(`The price is ${this.score}`);
// }
// const user1 = new CreateUser("Malaika", 22, 95);
// const user2 = new CreateUser("Hoorain", 1, 100);
// console.log(user1);
// user1.PrintMe();




// function Person(name) {
//     this.name = name;
//     return { custom: "I replaced the new object" }; // Returning a non-primitive object
// }

// let p = new Person("Ali");
// console.log(p); // { custom: "I replaced the new object" }


// function Person(name) {
//     this.name = name;
//     return "Hello"; // Primitive is ignored
// }

// let p = new Person("Ali");
// console.log(p); // Person { name: "Ali" }

// _____________________________PROTOTYPE ____________________________________
// let Heroes = ["Thor", "SpiderMan"];
// let hero = "SpiderMan";
// let HeroPower = {
//     thor: "hammer",
//     spiderman: "sling",
//     getSpiderPower : function (){
//         console.log(`The spider power is ${this.spiderman}`);
//     }
// }

// //directly object ko property de di to phir ab sb kai paas automatically ye 
// // property ho gi kyonkai sb us se guzar kr bn rhy hain

// Object.prototype.hitesh = function (){
//     console.log("Hitesh is present in all objects.");
// } 

// Array.prototype.heyHitesh = function (){
//     console.log(" HELLO WORLD! ");
// } 
// String.prototype.trip = function (){
//     console.log("IN SHAA ALLAH! TRIP TO MUSHKPURI TOP");
// }
// HeroPower.hitesh();
// Heroes.hitesh();
// Heroes.heyHitesh();
// hero.trip();


// _____________________ INHERITANCE (Local Inheritance) _________________________

// let User = {
//     name: "Chai Aur Code",
//     email: "chai@google.com"
// }


// let Teacher = {
//     makeVideo : true
// }

// const TeachingSupport ={
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment : "JavaScript Assignment",
//     fullTime : true,
//     __proto__: TeachingSupport
// }
 
// Teacher.__proto__ = User;
// console.log(TeachingSupport.isAvailable);
// console.log(TeachingSupport.fullTime);


// __________________Another Way of inheriting the objects  NOT GLOBALLY____________________________

// Object.setPrototypeOf(TeachingSupport, Teacher);
// it means only TeachingSupport inherits from Teacher — not the other way around.
// chain is :
// TeachingSupport → Teacher → Object.prototype → null
// console.log(TeachingSupport.isAvailable);


// _____________________ Extending native prototypes ________________________

// let Name = "    HOORAIN";
// String.prototype.trueLength = function (){
//     console.log(this);
//     console.log(`True length is: ${this.trim().length}`);
// }
// Name.trueLength();
// // Can be called like this
// "Malaika".trueLength();
// "    MushkPuriTOP".trueLength();

//________________________________ Call and This _______________________________
// function SetUsername (username){
//     this.username = username;
//     console.log("called");
// }

// function CreateUser(username, email, password) {
//     // for explicitely calling the function
//     // for giving the context of this function given THIS as the first parameter 
//     SetUsername.call(this,username);
//     this.email = email;
//     this.password = password;
// }

// const chai = new CreateUser("Malaika", "malaikashabbir1@gmail.com", "travel202_");
// console.log(chai);

// ______________________________ CLASSES _______________________________
// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;  //It will concatenate the password with abc.
//     }

//     capitalize(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const obj1 = new User("chai", "chai@gmail.com", "123");
// console.log(obj1);
// console.log(obj1.encryptPassword());
// console.log(obj1.capitalize());

// __________________ TREATING THE FUNCTION AS A PROTOTYPE (Behind the Scene) __________________________
// function Person (username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
// }
// Person.prototype.encryptPassword = function() {
//     return `${this.password}abc`;  //It will concatenate the password with abc.
// }

// Person.prototype.capitalize = function (){
//     return `${this.username.toUpperCase()}`
// }


// const obj2 = new Person("Gugu", "hoorain14@gmail.com", "1234" );
// console.log(obj2);
// console.log(obj2.encryptPassword());

// __________________________ INHERITANCE ___________________________
// class User {
//     constructor(username) {
//         this.username = username;
//     }

//     logMe() {
//         console.log(`UserName is ${this.username}`);
//     }
// }
// extends for inhertance
// class Teacher extends User {
//     constructor(username, email, password) {
//         super(username);
//         this.password = password;
//         this.email = email;
//     }
//     addCourse() {
//         console.log(`The new course is added by ${this.username}`);
//     }
// };
// const object1 = new Teacher("Hoorain", "HOORAIN@gmail.com", "CAR's OWNER" );
// console.log(object1)
// console.log(object1.addCourse());
// // Object 1 can access the logMe function because of inheritance.
// object1.logMe();

// const MasalaChai = new User("MasalaChai");
// console.log(MasalaChai.logMe());

// // _____________ FOR CHECKING THE INSTANCE OF 
// console.log(object1 instanceof Teacher);
// // Teacher is inherting the User class so the TEACHER is the instance of USER class.
// console.log(object1 instanceof User);


// __________________________ STATIC PROPERTIES _____________________________
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`UserName is ${this.username}`);
    }

    static createID(){
       return `123`; 
    }
}
let user1 = new User ("HMU");
// console.log(user1);
// console.log(user1.createID()); //calling the static method which will throw an error

class Teacher extends User {
    constructor(username,email) {
        super(username);
        this.email = email;
    }
}
const Iphone = new Teacher ("Iphone", "Iphone@gmail.com");
console.log(Iphone);
console.log(Iphone.logMe());
console.log(Iphone.createID()); //calling the static method which will throw an error
