let a = [
      [1, 2, 1, 24]
    , [8, 11, 9, 4]
    , [7, 0, 7, 27]
    , [7, 4, 28, 14]
    , [3, 10, 26, 7]
];
let i;
let j;
for (i in a) {
    document.write("row" + i + "<br>");
    for (j in a[i]) {
        document.write("" + a[i][j] + "<br>");
    }
}