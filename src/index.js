const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const db = require('./config/db');

//connect db
db.connect();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Template Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');

// End Template

//Set Views
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routing
route(app);
//end Routing

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
