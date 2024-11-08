import { CreateUserUseCase } from "../create-user.use-case";

// Mock para IUserService
const mockUserService = {
    create: jest.fn(),
    update: jest.fn(),
    getAll: jest.fn(),
    getById: jest.fn(),
    delete: jest.fn(),
};

describe('CreateUserUseCase', () => {
    it('should create a new user', async () => {
        const createUserUseCase = new CreateUserUseCase(mockUserService);
        const mockUser = { name: 'Leo', email: 'leo@gmail.com', age: 30, profile: 'developer' };
        const expectedUser = { name: 'Leo', email: 'leo@gmail.com', age: 30, profile: 'developer' };

        mockUserService.create.mockResolvedValue(expectedUser);
        const result = await createUserUseCase.run(mockUser);

        expect(result).toEqual(mockUser);
    });
    it('should doesnt create a new user', async () => {
        const createUserUseCase = new CreateUserUseCase(mockUserService);
        const mockUser = { name: 'Leo', email: 'leo@gmail.com', age: 30, profile: 'developer' };
        const expectedUser = { name: 'Leo', email: 'leo@gmail2.com', age: 30, profile: 'developer' };

        mockUserService.create.mockResolvedValue(expectedUser);
        const result = await createUserUseCase.run(mockUser);

        expect(result).not.toBe(mockUser);
    });
    it('service should be called with mockUser', async () => {
        const createUserUseCase = new CreateUserUseCase(mockUserService);
        const mockUser = { name: 'Leo', email: 'leo@gmail.com', age: 30, profile: 'developer' };
        const expectedUser = { name: 'Leo', email: 'leo@gmail2.com', age: 30, profile: 'developer' };

        mockUserService.create.mockResolvedValue(expectedUser);
        await createUserUseCase.run(mockUser);

        expect(mockUserService.create).toHaveBeenCalledWith(mockUser);
    });
});