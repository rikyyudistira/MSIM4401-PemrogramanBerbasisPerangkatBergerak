const NIM = "052240813";

buatSegitiga(NIM);
deretAritmatika(NIM);
deretBilanganPrima(NIM);

function buatSegitiga(nim: string): void {
    const digitTerakhir = parseInt(nim[nim.length - 1]);
    const tinggiSegitiga = digitTerakhir;

    console.log("SOAL 1 : POLA SEGITIGA")
    console.log("NIM : ", NIM)
    console.log("Digit Terakhir : ", digitTerakhir);
    console.log("Tinggi Segitia : ", tinggiSegitiga);
    console.log("-".repeat(50));

    for (let i = 1; i <= tinggiSegitiga; i++) {
        let baris = '';
        for(let j = 1;j <= i;j++){
            baris += j + " ";
        }
        console.log(baris.trim())
    }

}

function deretAritmatika (nim: string): void {
    const duaDigitTerakhir = parseInt(nim.slice(-2));
    const digitKe3DariBelakang = parseInt(nim[nim.length - 3]);
    const beda = digitKe3DariBelakang + 1;

    console.log("SOAL 2 : DERET ARITMATIKA")
    console.log("NIM : ", NIM)
    console.log("Dua Digit Terakhir : ", duaDigitTerakhir);
    console.log("Digit 3 Dari Belakang : ", digitKe3DariBelakang);
    console.log("Beda : ", beda);
    console.log("-".repeat(50));

    const deret: number[] = [];
    for (let i = 0; i < 10; i++) {
        deret.push(duaDigitTerakhir + (i * beda));
    }

    console.log(deret.join(", "))
}

function cekPrima(num: number): boolean {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function deretBilanganPrima(nim: string): void {
    const duaDigitTerakhir = parseInt(nim.slice(-2));
    const batasAkhir = duaDigitTerakhir + 10;

    console.log("SOAL 3 : BILANGAN PRIMA")
    console.log("NIM : ", NIM)
    console.log("Dua Digit Terakhir : ", duaDigitTerakhir);
    console.log("Batas Akhir : ", batasAkhir);
    console.log("-".repeat(50));

    const bilanganPrima : number[] = [];
    for (let i = 1; i <= batasAkhir; i++) {
        if (cekPrima(i)) {
            bilanganPrima.push(i);
        }
    }
    console.log(bilanganPrima.join(", "))
}