const mongoose = require ( 'mongoose');

const  Company = require ('../models/company.model');

const Comment = require ( '../models/comment.model')



module.exports.doCreate = (req, res,next) => {
    
    const id = req.params.id;  

        Company.findById(id)
        .then(company=>{
            if (company){
            let comment = new Comment ({
                text:req.body.text,
                company:req.body.company
                })
             }
        })
        comment.save()
        .then(() => {
            celebrity.comment.push()
        })


        .catch(error => {
            next(error);
            console.error(error);
        })
}