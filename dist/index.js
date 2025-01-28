"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuration the .env file
dotenv_1.default.config();
//Create Express App
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    //In principle a Hello World
    res.send("Hola Bruno estoy ejecuntando un servidor local");
});
app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map