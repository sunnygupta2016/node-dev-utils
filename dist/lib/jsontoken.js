"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtWebToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JwtWebToken = /** @class */ (function () {
    function JwtWebToken(secretKey) {
        this.secretKey = secretKey;
    }
    JwtWebToken.prototype.sign = function (payload, expiresIn) {
        return jsonwebtoken_1.default.sign(payload, this.secretKey, { expiresIn: expiresIn });
    };
    JwtWebToken.prototype.verify = function (token) {
        try {
            var decoded = jsonwebtoken_1.default.verify(token, this.secretKey);
            return decoded;
        }
        catch (err) {
            return 'Invalid token';
        }
    };
    return JwtWebToken;
}());
exports.JwtWebToken = JwtWebToken;
