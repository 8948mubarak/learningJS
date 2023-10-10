const score = 350
  console.log(score)

  const balance = new Number(100)
  console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

    const otherNumber = 149.8977
    console.log(otherNumber.toPrecision(3)); // 150
    console.log(otherNumber.toPrecision(4));  // 149.9

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); // 1,00,000 INIDIAN number system  

// ++++++++++++++++++++++++> Maths <++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4))     // absolute value
console.log(Math.round(4.3));  // minimum 4
console.log(Math.round(4.6));  // maximum 5
console.log(Math.ceil(4.3));   // 5
console.log(Math.floor(4.3));  // 4

console.log(Math.random()); // gives the value b/w 0 & 1 e.g =>0.1, 0.4, 0.8 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10 + 1));

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
