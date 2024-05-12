const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));