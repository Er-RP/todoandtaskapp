import { Schema, Model, model, models } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from '@/types/user';

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Email required"],
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    }
},
    { timestamps: true }
)

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

UserSchema.methods.isValidPassword = async function (password: string) {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
}

export const User: Model<IUser> = models.User || model<IUser>('User', UserSchema);