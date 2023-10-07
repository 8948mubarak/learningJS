// Primitive 

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 90
const scoreValue = 90.5

const isLoggedIn = false
const outsideTemp = null //null means Empty not zero
let useraemail;  // undefined means value is declared but not given

const id = Symbol('987');
const anotherId = Symbol('987');

console.log(id=== anotherId);

    // node lesson1/datatypes-summary.js
const bigNumber = 89489979287355n 


// Reference ( Non Primitive)
   
    // Array, Objects, Functions:>  insabka result function 

  const heros = ["A.P.J.Abdul Kalam", "Bheem Rao", "SubashChandra"] ; //Array short e.g.

  let myObj = {
    name: "Mubarak",       // Object e.g.
    age:22,
  }

  const myFunction = function(){
    console.log( "Hello G");
  }

  //console.log(typeof anyvalue)

  /*%%%%  Tyoe of Value & Result type(o/p) %%%%%*/

   //  undefined => "undefined"
    // Null => "object"
    // Boolean => "boolean"
    // Number => "number"
    // String => "string"
    // Object => "object"
    // Object => "function"

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Stack & Heap Memory
// Stack(Primitive) :=> Declared variables ki copy milti h 
// Heap(Non-Primitive) :=>  Reference(Change original value me hojayegi)

let myYouTubeName = "Targetfuturem"

let anothername = myYouTubeName
console.log(anothername)
    //  here, stack se variable(myYouTubeName) ki value copy hokar - anothername me aa gyi h
   
    //  now change the value of anothername then check the value of (myYouTubeName & anothervalue)

    anothername = "MubarakFitness"
 console.log(myYouTubeName);
 console.log(anothername);

//  what happen in heap memory (Non-Primitive)

let SaneAlam = {
    email:"sane@microsoft.com",
    phoneNo: "x-y-z",
}

let Mubarak = SaneAlam

Mubarak.email = "mubarak@amazon.com"
// lets see the email results of SaneAlam & Mubarak😊😊

console.log(SaneAlam.email);
console.log(Mubarak.email);

// here in heap memory "sane@microsoft.com" change into "mubarak@amazon.com"
// thus reference is takes place & both user get the same email :- Notes for Self👍😎
// we get the copy in Stack but in heap we get the reference