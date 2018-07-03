const mongoose = require('mongoose');
const companySchema = new mongoose.Schema( {
    name: {
        type: String, 
        required: [true, 'Name is fucking required'],
        unique: true
    },
    code: {
        type: String, 
        required: [true, 'Code is fucking required']
    }, 

    image: {
        type: String, 
        required: [false, 'Image is fucking required']

    },

    money: {
        type: Number, 
        default: 0 

    }, 

    description: {
        type: String, 
        maxlength: 100
    },

})

module.exports = mongoose.model('Company', companySchema);

