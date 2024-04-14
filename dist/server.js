"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const reverseArray_js_1 = require("./reverseArray.js");
const port = 3000;
const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to TypeScript, ESLint, and Beautifier Homework!");
});
server.listen(port, () => {
    console.log("Server is listening", port);
});
class Product {
    constructor(a, b, c) {
        this.id = a;
        this.name = b;
        this.price = c;
    }
    displayProductDetails() {
        console.log("id: " + this.id, "name: " + this.name, "price: " + this.price);
    }
    ArrayOfClass() {
        return [this.id, this.name, this.price];
    }
}
const Producd = new Product(12345, "Kolbasa", 54);
Producd.displayProductDetails();
const Prod = new Product(7777, "JoJo", 999);
console.log((0, reverseArray_js_1.reverseArray)(Prod.ArrayOfClass()));
console.log(Producd);
