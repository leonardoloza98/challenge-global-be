export interface IUserCreateBody{
    name: string;
    email: string;
    age: string;
    profileId: string;
}

export interface IUserUpdateBody{
    name?: string;
    email?: string;
    age?: string;
    profileId?: string;
}