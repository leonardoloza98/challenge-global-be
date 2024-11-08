import { IUserUpdateBody } from "../models/userBody";
import IUserService from "../models/userService";

export class UpdateUserUseCase {
    private userService: IUserService;
    constructor(userService: IUserService){
        this.userService = userService
    }
    async run(id: string, body: IUserUpdateBody){
        return this.userService.update(id, body)
    }
}