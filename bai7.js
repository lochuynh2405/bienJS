let readline = require('readline-sync');
let n = Number(readline.question('nhap n: '));
let donVi,chuc,tram;
donVi = n % 10;
chuc = parseInt(n/10%10);
tram = parseInt(n/100);
console.log("Đơn Vị",donVi);
console.log("Chục",chuc);
console.log("Trăm",tram);