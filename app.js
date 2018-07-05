const PORT = 4000;
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const companiesRouter = require('./routes/companies/companiesRoute');
const commentsRouter = require('./routes/commentsRouter');

require('./configs/db.config')


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json())
app.use(express.urlencoded({extended : false}))

hbs.registerPartials(path.join(__dirname, 'views/partials'))


app.use('/companies', companiesRouter)
app.use('/comments', commentsRouter)

//app.use('/', (req, res, next) => res.redirect('/companies'))

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);  
});
