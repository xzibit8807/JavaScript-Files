const express = require(`express`);
const mongoose = require(`mongoose`);

// const handlebars = require(`express-handlebars`);
// const path = require(`path`);

const routes = require(`./Router/router`);
const configHandlebars = require(`./config/configHandlebars`);
const configExpress = require(`./config/configExpress`);


const app = express();
const port = 3000;

configHandlebars(app);
configExpress(app);

app.use(routes);

mongoose.connect(`mongodb://127.0.0.1:27017/Portfolio`) 
.then(() => {
    console.log(`DataBase is up and running.\n => This is the way.`)

})
.catch(err => {
    console.error(`Faller connecting to database:`, err.message);
    process.exit(1); 
  });

mongoose.connection.on(`error`, (err) => console.log(err));
mongoose.connection.on(`disconnected`, ()=> console.log(`DataBase is disconnected.`));

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));
mongoose.connection.on(`error`, (err) => console.error(err));