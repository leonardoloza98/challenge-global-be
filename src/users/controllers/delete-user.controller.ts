import { Response, Request } from "express";
import { RESPONSE_STATUS } from "../../utils/utils";
import { DeleteUserUseCase } from "../use-cases/delete-user.use-case";

export class DeleteUserController {
    private deleteUserUseCase: DeleteUserUseCase
    constructor(deleteUserUseCase: DeleteUserUseCase){
        this.deleteUserUseCase = deleteUserUseCase
    }
    async run(req: Request, res: Response){
        try{
            const id = req.params.id
            const response = await this.deleteUserUseCase.run(id)
            res.status(RESPONSE_STATUS.SUCCESS).json({response})
        }catch(error: any){
            res.status(RESPONSE_STATUS.ERROR).json({message: error.message})
        }
    }
}