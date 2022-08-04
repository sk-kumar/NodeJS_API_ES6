import express from 'express';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        // res.status(201).send(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error);
        // res.status(500).send({ error: error.message });
        res.status(500).json({ error: error.message });
    }
});

export default router;
