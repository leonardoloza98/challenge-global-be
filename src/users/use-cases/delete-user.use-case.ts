import IUserService from "../models/userService";

export class DeleteUserUseCase {
    private userService: IUserService;
    constructor(userService: IUserService){
        this.userService = userService
    }
    async run(id: string){
        return this.userService.delete(id)
    }
}