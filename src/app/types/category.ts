import { UserId } from "./user-id";

export interface Category {

    subscribers: string[];
    posts: string[];
    _id: string;
    themeName: string;
    imgUrl: string;
    userId: UserId;
    created_at: string;
    updatedAt: string;
    __v: number;

}