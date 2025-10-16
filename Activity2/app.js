function getAngkaAcak(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var p = new Promise(function (resolve, reject) {
    var acak = getAngkaAcak(1000);
    if (acak > 500) {
        resolve(true); // <3>
        return;
    }
    reject("Hasil < = 500"); // <4>
});
console.log(p); // <5>
p.catch(function (err) { return console.log("ERROR - ", err); }); // <6>
// Berbagai kemungkinan saat run:
// Promise { true }
// -> jika angka random lebih besar dari 500
// Promise { <rejected> 'Hasil < = 500' }
// ERROR - Hasil < = 500
// -> jika yang terjadi adalah reject
