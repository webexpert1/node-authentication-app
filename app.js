const express = require('express');
const path = require('path');

const expressLayouts = require('express-ejs-layouts');

const app = express();

// View engine setup
 app.set('view engine', 'ejs');

// setup express layouts 
app.use(expressLayouts);
app.set('layout', 'layouts');

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));