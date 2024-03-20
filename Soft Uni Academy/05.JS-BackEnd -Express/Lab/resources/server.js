const http = require(`http`);
const fs = require(`fs`);

//const homeTemplate = require(`./js-views/home.html`)
//const siteCss = require(`./js-views/site.css`);
//const addCatTemplate = require(`./js-views/addCat.html`)

const cats = [
    {
        name: `Tommy`,
        imageUrl: `https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg`,
        description: `Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.`,
    }
];

const views = {
    home: './views/home/index.html',
    css: `./js-views/site.css`,
    addCat: `./js-views/addCat.html`,
    cat: './views/partials/cat.html',
};

const logger = require(`./logger`);
const messageBroker = require(`./messageBroker`)
require(`./logger`)

const reportingServer = require(`./reportingService`);
const { log } = require("console");


const server = http.createServer((req, res) => {
    messageBroker.publish(`request`, `URL: ${req.url}; METHOD: ${req.method}`)

    console.log(`This is my server `);
    if (req.url === `/`) {
        render(views.home, {})
        fs.readFile(views.home, 'utf-8', (err, catResult) => {
            if (err) {
                res.statusCode = 404;
                return res.end()
            }
            render(views.home, { cats: catResult }, (err, result) => {
                res.writeHead(200, {
                    'content-type': 'text/html',
                });
                res.write(result);
                res.end();
            });
        })



    } else if (req.url === '/styles/site.css') {
        fs.readFile(views.css, 'utf-8', (err, result) => {
            if (err) {
                res.statusCode = 404;
                return res.end()
            }
            res.writeHead(200, {
                'content-type': 'text/html',
            })
            res.write(result);
            res.end();
        })

    } else if (req.url === `/cats/add-cat`) {
        fs.readFile(views.addCat, 'utf-8', (err, result) => {
            if (err) {
                res.statusCode = 404;
                return res.end()
            }
            res.writeHead(200, {
                'content-type': 'text/html',
            });
            res.write(result);
            res.end();
        })

    } else {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('<h1>404 Page not found !</h1>');
        res.end();
    }


    res.end();

});

function render(view, data, callback) {
    fs.readFile(view, 'utf-8', (err, result) => {
        if (err) {
            return callback(err);
        }

        const htmlResult = Object.keys(data).reduce((acc, key) => {
            const pattern = new RegExp(`{{${key}}}`, 'g');
            return acc.replace(pattern, data[key]);
        }, result);

        return callback(null, htmlResult);
    })
}

server.listen(5000);

console.log(`Server listening on port 5000`);

