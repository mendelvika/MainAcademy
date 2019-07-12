var a = prompt('enter a number from 0 to 100');
var b;
if (a == null) {
    b = ('ok. but why?');
}
else if (100 >= a && a >= 95) {
    b = ('A  95-100');
}
else if (94 >= a && a >= 85) {
    b = ('B 85 - 94');
}
else if (84 >= a && a >= 75) {
    b = ('C 75-84');
}
else if (74 >= a && a >= 65) {
    b = ('D 65-74');
}
else if (64 >= a && a >= 60) {
    b = ('E 60-64');
}
else if (59 >= a && a >= 0) {
    b = ('FX 0-59');
}
else if (a > 100) {
    b = ('your number is more than 100. try again');
}
else if (typeof a) {
    b = 'type of your date is not a number.this is ' + typeof a;
}

b = alert(b);
