function inputs() {
    const num1 = +document.getElementById("num_1").value;
    const num2 = +document.getElementById("num_2").value;

    return  {num1 , num2 };
    
    
}

function calc(a, b, callback) {
    return callback(a,b);
}

function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function multi(x,y){
    return x*y;
}
function div(x,y){
    if (y=== 0)
    {
        alert ("cannot divide by 0");
    }
    else {
        return x/y;
    }
}

function square(x,y){
    return x**2;
}
function cube(x,y){
    return x**3;
}

function addition() {
  const { num1, num2 } = inputs();
  const result = calc(num1, num2, add);
  document.getElementById("result").innerText = "Result: " + result;
}

function subration() {
  const { num1, num2 } = inputs();
  const result = calc(num1, num2, sub);
  document.getElementById("result").innerText = "Result: " + result;
}
function multiply() {
  const { num1, num2 } = inputs();
  const result = calc(num1, num2, multi);
  document.getElementById("result").innerText = "Result: " + result;
}
function division() {
  const { num1, num2 } = inputs();
  const result = calc(num1, num2, div);
  document.getElementById("result").innerText = "Result: " + result;
}
function squareroot() {
  const { num1, num2 } = inputs();
  const result = calc(num1, num2, square);
  document.getElementById("result").innerText = "Result: " + result;
}
function cuberoot() {
  const { num1, num2 } = inputs();
  const result = calc(num1, num2, cube);
  document.getElementById("result").innerText = "Result: " + result;
}

function reset() {
    console.log("ji");
    
    document.getElementById("num_1").value = "";
  document.getElementById("num_2").value = "";
  document.getElementById("result").innerText = "Result :";

}
