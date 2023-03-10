import { NextFunction, Request, Response } from "express";
import {verify} from "jsonwebtoken"
import { IUserRequest } from "../interfaces/requests.interface";

interface IPayload{
    id : number;
    iat : number;
    exp : number;
}

export async function AuthTokenCheck(req : IUserRequest,res: Response,next : NextFunction){
    try{
        const token = req.headers.authorization.split(" ")[1]
        verify(token,process.env.SECRET_KEY,(err,decoded : IPayload)=>{
            if(!err){
                req.user_id = (decoded.id as unknown) as string
                return next()
            }
            return res.status(401).json({message : "Token not valid"})
        })
    }
    catch(err){
        if(err instanceof TypeError){
            const message = {message : "Only Bearer token is accepted"}
            return res.status(400).json({message})
        }
        const message = {message : "Internal server error"}
        return res.status(500).json(message)
    }
}