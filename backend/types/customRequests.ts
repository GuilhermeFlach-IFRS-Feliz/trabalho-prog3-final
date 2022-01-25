import { Request } from "express";


export interface UserCreationRequest extends Request {
    body : {
        username : string,
        email : string,
        password : string

    }
}