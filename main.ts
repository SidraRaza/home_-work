
let a:number=5;
let b:number=2;
let c:number;
c=++a + a++ +--b +b-- +a+ b++ +b;
console.log(c);
// 6+ 7 + 1 + 0 + 5 + 1 + 2
