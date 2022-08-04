import userModel from "../models/userModel.js";

const create = async (req, res) => {
    try {
        console.log(req.body);
        const data = await userModel.create(req.body)
        res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export default create;