require('dotenv').config();
require('./configs/db.config'); //It should be exectuded after express requirement?

const express = require('express');
const app = express();
const logger = require('morgan');



app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

const routes = require(`${__dirname}/configs/routes.config`)
app.use(routes);
app.use(logger('dev'));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Application running at port ${port}`));