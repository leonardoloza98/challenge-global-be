import IProfileService from "../models/profileService";

export class GetAllProfileUseCase {
    private profileService: IProfileService;
    constructor(profileService: IProfileService){
        this.profileService = profileService
    }
    async run(){
        return this.profileService.getAll()
    }
}