"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productController_1 = require("../controllers/productController");
var authMiddleware_1 = require("../middlewares/authMiddleware");
var router = express_1.default.Router();
router.post('/', authMiddleware_1.authenticateJWT, productController_1.createProduct);
router.get('/', productController_1.getProducts);
router.put('/:id', authMiddleware_1.authenticateJWT, productController_1.updateProduct);
router.delete('/:id', authMiddleware_1.authenticateJWT, productController_1.deleteProduct);
exports.default = router;
