import { Response, Request } from "express";
import { RESPONSE_STATUS } from "../../utils/utils";
import { UpdateUserUseCase } from "../use-cases/update-user.use-case";

export class UpdateUserController {
    private updateUserUseCase: UpdateUserUseCase
    constructor(updateUserUseCase: UpdateUserUseCase){
        this.updateUserUseCase = updateUserUseCase
    }
    async run(req: Request, res: Response){
        try{
            const id = req.params.id
            const body = req.body
            const response = await this.updateUserUseCase.run(id, body)
            res.status(RESPONSE_STATUS.SUCCESS).json({response})
        }catch(error: any){
            const message = this._buildErrorResponse(error.codeName)
            res.status(RESPONSE_STATUS.ERROR).json({message: message})
        }
    }

    _buildErrorResponse(codeName: string){
        let errorMessage = 'Intente más tarde';
        if(codeName==='DuplicateKey'){
            errorMessage = 'Ya existe una persona con ese email'
        }
        return errorMessage
    }
}