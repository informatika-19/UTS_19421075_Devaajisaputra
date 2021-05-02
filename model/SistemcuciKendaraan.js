const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cuciKendaraan = new Schema({

        namapemilik:{
            
            type: String
        },
        jeniskendaraan:{

            type: String
        },
        tipecuci:{
            type: String
        },
        pembayaran:{
      
            type: String
        },
        totalsemua :{
            type: String
            
        }
})
module.exports =mongoose.model('SistemcuciKendaraan',cuciKendaraan)