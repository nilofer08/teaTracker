const express = require('express');
const router = express.Router();
const Entry = require('../models/entries'); // Your Mongoose model

router.post('/', async (req, res) => {
    try {
        const { total, snack, snackType, time, date } = req.body;

        const newEntry = new Entry({
            total,
            snack,
            snackType,
            time,
            date: new Date(date)
        });

        await newEntry.save();
        res.status(201).json({ success: true, message: 'Added Successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const entries = await Entry.find().sort({ date: -1 });
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Entry.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
