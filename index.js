const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// EJS setup
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Routes
const homeRoutes = require('./routes/home');
app.use('/', homeRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
