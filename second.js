//Задание 7.7.2
function calculate(a, b, operator) {
    if (operator === "+") return a + b;
    else if (operator === "-") return a - b;
    else if (operator === "*") return a * b;
    else if (operator === "/") return a / b;
};

const arr = [2, 3, "+"];

console.log(calculate.apply(calculate, arr));
