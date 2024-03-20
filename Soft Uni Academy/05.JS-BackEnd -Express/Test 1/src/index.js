const express = require(`express`);
const mongoose = require(`mongoose`);

const handlebars = require(`express-handlebars`);
const path = require(`path`);

const routes = require(`./routes`);
const configHandlebars = require(`./config/configHandlebars`);
const configExpress = require(`./config/configExpress`);
const { log } = require("console");
//const { log } = require("console");


const app = express();
const port = 5000;

configHandlebars(app);
configExpress(app);

app.use(routes);

mongoose.connect(`mongodb://127.0.0.1:27017/CourseBooks`) 
.then(() => {
    console.log(`DataBase is connected.\n => This is the way.`)

})
.catch(err => {
    console.error(`Error connecting to database:`, err.message);
    process.exit(1); 
  });

mongoose.connection.on(`error`, (err) => console.log(err));
mongoose.connection.on(`disconnected`, ()=> console.log(`DataBase is disconnected.`));

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));
mongoose.connection.on(`error`, (err) => console.error(err));