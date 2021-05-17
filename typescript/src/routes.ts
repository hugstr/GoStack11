import { Request, Response } from "express-serve-static-core";

export function helloWorld(request: Request, response: Response) {
    return response.json({ message: "Hello World" });
}