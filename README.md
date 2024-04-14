# TypeScriptESLintBeautifierHomework
The homework repository for further check and estimation 


## Basic Setup

### Module and Dependencies

I start by initialing this as an `npm` project.

```sh
$ npm init .
```

### TypeScript

Next, I initialized this as a TypeScript project using:

```sh
$ tsc --init .
```

I want my TypeScript generated code to be stored in `./dist` and I want declarations generated.
So, I configure `outDir` in `tsconfig.json` to be `./dist`.

I installed .eslint as project's linter and Prettier as project's beautifier and set them up to the same configurations so they wouldn't conflict with each other, configuration files are in the project and can be observed. 

### Source

To start, I created a `src/server.ts` that contains an import statement of http mpdule for further implementation:

```typescript
import * as http from "http";
```

I created a port that was assigned to 3000 and used a basic model of http server creation that responds to all requests with task assigned string and writes "server is listening" + port number in console:

```typescript
const port = 3000;

const server: http.Server = http.createServer(function (req: http.IncomingMessage, res: http.ServerResponse) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to TypeScript, ESLint, and Beautifier Homework!");
});

server.listen(port, () => {
    console.log("Server is listening", port);
});
```

In the same src file I created interface and the class with "displayProductDetails" method that displays product details in a console.log and "ArrayOfClass" method to convert the values to array of values: 

``` typescript 
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
```
In `src/reverseArray.ts` I created a generic function that reverses array of any type:

```typescript
export function reverseArray<T>(list: T[]) {
    return list.reverse();
}
``` 

In the next step to check the function capabilities I exported it and imported into `src/server.ts`: 

```typescript
import { reverseArray } from "./reverseArray.js";
```

I ran all of my .js files through the "node dist/filename.js" command in terminal to see them working 

