const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const config = require('./config/key')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));
 
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.use('/api/users', require('./router/user'));
app.use('/api/video', require('./router/video'));

const port = 5000

app.listen(port, () => {
    console.log(`hello, node server start`)
})