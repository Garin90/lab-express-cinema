require('dotenv').config();
require('./configs/db.config'); //It should be exectuded after express requirement?

const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));



app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));
const routes = require(`${__dirname}/configs/routes.config`);
app.use(routes);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Application running at port ${port}`));