var b;
var c = document.getElementById("block");
for (i = 1; i <= 9; i++){
    for (j = 1; j <= 10; j++){
        b = (i + "*" + j + "=" + (i * j) + "<br>");
        c.innerHTML += '<div style="background-color:#99ff99">' + b + '</div>';
}
    b = "<pre>" + "\n" + "</pre>";
    c.innerHTML +=b;
} 




