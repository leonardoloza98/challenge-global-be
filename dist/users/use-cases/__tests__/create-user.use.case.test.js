"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_user_use_case_1 = require("../create-user.use-case");
// Mock para IUserService
const mockUserService = {
    create: jest.fn(),
    update: jest.fn(),
    getAll: jest.fn(),
    getById: jest.fn(),
    delete: jest.fn(),
};
describe('CreateUserUseCase', () => {
    it('should create a new user', () => __awaiter(void 0, void 0, void 0, function* () {
        const createUserUseCase = new create_user_use_case_1.CreateUserUseCase(mockUserService);
        const mockUser = { name: 'Leo', email: 'leo@gmail.com', age: '30', profileId: 'developer' };
        const expectedUser = { name: 'Leo', email: 'leo@gmail.com', age: '30', profileId: 'developer' };
        mockUserService.create.mockResolvedValue(expectedUser);
        const result = yield createUserUseCase.run(mockUser);
        expect(result).toEqual(mockUser);
    }));
    it('should doesnt create a new user', () => __awaiter(void 0, void 0, void 0, function* () {
        const createUserUseCase = new create_user_use_case_1.CreateUserUseCase(mockUserService);
        const mockUser = { name: 'Leo', email: 'leo@gmail.com', age: '30', profileId: 'developer' };
        const expectedUser = { name: 'Leo', email: 'leo@gmail2.com', age: '30', profileId: 'developer' };
        mockUserService.create.mockResolvedValue(expectedUser);
        const result = yield createUserUseCase.run(mockUser);
        expect(result).not.toBe(mockUser);
    }));
    it('service should be called with mockUser', () => __awaiter(void 0, void 0, void 0, function* () {
        const createUserUseCase = new create_user_use_case_1.CreateUserUseCase(mockUserService);
        const mockUser = { name: 'Leo', email: 'leo@gmail.com', age: '30', profileId: 'developer' };
        const expectedUser = { name: 'Leo', email: 'leo@gmail2.com', age: '30', profileId: 'developer' };
        mockUserService.create.mockResolvedValue(expectedUser);
        yield createUserUseCase.run(mockUser);
        expect(mockUserService.create).toHaveBeenCalledWith(mockUser);
    }));
});
