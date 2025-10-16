// Activity 2: Membuat Promise

// function getAngkaAcak(max: number): number { // <1>
//     return Math.floor(Math.random() * Math.floor(max));
// }

// let p = new Promise<unknown>((resolve, reject) => {// <2>
//     let acak = getAngkaAcak(1000);
//     if (acak > 500) {
//         resolve(true); // <3>
//         return;
//     }
//     reject("Hasil < = 500"); // <4>
// });

// console.log(p); // <5>
// p.catch(err => console.log("ERROR - ", err)); // <6>

// Berbagai kemungkinan saat run:
// Promise { true }
// -> jika angka random lebih besar dari 500
// Promise { <rejected> 'Hasil < = 500' }
// ERROR - Hasil < = 500
// -> jika yang terjadi adalah reject


// Activity 2: Membuat Promise dengan chaining

// function getAngkaAcak(max: number): number {
//     return Math.floor(Math.random() * Math.floor(max));
// }

// let p = new Promise<number>((resolve, reject) => {
//     let acak = getAngkaAcak(20);
//     let hasil: number; // <1>
//     if (acak > 10) {
//         resolve(acak);
//         return;
//     }
//     reject("Hasil < = 10");
// }).then(function(hasil) { // <2>
//     console.log(hasil); // <3>
//     return hasil*2; // <4>
// }).then(function(hasil) { // <5>
//     console.log(hasil); // <6>
//     return hasil*2; // <7>
// }).then(function(hasil) {
//     console.log(hasil);
//     return hasil*2;
// });
// console.log(p);
// p.catch(err => console.log("ERROR - ", err));

// run (dapat berbeda-beda):
// pertama (jika resolve):
// Promise { <pending> }
// 12
// 24
// 48
// kedua (jika reject):
// Promise { <pending> }
// ERROR - Hasil < = 10

function getAngkaAcak(max: number): number {// <1>
    return Math.floor(Math.random() * Math.floor(max));
}
function lebihDari(max: number, angka: number): boolean | number { // <2>
    if (angka > max) {
        throw "ERR: arg 1 harus lebih besar daripada arg 2";
    }
    let acak = getAngkaAcak(max);
    if (acak > angka) {
        return true;
    } else {
        return acak;
    }
}
let p = async function (): Promise<boolean | number> {// <3>
    try {
        let hasilOK: boolean | number = await lebihDari(100, 500); // <4>
        // let hasilOK: boolean | number = await lebihDari(1000, 500); // <5>
        return hasilOK;
    } catch (error) {
        // <6>
        return error; 
    }
};
(async () => {
    // <7>
    console.log(await p());
})();
// jika <4> di uncomment, maka hasil:
// ERR: arg 1 harus lebih besar daripada arg 2
// jika menggunakan <5>, maka hasil kemungkinan:
// true
// 134 (atau angka lain