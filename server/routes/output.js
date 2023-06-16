const express = require('express');
const router = express.Router();
const cors = require('cors');


router.get('/', async (req, res) => {
    try {
        res.json("Normal");
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
});

module.exports = router;