const name = "Mubarak"
const repoCount = 40

console.log(name + repoCount + "value") // this is old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gamename = new String('Mubarak')

console.log(gamename[0])  // M
console.log(gamename[1])  // u
console.log(gamename.__proto__);

console.log(gamename.length);          // 7
console.log(gamename.toUpperCase());  // MUBARAK
console.log(gamename.charAt(2));     //2nd position is b
console.log(gamename.indexOf('b'));

const newString = gamename.substring(0, 4)  
console.log(newString);                    //Muba

const anotherString = gamename.slice(-5, 4)
console.log(anotherString);                // Reverse ba

const newStringOne = "   Mubarak   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://mubarak.com/mubarak%20ansari"
console.log(url.replace('%20', '-'));

console.log(url.includes('ansari'))  // is ansari exist in url=> true
console.log(url.includes('beauty'))  // false 
console.log(gamename.split('-'));



