const express = require(`express`);
const mongoose = require(`mongoose`);

const handlebars = require(`express-handlebars`);
const path = require(`path`);

const routes = require(`./routes`);
const configHandlebars = require(`./config/configHandlebars`);
const configExpress = require(`./config/configExpress`);
const { log } = require("console");


const app = express();
const port = 5000;

configHandlebars(app);
configExpress(app);

app.use(routes);

mongoose.connect(`mongodb://127.0.0.1:27017/movies`) 
.then(() => {
    console.log(`DB Connected`)

})
.catch(err => console.log(`Can not connect to DB`));

app.listen(port, () => console.log(`Server is listening on Port ${port}`));
mongoose.connection.on(`error`, (err) => console.error(err));