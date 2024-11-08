"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_profile_controller_1 = require("./controllers/create-profile.controller");
const get_all_profiles_controller_1 = require("./controllers/get-all-profiles.controller");
const service_1 = __importDefault(require("./service"));
const profileModel_1 = __importDefault(require("./models/profileModel"));
const create_profile_use_case_1 = require("./use-cases/create-profile.use-case");
const get_all_profile_use_case_1 = require("./use-cases/get-all-profile.use-case");
const profileRoutes = (0, express_1.Router)();
const profileService = new service_1.default(profileModel_1.default);
//Use cases
const createUserUseCase = new create_profile_use_case_1.CreateProfileUseCase(profileService);
const getAllUserUseCase = new get_all_profile_use_case_1.GetAllProfileUseCase(profileService);
//Controllers
const createProfileController = new create_profile_controller_1.CreateProfileController(createUserUseCase);
const getAllProfileController = new get_all_profiles_controller_1.GetAllProfileController(getAllUserUseCase);
//Routes
profileRoutes.get('/', (req, res) => getAllProfileController.run(req, res));
profileRoutes.post('/', (req, res) => createProfileController.run(req, res));
exports.default = profileRoutes;
