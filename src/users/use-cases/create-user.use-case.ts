import { IUserCreateBody } from "../models/userBody";
import IUserService from "../models/userService";

export class CreateUserUseCase {
    private userService: IUserService;
    constructor(userService: IUserService){
        this.userService = userService
    }
    async run(body: IUserCreateBody){
        return this.userService.create(body)
    }
}