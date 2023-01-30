import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
username: {
    type: String,
    required: true,
    unique: true
},
email: String,
age: Number,
}, {timestamps: true})


const User = mongoose.model("User", UserSchema);
export default User;