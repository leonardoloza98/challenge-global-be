import { IUser } from '../models/userModel';
import { IUserCreateBody } from './userBody';

export default interface IUserService {
    create(data: IUserCreateBody): Promise<IUser>;
    update(id: string, data: any): Promise<IUser | null>;
    delete(id: string): Promise<void | null>;
    getAll(search?: string): Promise<IUser[]>;
    getById(id: string): Promise<IUser | null>;
}