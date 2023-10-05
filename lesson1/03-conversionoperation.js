// let age="23"
let age="23abc"   /* NaN => Not a Number*/


console.log(typeof age)
console.log(typeof(age))

let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber);
// conversion kuchh aise huwa
// "23" => 23 (convert into number but niche)
//  "23abc" => NaN(Not a Number)
//  true =>1; false=> 0

let isLoggedIn = 1

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// investigation study(Notes)
// 1 => converts into true;  
// 0 => convrts into false;
// "" =>   "      "  false;
// "Mubarak" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);
