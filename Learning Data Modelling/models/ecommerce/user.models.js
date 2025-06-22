import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        password: {
            type: String,
            required: true,
            unique: true
        }

        
    } , {timestamps: true}
);                // timestamps give two fields 1) createdAt and 2) updatedAt

export const User = mongoose.model("User" , userSchema);