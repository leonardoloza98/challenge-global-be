export interface IUserCreateBody{
    name: string;
    email: string;
    age: string;
}

export interface IUserUpdateBody{
    name?: string;
    email?: string;
    age?: string;
}