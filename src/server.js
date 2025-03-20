"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var productRoutes_1 = __importDefault(require("./routes/productRoutes"));
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/products', productRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
var PORT = process.env.PORT || 5000;
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(function () {
    console.log('MongoDB Connected');
    app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
})
    .catch(function (err) { return console.error(err); });
