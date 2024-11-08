import IProfileService from "./models/profileService";
import Profile from "./models/profileModel";
import { IProfile, IProfileCreateBody } from "./models/profile";

export default class ProfileService implements IProfileService{
    private userProfile: typeof Profile;
    constructor(userProfile: typeof Profile) {
        this.userProfile = userProfile;
    }
    async create(data: IProfileCreateBody): Promise<IProfile>{
        return this.userProfile.create(data)
    }
    async getAll(): Promise<IProfile[]>{
        return this.userProfile.find();
    }
}