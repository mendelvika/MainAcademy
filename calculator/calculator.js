var a = prompt('num1');
var b = prompt('num2');
var c = prompt('enter an operator');
a = +a;
b = +b;
if (c == '*') {
    alert(a * b);
}
else if (c == '+') {
    alert(a + b);
}
else if (c == '-') {
    alert(a - b);
}
else if (c == '/') {
    alert(a / b);
}