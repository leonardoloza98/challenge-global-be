import { IProfileCreateBody } from "../models/profile";
import IProfileService from "../models/profileService";

export class CreateProfileUseCase {
    private profileService: IProfileService;
    constructor(profileService: IProfileService){
        this.profileService = profileService
    }
    async run(body: IProfileCreateBody){
        return this.profileService.create(body)
    }
}