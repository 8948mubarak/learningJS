const accountID = 8840
let accountEmail = "abc@google.com"
var accountPassword = "9789"
accountCity ="Bareilly"
// (Aise v variable define kar sakte h)
let accountState;

// accountID = 5 // not allowed:- kyonki constant h

/*
Prefer not to use var
b'coz of issue in block scope & functional scope
*/

acccountEmail ="muba678@gmail.com"
accountPassword = "9876"
accountCity =" lucknow"
console.log(accountID);

console.table([accountEmail,accountPassword,accountCity,accountState])