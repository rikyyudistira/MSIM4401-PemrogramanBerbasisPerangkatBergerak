// ========================================
// GANTI NIM ANDA DI SINI
// ========================================
var NIM = "052240813"; // Ganti dengan NIM Anda
console.log("=".repeat(50));
console.log("NIM: ".concat(NIM));
console.log("=".repeat(50));
// ========================================
// SOAL 1: POLA SEGITIGA
// ========================================
function buatSegitiga(nim) {
    var digitTerakhir = parseInt(nim[nim.length - 1]);
    var tinggiSegitiga = digitTerakhir;
    console.log("\n📐 SOAL 1: POLA SEGITIGA");
    console.log("Digit terakhir NIM: ".concat(digitTerakhir));
    console.log("Tinggi segitiga: ".concat(tinggiSegitiga));
    console.log("-".repeat(50));
    for (var i = 1; i <= tinggiSegitiga; i++) {
        var baris = "";
        for (var j = 1; j <= i; j++) {
            baris += j + " ";
        }
        console.log(baris.trim());
    }
}
// ========================================
// SOAL 2: DERET ARITMATIKA
// ========================================
function buatDeretAritmatika(nim) {
    var duaDigitTerakhir = parseInt(nim.slice(-2));
    var digitKe3DariBelakang = parseInt(nim[nim.length - 3]);
    var beda = digitKe3DariBelakang + 1;
    console.log("\n➕ SOAL 2: DERET ARITMATIKA");
    console.log("2 digit terakhir NIM: ".concat(duaDigitTerakhir));
    console.log("Digit ke-3 dari belakang: ".concat(digitKe3DariBelakang));
    console.log("Beda (step): ".concat(digitKe3DariBelakang, " + 1 = ").concat(beda));
    console.log("-".repeat(50));
    var deret = [];
    for (var i = 0; i < 10; i++) {
        deret.push(duaDigitTerakhir + (i * beda));
    }
    console.log(deret.join(", "));
}
// ========================================
// SOAL 3: BILANGAN PRIMA
// ========================================
function cekPrima(n) {
    if (n < 2)
        return false;
    if (n === 2)
        return true;
    if (n % 2 === 0)
        return false;
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0)
            return false;
    }
    return true;
}
function cariBilanganPrima(nim) {
    var duaDigitTerakhir = parseInt(nim.slice(-2));
    var batasAkhir = duaDigitTerakhir + 10;
    console.log("\n🔢 SOAL 3: BILANGAN PRIMA");
    console.log("2 digit terakhir NIM: ".concat(duaDigitTerakhir));
    console.log("Batas akhir: ".concat(duaDigitTerakhir, " + 10 = ").concat(batasAkhir));
    console.log("-".repeat(50));
    var bilanganPrima = [];
    for (var i = 1; i <= batasAkhir; i++) {
        if (cekPrima(i)) {
            bilanganPrima.push(i);
        }
    }
    console.log(bilanganPrima.join(", "));
}
// ========================================
// MENJALANKAN SEMUA PROGRAM
// ========================================
buatSegitiga(NIM);
buatDeretAritmatika(NIM);
cariBilanganPrima(NIM);
console.log("\n" + "=".repeat(50));
console.log("PROGRAM SELESAI");
console.log("=".repeat(50));
