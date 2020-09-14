const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs', // hbs = handlebars
});

app.engine('hbs', hbs.engine); // объявили движок handlebars
app.set('view engine', 'hbs');
app.set('views', 'views'); // второй параметр это папка с страницами html

app.use(express.static('public'));


app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'index.html')); = было
    res.render('index', {
        title: 'Главная страница',
        isHome: true,
    });
})

app.get('/add', (req, res) => {
    res.render('add', {
        title: 'Добавить курс',
        isAdd: true,
    });
});

app.get('/courses', (req, res) => {
    res.render('courses', {
        title: 'Курсы',
        isCourses: true,
    });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));