// import { Category } from "./category";
import { UserId } from "./user-id";

export interface Product {
    _id: string;
    make: string;
    _ownerId: UserId;
    price: number;
    description: string;
    // tags?: string[];
    img: string;
    // stars: number;
    model: string;
    material: string;
    created_at: string;
    updatedAt: string;
    __v: number
}