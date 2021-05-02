const {Console} = require('console')
const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/utsdeva', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then (() => {
    console.log('Berhasil')
}).catch((e)=>{
    console.log(e)
    console.log('Gagal')
})

app.use(bodyParser.json({
    extends: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extends: true,
    limit: '20mb'
}))

app.use('/cucikendaraan', require('./routes/Sistemcucikendaraan'))

//req body
//app.post('/register', (req, res) =>{
    //console.log(req.body)
    //res.json(req.body)
//})

app.listen(7000, () =>{
    console.log('Server Mulai')
})