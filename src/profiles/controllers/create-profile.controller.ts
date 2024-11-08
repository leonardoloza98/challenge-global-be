import { Response, Request } from "express";
import { RESPONSE_STATUS } from "../../utils/utils";
import { CreateProfileUseCase } from "../use-cases/create-profile.use-case";

export class CreateProfileController {
    private createProfileUseCase: CreateProfileUseCase
    constructor(createProfileUseCase: CreateProfileUseCase){
        this.createProfileUseCase = createProfileUseCase
    }
    async run(req: Request, res: Response){
        try{
            const body = req.body
            const response = await this.createProfileUseCase.run(body)
            res.status(RESPONSE_STATUS.SUCCESS).json({response})
        }catch(error: any){
            res.status(RESPONSE_STATUS.ERROR).json({message: error.message})
        }
    }
}