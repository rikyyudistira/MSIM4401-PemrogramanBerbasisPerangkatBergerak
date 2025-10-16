// Activity 2: Membuat Promise
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
function getAngkaAcak(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function lebihDari(max, angka) {
    if (angka > max) {
        throw "ERR: arg 1 harus lebih besar daripada arg 2";
    }
    var acak = getAngkaAcak(max);
    if (acak > angka) {
        return true;
    }
    else {
        return acak;
    }
}
var p = function () {
    return __awaiter(this, void 0, void 0, function () {
        var hasilOK, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, lebihDari(100, 500)];
                case 1:
                    hasilOK = _a.sent();
                    // let hasilOK: boolean | number = await lebihDari(1000, 500); // <5>
                    return [2 /*return*/, hasilOK];
                case 2:
                    error_1 = _a.sent();
                    // <6>
                    return [2 /*return*/, error_1];
                case 3: return [2 /*return*/];
            }
        });
    });
};
(function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                // <7>
                _b = (_a = console).log;
                return [4 /*yield*/, p()];
            case 1:
                // <7>
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); })();
// jika <4> di uncomment, maka hasil:
// ERR: arg 1 harus lebih besar daripada arg 2
// jika menggunakan <5>, maka hasil kemungkinan:
// true
// 134 (atau angka lain
