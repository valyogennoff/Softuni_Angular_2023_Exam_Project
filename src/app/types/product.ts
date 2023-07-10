import { Category } from "./category";
import { UserId } from "./user-id";

export interface Product {
    "likes": string[],
    "_id": string,
    "text": string,
    "userId": UserId,
    "price": number,
    "imgUrl": string,
    "themeId": Category,
    "created_at": string,
    "updatedAt": string,
    "__v": number
}