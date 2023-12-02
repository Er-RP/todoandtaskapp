import { Types } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    role?: 'user' | 'admin';
    isValidPassword: (password: string) => Promise<boolean>;
}

export interface ITask extends Document {
    title: string;
    description?: string;
    dueDate?: Date;
    project?: string;
    component?: string;
    user?: Types.ObjectId;
    priority?: 'Low' | 'Medium' | 'High';
    labels?: string[];
    sharedWith?: Types.ObjectId[];
    notes?: Types.ObjectId[];
}

export interface INote extends Document {
    content: string; // Assuming content is rich text (HTML)
    task?: Types.ObjectId;
    user?: Types.ObjectId;
    sharedWith?: Types.ObjectId[];
}

export interface InputLoginUser {
    email: string;
    password: string;
}

export interface InputCreateUser extends InputLoginUser{
    username: string;
    role?: 'user' | 'admin';
}

export interface InputUpdateUser extends InputCreateUser {
    id : string
}