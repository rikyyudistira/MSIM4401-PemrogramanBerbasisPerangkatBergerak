// ========================================
// GANTI NIM ANDA DI SINI
// ========================================
const NIM = "052240813"; // Ganti dengan NIM Anda

console.log("=".repeat(50));
console.log(`NIM: ${NIM}`);
console.log("=".repeat(50));

// ========================================
// SOAL 1: POLA SEGITIGA
// ========================================
function buatSegitiga(nim: string): void {
  const digitTerakhir = parseInt(nim[nim.length - 1]);
  const tinggiSegitiga = digitTerakhir;
  
  console.log("\n📐 SOAL 1: POLA SEGITIGA");
  console.log(`Digit terakhir NIM: ${digitTerakhir}`);
  console.log(`Tinggi segitiga: ${tinggiSegitiga}`);
  console.log("-".repeat(50));
  
  for (let i = 1; i <= tinggiSegitiga; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
      baris += j + " ";
    }
    console.log(baris.trim());
  }
}

// ========================================
// SOAL 2: DERET ARITMATIKA
// ========================================
function buatDeretAritmatika(nim: string): void {
  const duaDigitTerakhir = parseInt(nim.slice(-2));
  const digitKe3DariBelakang = parseInt(nim[nim.length - 3]);
  const beda = digitKe3DariBelakang + 1;
  
  console.log("\n➕ SOAL 2: DERET ARITMATIKA");
  console.log(`2 digit terakhir NIM: ${duaDigitTerakhir}`);
  console.log(`Digit ke-3 dari belakang: ${digitKe3DariBelakang}`);
  console.log(`Beda (step): ${digitKe3DariBelakang} + 1 = ${beda}`);
  console.log("-".repeat(50));
  
  const deret: number[] = [];
  for (let i = 0; i < 10; i++) {
    deret.push(duaDigitTerakhir + (i * beda));
  }
  
  console.log(deret.join(", "));
}

// ========================================
// SOAL 3: BILANGAN PRIMA
// ========================================
function cekPrima(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function cariBilanganPrima(nim: string): void {
  const duaDigitTerakhir = parseInt(nim.slice(-2));
  const batasAkhir = duaDigitTerakhir + 10;
  
  console.log("\n🔢 SOAL 3: BILANGAN PRIMA");
  console.log(`2 digit terakhir NIM: ${duaDigitTerakhir}`);
  console.log(`Batas akhir: ${duaDigitTerakhir} + 10 = ${batasAkhir}`);
  console.log("-".repeat(50));
  
  const bilanganPrima: number[] = [];
  for (let i = 1; i <= batasAkhir; i++) {
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