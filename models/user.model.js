const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRound = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'Email is required',
        unique: 'Email is already used'
    },
    password: {
        type: String,
        required: 'Password is required'
    }
});

userSchema.pre('save', function(next) {
    if(!this.isModified('password')) return next()

bcrypt.genSalt(saltRound)
    .then((saltValue) => {
        return bcrypt.hash(this.password, saltValue);
    })
    .then(hash => {
        this.password = hash;
        next();
        }
    )

    .catch(error => {
        this.password = null;
        next();
    })
})



module.exports = mongoose.model('User', userSchema);