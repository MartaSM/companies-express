const createError = require("http-errors");
const mongoose = require("mongoose");

const Company = require("../models/company.model");

module.exports.list = (req, res, next) => {
  Company.find()
    .then(companies =>{
            res.render('home', {
                companies
            });
    })
    .catch(error=>next(createError(404, 'Error 404. Sorry, companies not found')));
};

module.exports.create = (req, res, render)=>{
    res.render('newCompany', {
        form: new Company()
    });
};

//AQUI NOS QUEDAMOS//

module.exports.doCreate = (req, res, render)=>{
    const company = new Company(req.body);
    company.save()
    .then(() => res.redirect('/companies'))
    .catch(error => {
        if (error instanceof mongoose.Error.ValidationError){
            console.log(error)
            res.redirect('/companies/create')
        }
    })
};

 

