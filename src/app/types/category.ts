export interface UserId {
    "themes": string[],
    "posts": string[],
    "_id": string,
    "tel": string,
    "photoUrl": string,
    "email": string,
    "username": string,
    "password": string,
    "created_at": string,
    "updatedAt": string,
    "__v": number,
}

export interface Category {

    "subscribers": string[],
    "posts": string[],
    "_id": string,
    "themeName": string,
    "userId": UserId,
    "created_at": string,
    "updatedAt": string,
    "__v": number,

}