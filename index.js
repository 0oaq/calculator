"use strict"
const calc = [12, '+', 3, '*', 4]
if (calc.includes('+')) {
    calc.shift()
    calc.shift()
    calc.push('+', 12);
}
console.log(calc);
for (const calcs of calc) {};
console.log(calc);

const addition = 0;
const subtraction = 1;
const multiplication = 2;
const division = 3;

const operation_string = [];
operation_string[addition] = "+"
operation_string[subtraction] = "-"
operation_string[multiplication] = "*"
operation_string[division] = "/"

const importance = [];
importance[addition] = 0
importance[subtraction] = 0
importance[multiplication] = 1
importance[division] = 1

const operands = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let storage = [];
let operatoradded = false

const numberbox = document.getElementById("numberBox")

function onNumberClick(number) {
    if (operatoradded) {
        operatoradded = false
        numberbox.value = ""
    }
    storage.push(number)
    numberbox.value += number;
}

let _operator = ""

function onOperatorClick(operator) {
    storage.push(operator)
    operatoradded = true;
}

function setOperator(operator) {
    _operator = operator
}

function onEnterClick(enter) {
    let newarray = storage.join("")
   
    if (newarray.split(_operator)[1]) {
        if (_operator === "+"){
            numberbox.value = parseFloat(newarray.split(_operator)[0]) + parseFloat(newarray.split(_operator)[1])
        } else if (_operator === "-"){
            numberbox.value = parseFloat(newarray.split(_operator)[0]) - parseFloat(newarray.split(_operator)[1])
        } else if (_operator === "*"){
            numberbox.value = parseFloat(newarray.split(_operator)[0]) * parseFloat(newarray.split(_operator)[1])
        } else if (_operator === "/"){
            numberbox.value = parseFloat(newarray.split(_operator)[0]) / parseFloat(newarray.split(_operator)[1])
        }
    }
}

function onClearClick(clear) {
    numberbox.value = ""
}
