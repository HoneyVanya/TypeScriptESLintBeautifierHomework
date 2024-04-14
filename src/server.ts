import * as http from "http";
import { reverseArray } from "./reverseArray.js";

const port: number = 3000;

const server: http.Server = http.createServer(function (req: http.IncomingMessage, res: http.ServerResponse) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to TypeScript, ESLint, and Beautifier Homework!");
});

server.listen(port, () => {
    console.log("Server is listening", port);
});

interface IProduct {
    id: number;
    name: string;
    price: number;
}

class Product implements IProduct {
    id: number;
    name: string;
    price: number;

    constructor(a: number, b: string, c: number) {
        this.id = a;
        this.name = b;
        this.price = c;
    }

    displayProductDetails() {
        console.log(
            "id: " + this.id,
            "name: " + this.name,
            "price: " + this.price
        );
    }

    ArrayOfClass() {
        return [this.id, this.name, this.price];
    }
}

const Producd = new Product(12345, "Kolbasa", 54);

Producd.displayProductDetails();

const Prod = new Product(7777, "JoJo", 999);

console.log(reverseArray(Prod.ArrayOfClass()));

console.log(Producd);
