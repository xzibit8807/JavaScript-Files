global.__basedir = __dirname;
require('dotenv').config()
const dbConnector = require('./config/db');
const mongoose = require('mongoose');
const authMiddleware = require('./utils/auth');
const bodyParser = require('body-parser');

const apiRouter = require('./router/index');
const cors = require('cors');
// const config = require('./config/config');
const { errorHandler } = require('./utils');

dbConnector()
  .then(() => {
    const config = require('./config/config');

    const app = require('express')();
    require('./config/express')(app);

    app.use(cors({
      origin: config.origin,
      credentials: true
    }));

    console.log(`DataBase is up and running.\n => This is the way.`)
  
    app.use('/api', apiRouter);

    app.use(authMiddleware);

    app.use(bodyParser.json());

    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send({ message: 'Something went wrong!' });
    });

    app.use(errorHandler);

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
  })
  .catch(console.error);


mongoose.connection.on(`error`, (err) => console.log(err));
mongoose.connection.on(`disconnected`, () => console.log(`DataBase is disconnected.`));
