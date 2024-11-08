import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    age: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

const UserSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        age: {
            type: Number,
            required: true,
        },
        deletedAt: {
            type: Date,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<IUser>('User', UserSchema);
export default User;