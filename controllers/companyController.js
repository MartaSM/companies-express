const createError = require("http-errors");
const mongoose = require("mongoose");

const Company = require("../models/company.model");
const Comment = require('../models/comment.model')

module.exports.list = (req, res, next) => {
  Company.find()
    .then(companies =>{
            res.render('home', {
                companies
            });
    })
    .catch(error=>next(createError(404, 'Error 404. Sorry, companies not found')));
};

module.exports.detail = (req, res, next) => {
    const id = req.params.id;

    Company.findById(id)
        .then(company => {
            populate(Comment);
            res.render('companyDetail', {
                company: company
            })
        })
        .catch(error => {
            next(error);
            console.error(error);
        })
    }


module.exports.create = (req, res, next) => {
    res.render('companyCreate', {
        form: new Company()
    });
};

module.exports.doCreate = (req, res, next) => {
    const company = new Company(req.body);
    company.save()
    .then(() => res.redirect('/companies'))
    .catch(error => {
        if (error instanceof mongoose.Error.ValidationError){
            // console.error(error.errors.name.message)
            console.error(error)
            res.render('companyCreate', {
            company: company,
            error: error
            })
        }
    })
};

module.exports.edit = (req, res, next) => {
    console.log('entra en edit')
    const id = req.params.id;

    Company.findById(id)
        .then(company => {
            if(company) {
                res.render('companyEdit', {
                    company: company
                })
            } else {
                next(error)
            }
        })
        .catch(error => {
            // next (createError(404, 'Error 404. Sorry, companies not found'));
            next(error);
            console.error(error);
        })

}

module.exports.doEdit = (req, res, next) => {
    
}

 

