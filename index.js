const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs', // hbs = handlebars
});

app.engine('hbs', hbs.engine); // объявили движок handlebars
app.set('view engine', 'hbs');
app.set('views', 'views'); // второй параметр это папка с страницами в которых храним html

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}))

app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));