// import { Category } from "./category";
import { UserId } from "./user-id";

export interface Product {
    _id: string;
    make: string;
    category: string;
    _ownerId: string;
    // {
    //     items: string[],
    //     _id: string,
    //     name: string,
    //     username: string,
    //     email: string,
    //     img: string,
    //     country: string,
    //     password: string,
    //     created_at: string,
    //     updatedAt: string,
    //     __v: number,
    // };
    price: number;
    description: string;
    img: string;
    model: string;
    material: string;
    created_at: string;
    updatedAt: string;
    __v: number
}






