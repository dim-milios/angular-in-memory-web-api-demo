export interface IUser {
    id: number;
    fullName: string;
    email: string;
}

export interface IPost {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    likes: number;
    shares: number;
    author: IUser;
}