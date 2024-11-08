import { Response, Request } from "express";
import { RESPONSE_STATUS } from "../../utils/utils";
import { GetAllProfileUseCase } from "../use-cases/get-all-profile.use-case";

export class GetAllProfileController {
    private getAllProfileUseCase: GetAllProfileUseCase
    constructor(getAllProfileUseCase: GetAllProfileUseCase){
        this.getAllProfileUseCase = getAllProfileUseCase
    }
    async run(req: Request, res: Response){
        try{
            const response = await this.getAllProfileUseCase.run()
            res.status(RESPONSE_STATUS.SUCCESS).json({response})
        }catch(error: any){
            res.status(RESPONSE_STATUS.ERROR).json({message: error.message})
        }
    }
}