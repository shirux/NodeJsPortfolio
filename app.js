const express = require('express')
const bodyParser = require('body-parser')
const data = require('./data.json')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use('/static', express.static('public'))

app.set('view engine', 'pug')

const mainRoutes = require('./routes')
const aboutRoutes = require('./routes/about')
const projectRoutes = require('./routes/projects')

app.use(mainRoutes)
app.use('/about', aboutRoutes)
app.use('/project', projectRoutes)

app.use((req, res, next) => {
    const err = new Error('Not Found!');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(3000)