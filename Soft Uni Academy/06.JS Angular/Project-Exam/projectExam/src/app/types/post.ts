import { User } from "./user";
import { Catalog } from "./catalog";

export interface Post{
    
        "likes": string,
        "_id": string,
        "text": string,
        "userId": User,
        "catalogId": Catalog,
        "created_at": string,
        "updatedAt": string,
        "__v": number,
    
}