import mongoose from "mongoose";
import User from "../models/UserDB.js";
export default async function deleteDB(req , res , next) {
const  id  = req.params.id;
await  User.findByIdAndRemove(id , (err) => {
    err ? console.error(err): console.log("success")
}).exec()
next()

}
