import userModel from "../models/userModel.js";

class userController {
    static userRegistration = async (req, res) => {
        try {
            const { firstname, lastname, email, password } = req.body
            console.log(req.body);
            const data = new userModel({firstname,lastname,email,password});
            await data.save();
            res.status(201).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    static userData = async (req, res) => {
        try {
            const data = await userModel.find();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default userController;

