let readline = require('readline-sync');
let toan = Number(readline.question('toan: '));
let ly = Number(readline.question('nhap ly: '));
let sinh = Number(readline.question('nhap sinh: '));
let anh = Number(readline.question('nhap anh: '));
let t = (toan+ly+sinh+anh)/4;
console.log(t);