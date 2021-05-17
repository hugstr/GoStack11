import { Request, Response } from "express-serve-static-core";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'strh93@gmail.com',
        password: '123456',
        techs: { title: 'js', experience: 100},
    });
}

