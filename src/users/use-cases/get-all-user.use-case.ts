import IUserService from "../models/userService";

export class GetAllUserUseCase {
    private userService: IUserService;
    constructor(userService: IUserService){
        this.userService = userService
    }
    async run(search?: string){
        return this.userService.getAll(search)
    }
}