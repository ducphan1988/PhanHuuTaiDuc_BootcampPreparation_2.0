let a = parseInt(prompt("Nhập chiều dài a: "));
let b = parseInt(prompt("Nhập chiều rộng b: "));
for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
        if ((j === 1) || (j === b) || (i === 1) || (i === a)) {
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}