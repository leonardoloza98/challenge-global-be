import { IUserCreateBody, IUserUpdateBody } from "./models/userBody";
import User, { IUser } from "./models/userModel";
import IUserService from "./models/userService";

export default class UserService implements IUserService{
    private userModel: typeof User;
    constructor(userModel: typeof User) {
        this.userModel = userModel;
    }
    async create(data: IUserCreateBody): Promise<IUser>{
        return this.userModel.create(data)
    }
    async update(id: string, data: IUserUpdateBody): Promise<IUser|null>{
        return this.userModel.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id: string): Promise<void | null>{
        return this.userModel.findByIdAndUpdate(id, { deletedAt: new Date() });
    }
    async getAll(search?: string): Promise<IUser[]>{
        return this.userModel.find({ deletedAt: { $exists: false }, name: {$regex: search ?? '', $options: 'i'} });
    }
    async getById(id:string): Promise<IUser|null>{
        return this.userModel.findById(id)
    }
}