const fs = require(`fs`);
const multer = require(`multer`);
const express = require(`express`);
const mongoose = require(`mongoose`);

let MongoClient = require(`mongodb`).MongoClient;
const excelToJson = require(`convert-excel-to-json`)

const app = express();
const port = 3000;

const routes = require(`./routes`);
const configHandlebars = require(`./config/configHandlebars`);
const configExpress = require(`./config/configExpress`);

configHandlebars(app);
configExpress(app);

app.use(routes);

let url = `mongodb://127.0.0.1:27017/`;

// mongoose.connect(`mongodb://127.0.0.1:27017/DataAnalysisProject`)
//     .then(() => {
//         console.log(`DataBase is up and running.\n => This is the way.`)

//     })
//     .catch(err => {
//         console.error(`Faller connecting to database:`, err.message);
//         process.exit(1);
//     })

globalThis._basedir = dirname;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, _basedir + `/uploads/`)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + `.` + Date.now() + `.` + file.originalname)
    }
});

const upload = multer({ storage: storage });

app.post(`/api/uploadfile`, upload.single(`uploadfile`), (req, res) => {
    importExcelData2MongoDB(_basedir + `/uploads/` + req.file.filename)
});

res.json({
    msg: `File Upload Successfully !`,
    file: req.file,
})

function importExcelData2MongoDB(filePath) {
    const excelData = excelToJson({
        sourceFile: filePath,
        sheets: [{
            name: `Customers`,
            header: {
                rows: 1,
            },
            columToKey: {
                A: `_id`,
                B: `name`,
                C: `address`,
                D: `age`
            }
        }]
    })
    console.log(excelData);

    MongoClient.connect(url, {useNewUrlParser: true}, (err, db) =>{
        if(err) throw err;
        let dbo = db.db(`DataAnalysisProject`);
        dbo.collection(`customers`).insertMany(excelData.Customers, (err, res) =>{
            if(err) throw err;
            console.log(`Number of documents inserted: ` + res.insertedCount);

            db.close()
        });
    });

    fs.unlinkSync(filePath); 
}