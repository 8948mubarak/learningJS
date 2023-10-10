// Dates

let myDate = new Date()  // Date is an Object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

/* 

let myCreatedDate = new Date(2023,0,23)  // months start with 0 ni JavaScript
console.log(myCreatedDate.toDateString());

*/

//Another Method

//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//console.log(myCreatedDate.toLocaleString());

/* +++++++++=> Date in dd/mm/yy <++++++++++++++

let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString()); ==> 1/14/2023, 12:00:00 AM
*/

/* ++++++++++++=> Date in mm/dd/yy (INDIA) <=+++++++++++ */

let myCreatedDate = new Date("01-10-2023")
//console.log(myCreatedDate.toLocaleString());

 let myTimeStamp = Date.now()

 console.log(myTimeStamp);   //results in miliseconds
 console.log(myCreatedDate.getTime()); //results in milisecond

console.log(Date.now());     // 1696933586417 miliseconds
console.log(Date.now()/1000)   // 1696933586.417 in second but with decimal
console.log(Math.floor(Date.now()/1000)); // 1696933586


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // to get month
console.log(newDate.getSeconds()); // to get seconds

 // `${newDate.getDay()} and the time` =>> string interpolation to print date

 newDate.toLocaleString('default' ,{
    weekday: "long",
                     } )

    









   