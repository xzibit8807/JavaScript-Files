const express = require('express');
const router = express.Router();
const Comment = require('../models/commentModel');

router.post('/', async (req, res) => {
    const { email, comment } = req.body;

    if (!email || !comment) {
        return res.status(400).send({ message: 'Email and comment are required' });
    }

    try {
        const newComment = new Comment({ email, comment });
        await newComment.save();
        res.status(201).send(newComment);
    } catch (error) {
        res.status(500).send({ message: 'Error saving comment', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 });
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching comments', error });
    }
});


module.exports = router;