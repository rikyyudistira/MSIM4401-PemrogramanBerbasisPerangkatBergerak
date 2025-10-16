"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var CrudController_1 = require("../CrudController");
var users_json_1 = __importDefault(require("../../resources/users.json"));
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserController.prototype.create = function (req, res) {
        throw new Error("Belum diimplementasikan");
    };
    UserController.prototype.read = function (req, res) {
        res.json(users_json_1.default);
    };
    UserController.prototype.update = function (req, res) {
        throw new Error("Belum diimplementasikan");
    };
    UserController.prototype.delete = function (req, res) {
        throw new Error("Belum diimplementasikan");
    };
    return UserController;
}(CrudController_1.CrudController));
exports.UserController = UserController;
