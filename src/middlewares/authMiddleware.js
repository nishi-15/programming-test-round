"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var authenticateJWT = function (req, res, next) {
    var _a;
    var token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        res.status(403).json({ message: 'Access Denied' });
        return;
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, function (err, decodedUser) {
        if (err) {
            res.status(403).json({ message: 'Invalid Token' });
            return;
        }
        req.user = decodedUser;
        next();
    });
};
exports.authenticateJWT = authenticateJWT;
