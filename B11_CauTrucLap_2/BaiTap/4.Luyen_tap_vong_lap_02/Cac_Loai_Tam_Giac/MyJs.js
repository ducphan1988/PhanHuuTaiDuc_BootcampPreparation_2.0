for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>");
let n2 = 6;
for (let i = 0; i < n2; i++) {
    for (let j = 0; j < n2; j++) {
        if (i < j) {
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp")
        }
    }
    document.write("<br>");
}

document.write("<br>");

let n = 5;
for (let i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        document.write("&nbsp;&nbsp");
    }
    for (let k = i; k < n; k++) {
        document.write("*");
    }
    document.write("<br>")
}