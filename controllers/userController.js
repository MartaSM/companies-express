const mongoose = require ( 'mongoose');
const User = require('../models/user.model');

module.exports.create = (req, res, next) => {
    res.render('user/form', {
        user: new User()
    })
}

module.exports.doCreate = (req, res, next) => {
    const newUser = new User(req.body);

    User.findOne({email: newUser.email})
        .then(user => {
            if(user) {
                return res.render('user/form', {
                    user: user,
                    errors: errors.email
                })
            } else {
                newUser.save()
                    .then(() => {
                       return res.redirect('/companies');
                    })
                    .catch(error => {
                        console.error(error)
                        if(error instanceof mongoose.Error.ValidationError){
                            console.log('Es de validacion?: ', error instanceof mongoose.Error.ValidationError)
                            res.render('user/form', {
                                user: newUser,
                                errors: error.errors
                            })
                        }
                    })
                }
    })
        .catch(error => {
            console.error(error)
        });

    }