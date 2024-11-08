import IUserService from "../models/userService";

export class UpdateUserUseCase {
    private userService: IUserService;
    constructor(userService: IUserService){
        this.userService = userService
    }
    async run(id: string, body: any){
        return this.userService.update(id, body)
    }
}