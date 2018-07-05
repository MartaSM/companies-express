const express = require ('express');

const router = express.Router(); 

const companiesController = require('../../controllers/companyController');

router.get("/", companiesController.list);

router.get("/:id", companiesController.detail);

router.get("/create", companiesController.create);
router.post("/create", companiesController.doCreate);

router.get("/edit/:id", companiesController.edit);
router.post("/edit/:id", companiesController.doEdit);

module.exports = router;
