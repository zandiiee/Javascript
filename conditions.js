let age = 20;
let status = " SA citizen"

if(age>=18 && status ){
    console.log("You are eligible to vote")
} else{
    console.log("You are not eligible to vote")
}

let num1 = 13 % 2;

if(num1 == 0){
    console.log("This is an even number")
}else{
    console.log("This is an odd number")
}

let num2 = -10;

if(num2 < 0){
    console.log("This is a negative number")
}

// 0 - 10  underweight
// 10- 30  normal weight 
// 30 - 50    overweight

let gender = "Male"
if(gender == "Male"){
    console.log("You're a man")
}else if( gender == "Female"){
    console.log("You're a woman")
}else{
    console.log("Other")
}

//green light here just removed bc i don't have patience
let red = "red"
let orange = "orange"
let light = "red"

if(light == "green"){
    console.log("Go vroom vroom ")
} else if( light == "red"){
    console.log("Stop damn")
}else{
    console.log("Wait damn")
}

let subscription = "Family"

switch(subscription){
    case  "basic":
        console.log(" Access to basic subscription")
        break;

    case  "Family":
        console.log(" Access to Family subscription")
        break;

case  "Premium":
        console.log(" Access to premium subscription")
        break;

    case  "default":
        console.log(" Access to default subscription")
        break;
}
let purple = "purple"
let pink = "pink"
let violet = "violet"
let signal = "purple"

switch(signal){
    case  "purple":
        console.log(" Go Vroom Vrooom")
        break;

    case  "pink":
        console.log(" Girl stawp")
        break;

    case  "violet":
        console.log(" Girl hold on")
        break;

    case  "default":
        console.log(" The robot is faulty")
        break;
}


let cold =20 ;
let hot = 25 ;
let weather = 27;
switch(true){
     case  "hot":
        console.log("Hot")
        break;

    case  "cold":
        console.log(" Cold")
        break;
    case "default":
        console.log("warm")
}

//  Ternary = works the same s if statements only with 2 conditions
let txt = (age <18) ? "Teenager" : "Adult"  //when declaring a variable
console.log(txt)

/* 
syntax  

for (initialisation , conditions , increment/decrements){
}

*/
for(let i = 0 ; i<10 ; i++){
    console.log(i +"printing numbers" )
}

for(let i = 0 ; i<10 ; i++){
    if(i% 2 == 0){
        console.log("Even number")
    }else{
        console.log("Odd number")
    }
}

for(let p =0 ; p<10 ; p++){
    if(p % 2 < 0){
        console.log("Odd numbers")
    }
}

// while loops execute a code as long as specified condition is true
/* 
Syntax for while loop

while (condition){
code block to be executed
}
*/
let i = 0;
while(i <10){
    console.log(i)
    ++i;
}
let nommer =1
while(nommer <10){
    console.log(nommer)
    --nommer;
    if(nommer == 0){
        break;
    }
}
let cherry = 1
while(cherry <20){

    if(cherry %2 == 1){
       console.log( cherry +" odd number") 
    }
    ++cherry;
    
}

//Do while loop - runs at least once even if the condition is false
// executes code block and then checks the conditions to see if its faLse
/* 
do{
}
while(condition)
*/
let x = 0;
do{
console.log(x + "  X running")
++x;
}while(x >10);

// Continue statements skips current iteration in a loop
for( let o = 1 ; o< 10 ; o++){
    if( o == 5){
        continue
    }
    console.log(o +" we're skipping five")
}