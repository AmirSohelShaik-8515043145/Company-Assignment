const express = require("express");
const controller = require("../controller/controller.js");
const router = express.Router();


router.get('/test', function (req, res) {
    res.send("this is api")
});

router.post('/country', controller.createCountry);
router.get('/country', controller.getCountries);
router.get('/country/:countryId', controller.getCountryById);


module.exports = router;