console.log("Operators in JS");

let a = 21;
let b = 2;

console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);

// a**b means a to the power b(21^2);
console.log("a ** b = ", a**b);
console.log("a % b = ", a%b);
console.log("a++ = ", a++);
console.log("a = ", a);
console.log("a-- = ", a--);
console.log("a = ", a);
console.log("++a = ", ++a);
console.log("a = ", a);
console.log("--a = ", --a);
console.log("a = ", a);

// Assignment Operators

let assignment = 1;

assignment += 5;
console.log(assignment);
assignment -= 5;
console.log(assignment);
assignment *= 5;
console.log(assignment);
assignment /= 5;
console.log(assignment);
assignment %= 5;
console.log(assignment);
assignment **= 5;
console.log(assignment);

// Comparison Operators

let comp1 = 6;
let comp2 = "6";

console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);
console.log("comp1 > comp2 is ", comp1 > comp2);
console.log("comp1 < comp2 is ", comp1 < comp2);
console.log("comp1 >= comp2 is ", comp1 >= comp2);
console.log("comp1 <= comp2 is ", comp1 <= comp2);

// Logical Operators

let x = 5;
let y = 6;

console.log(x<y && x==5);
console.log(x>y || x==5);
console.log(!false);
console.log(!true);
