import { IProfile } from './profile';

export default interface IProfileService {
    create(data: {}): Promise<IProfile>;
    getAll(): Promise<IProfile[]>;
}