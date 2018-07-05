const mongoose = require ('mongoose');

module.exports = mongoose.model ('Comment', new mongoose.Schema({
    text : {
        type: String,
        required : 'please comment'
    },

    company : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Company',
        required : true
    }
}))
