/* What are functions

 -code blocks designed to perform a particular task
- can reuse a function over and over again
- functions can only be executed when called or triggered

syntax to write a function

function nameofFunction () {
}

*/

function addition(){
    let sum = 30 + 20
    console.log(sum)
}

addition();

function subtraction(){
    let result = 50 - 20
    console.log(result)
}

subtraction();

function division(x , y){   //x and y are placeholders/parameters
    let divide = x/y
    console.log(divide)
}
division(40 , 2)   // 40 and 2 are referred to as agruments

function greet(hello){
    console.log(hello)
}
greet("dumelang")
greet("ndaa")
