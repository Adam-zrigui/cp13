import User from "../models/UserDB.js"
export default async function PutUserDB(req, res) {
  try{
    const updateUser = await User.findOneAndUpdate(
        {_id: req.params.id},
        {$set: req.body}
    );
    if(!updateUser){
        res.status(404).send("not found");
    }
    res.status(201).send(updateUser);

}catch(error){
    res.status(500).send(error);
}
}