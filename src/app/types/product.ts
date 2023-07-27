import { Category } from "./category";
import { UserId } from "./user-id";

export interface Product {
    _id: string;
    text: string;
    userId: UserId;
    price: number;
    tags?: string[];
    imgUrl: string;
    stars: number;
    themeId: Category;
    created_at: string;
    updatedAt: string;
    __v: number
}