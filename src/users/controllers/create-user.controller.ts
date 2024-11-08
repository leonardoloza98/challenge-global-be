import { Response, Request } from "express";
import { RESPONSE_STATUS } from "../../utils/utils";
import { CreateUserUseCase } from "../use-cases/create-user.use-case";
import { IUserCreateBody } from "../models/userBody";

export class CreateUserController {
    private createUserUseCase: CreateUserUseCase
    constructor(createUserUseCase: CreateUserUseCase){
        this.createUserUseCase = createUserUseCase
    }
    async run(req: Request, res: Response){
        try{
            const body = req.body as IUserCreateBody
            const response = await this.createUserUseCase.run(body)
            res.status(RESPONSE_STATUS.SUCCESS).json({response})
        }catch(error: any){
            res.status(RESPONSE_STATUS.ERROR).json({message: error.message})
        }
    }
}