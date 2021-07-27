var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
 
var fs = require('fs');
var path = require('path');
require('dotenv/config');
var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });
var imgModel = require('./model');

var port = process.env.PORT || '443'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
    console.log('connected')
});
var db = mongoose.connection;
const user = db.collection("userTable");
app.use(express.json())
 
// Set EJS as templating engine
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});

app.post('/signup', (req, res) => {
    const query = {username: req.body.username}
    const newUser = {username : req.body.username, password : req.body.password}
    user.findOne(query, (err, result) => {
        if(result == null) {
            user.insertOne(newUser, (err, result) => {
                res.status(200).send()
            })
        }
        else {
            res.status(400).send()
        }
    })
})

app.post('/login', (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password
    }
    console.log(newUser)
    const query = {username : newUser.username, password: newUser.password}
    user.findOne(query, (err, result) => {
        if (result == null) {
            res.status(400).send()
        } else {
            res.status(200).send()
        }
    })
})

app.post('/use', (req, res) => {
    imgModel.find({$and:[{name: req.body.name}, {click: {$elemMatch: {username: req.body.username}}}]}, (err, result) => {
        if(result == null) {
            imgModel.update({name: req.body.name}, {$push: {click: {$each: [{username: req.body.username, click : 1}]}}}, (err, result) => {
                res.status(200).send()
            })
        }
        else {
            imgModel.update({name: req.body.name, "click.username": req.body.username}, {$inc: {"click.$.click": 1}}, (err, result) => {
                res.status(200).send()
            })
        }
    })
})

app.post('/search', (req, res) => {
    
})

app.post('/', upload.single('image'), (req, res, next) => { 
    var str = req.body.desc
    var obj = {
        name: req.body.name,
        desc: str,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
        click: [{username: "정승안", click : 0}],
        hashtag: str.split(/(\s+)/).filter(function(e){return e.trim().length>0;}),
    }
    imgModel.create(obj, (err, item) => {
        console.log("hi");
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});
