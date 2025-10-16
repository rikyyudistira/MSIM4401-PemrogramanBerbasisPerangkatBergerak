function getAngkaAcak(max: number): number { // <1>
return Math.floor(Math.random() * Math.floor(max));
}
let p = new Promise<unknown>((resolve, reject) => {// <2>
let acak = getAngkaAcak(1000);
if (acak > 500) {
 resolve(true); // <3>
 return;
}
reject("Hasil < = 500"); // <4>
});
console.log(p); // <5>
p.catch(err => console.log("ERROR - ", err)); // <6>
// Berbagai kemungkinan saat run:
// Promise { true }
// -> jika angka random lebih besar dari 500
// Promise { <rejected> 'Hasil < = 500' }
// ERROR - Hasil < = 500
// -> jika yang terjadi adalah reject