//single line comment

/* multiple line comment */

//What is Javascript - A programming language where you can add functionality,interactive and dynamics to web page

//Variables are containers that store data
//Data types - Boolean, String, Number, etc

var age = 23; //accessed anywhere in code  local or global// NUMBER
let name = "Zandie " //can only be accessed within a code block  // STRING
const surname = "Zulu" //won't change, stays the same  // STRING
let isEligible = true   //boolean


console.log(age)
//when starting a var always start with a letter or an _ or $ other symbols should come after the first letter
//var is case sensitive = age and Age aren't the same so you have to ref exactly as it is
console.log(name)

//Javascript operators
    // Assignment operator
    let z = 50  //= is an assignment operator 
    z+=5;
    z-= 4;
    z*=2;


    //Arithmetic operators
        // +  -  *  /


console.log(z)

let y = 20;  //assignment
let x = 50;
let b = 5+10  ;
let c = y +"45"  // concatinating a number and a string
let sum = y + x;  //expression
console.log(sum)

console.log(c)

let a = (100+50)*3 ;
console.log(a)

//Declaring without assigning a value

let e ;
console.log(e)

//Comparison operators 
    // ==  ===   !=  !==  >  <  >=  <==

let num = 5 == 5;  // comparison
let num1 = 10 =="10"  // doesn't check the data type 
let num2 = 10 === "10"  // checks the data type
let num3 = "zandie@gmail.com" != "Zandie@gmail.com"  //  != means its not equal to, no match, doesn't check for data type
 // !==  checks if its not equal and checks for the data type if they match
let num4 = 5>=4;
let num5 = 5>=5;

console.log(num)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)

//Logical operators
// || means or   two conditons but 1 must be true
// && means and  two conditions and all must be true

let num6 = 20;
let num7 = 20;
let num8 = num6 !== 20 && 0.5 <=1;
let num9 = num6 > num7 || 0.5 <=1;

console.log(num8)
console.log(num9)

//Conditional Statements
    // Helps a program to make decisions

   