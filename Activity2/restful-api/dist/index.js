"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var constants_1 = require("./config/constants");
var routes_1 = require("./routes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send('Selamat datang di RESTful API gateway');
});
app.use('/users', routes_1.userRouter);
app.listen(constants_1.PORT, function () {
    console.log("Endpoint sudah siap dan dapat diakses di port ".concat(constants_1.PORT));
});
