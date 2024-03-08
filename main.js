var a = 5;
var b = 2;
var c;
c = ++a + a++ + --b + b-- + a + b++  + b;
console.log(c);
// 6+ 7 + 1 + 0 + 5 + 1 + 2
