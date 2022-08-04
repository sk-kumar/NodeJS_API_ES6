import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: { type: String, trim: true, required: true },
    lastname: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true }
});

const userModel = mongoose.model('user', userSchema, 'users');
export default userModel;