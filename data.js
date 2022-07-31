const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    TTsensor: String,
})

module.exports = mongoose.model('data', dataSchema)