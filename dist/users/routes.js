"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_1 = __importDefault(require("./service"));
const userModel_1 = __importDefault(require("./models/userModel"));
const create_user_controller_1 = require("./controllers/create-user.controller");
const create_user_use_case_1 = require("./use-cases/create-user.use-case");
const update_user_use_case_1 = require("./use-cases/update-user.use-case");
const get_user_use_case_1 = require("./use-cases/get-user.use-case");
const get_all_user_use_case_1 = require("./use-cases/get-all-user.use-case");
const update_user_controller_1 = require("./controllers/update-user.controller");
const get_user_controller_1 = require("./controllers/get-user.controller");
const get_all_user_controller_1 = require("./controllers/get-all-user.controller");
const delete_user_use_case_1 = require("./use-cases/delete-user.use-case");
const delete_user_controller_1 = require("./controllers/delete-user.controller");
const userRoutes = (0, express_1.Router)();
const userService = new service_1.default(userModel_1.default);
//Use cases
const createUserUseCase = new create_user_use_case_1.CreateUserUseCase(userService);
const updateUserUseCase = new update_user_use_case_1.UpdateUserUseCase(userService);
const getUserUseCase = new get_user_use_case_1.GetUserUseCase(userService);
const getAllUserUseCase = new get_all_user_use_case_1.GetAllUserUseCase(userService);
const deleteUserUseCase = new delete_user_use_case_1.DeleteUserUseCase(userService);
//Controllers
const createUserController = new create_user_controller_1.CreateUserController(createUserUseCase);
const updateUserController = new update_user_controller_1.UpdateUserController(updateUserUseCase);
const getUserController = new get_user_controller_1.GetUserController(getUserUseCase);
const getAllUserController = new get_all_user_controller_1.GetAllUserController(getAllUserUseCase);
const deleteUserController = new delete_user_controller_1.DeleteUserController(deleteUserUseCase);
//Routes
userRoutes.get('/:id', (req, res) => getUserController.run(req, res));
userRoutes.get('/', (req, res) => getAllUserController.run(req, res));
userRoutes.put('/:id', (req, res) => updateUserController.run(req, res));
userRoutes.post('/', (req, res) => createUserController.run(req, res));
userRoutes.delete('/:id', (req, res) => deleteUserController.run(req, res));
exports.default = userRoutes;
