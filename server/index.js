const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes

// Display routes
app.use("/display", require("./routes/display"));

// Output routes
app.use("/output", require("./routes/output"));

app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
});
