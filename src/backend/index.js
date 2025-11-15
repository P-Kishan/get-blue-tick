const express = require('express');
const cors = require('cors');
const dbConnection = require('./dbConnection');
const route = require('./Routes/loginRoute');

const app = express();
app.use(express.json());
app.use(cors());

// Connect DB
dbConnection();

// Routes
app.use('/', route);

// Start Server
app.listen(process.env.PORT);
