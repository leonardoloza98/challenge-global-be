import mongoose, { Document, Schema } from 'mongoose';

export interface IProfile extends Document {
    name: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
}

const ProfileSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        code: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Profile = mongoose.model<IProfile>('Profile', ProfileSchema);
export default Profile;