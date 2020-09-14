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
    res.render('index');
})

app.get('/about', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'about.html')); = было
    res.render('about');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));