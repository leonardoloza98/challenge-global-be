import { Response, Request } from "express";
import { RESPONSE_STATUS } from "../../utils/utils";
import { GetUserUseCase } from "../use-cases/get-user.use-case";

export class GetUserController {
    private getUserUseCase: GetUserUseCase
    constructor(getUserUseCase: GetUserUseCase){
        this.getUserUseCase = getUserUseCase
    }
    async run(req: Request, res: Response){
        try{
            const id = req.params.id
            const response = await this.getUserUseCase.run(id)
            res.status(RESPONSE_STATUS.SUCCESS).json({response})
        }catch(error: any){
            res.status(RESPONSE_STATUS.ERROR).json({message: error.message})
        }
    }
}