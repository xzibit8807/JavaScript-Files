export interface User {
    themes: string[],
    posts: string[],
    _id: string,
    email: string,
    password: string,
    created_at: string,
    updatedAt: string,
    __v: number,
};
export interface UserForAuth {

    email: string,
    password: string,
    id: string,
}