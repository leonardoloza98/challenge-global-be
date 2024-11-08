import { Response, Request } from "express";
import { RESPONSE_STATUS } from "../../utils/utils";
import { GetAllUserUseCase } from "../use-cases/get-all-user.use-case";

export class GetAllUserController {
    private getAllUserUseCase: GetAllUserUseCase
    constructor(getAllUserUseCase: GetAllUserUseCase){
        this.getAllUserUseCase = getAllUserUseCase
    }
    async run(req: Request, res: Response){
        try{
            const search = req.query.search as string
            const response = await this.getAllUserUseCase.run(search)
            res.status(RESPONSE_STATUS.SUCCESS).json({response})
        }catch(error: any){
            res.status(RESPONSE_STATUS.ERROR).json({message: error.message})
        }
    }
}