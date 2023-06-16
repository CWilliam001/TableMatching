const express = require('express');
const router = express.Router();
const cors = require('cors');
const pool = require('../db');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const getTableMatching = async (val, res) => {
    try {
        // Query
        const refund_form = await pool.query('SELECT * FROM refund_form');
        const bsp_statement = await pool.query('SELECT * FROM bsp_statement');

        
        // No value input
        if(val == "") {
            return res.json({
                refund_form: refund_form.rows,
                bsp_statement: bsp_statement.rows,
            });
        }

        console.log(val);

        // Search bsp_matching using value
        const bsp_matching = await pool.query('SELECT * FROM bsp_statement WHERE bsp_documentno = $1', [val])

        console.log(bsp_matching.rows);
        return res.json({
            refund_form: refund_form.rows,
            bsp_statement: bsp_statement.rows,
            bsp_matching: bsp_matching.rows,
        });
    } catch (e) {
		console.error(e.message);
    }
};

router.get('/', async (req, res) => {
    try {
        return getTableMatching('', res);
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
});

router.post('/search', async (req, res) => {
    const { keyword } = req.body;
    console.log(keyword);
    try {
        return getTableMatching(keyword, res);
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
});

module.exports = router;