const countryModel = require("../model/model")
const aws = require("../aws/aws");


/******************************************  Post A Country  ******************************************************/


const createCountry = async function (req, res) {
    try {
        let data = req.body;

        let length = data.countryName.length
        if (!(2 < length && length < 21)) {
            return res.status(400).send({ status: false, message: "Country Name should contain 3 to 20 character." })
        }

        let countryName = data.countryName.toLowerCase()
        let countryList = await countryModel.findOne({ countryName: countryName, countryId: data.countryId })
        if (countryList) {
            return res.status(400).send({ status: false, message: "Country Already Present in the DB" })
        }

        let file = req.files;
        let imageUrl = await aws.uploadFile(file[0])
        data.image = imageUrl
        let country = await countryModel.create(data)
        res.status(201).send({ status: true, data: country })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


/*********************************************  Get Country  **********************************************************/


const getCountries = async (req, res) => {
    try {
        let countries = await countryModel.find().select({ _id: 1, countryName: 1, countryId: 1 });
        res.status(200).send({ status: true, data: countries })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


/*******************************************  Get Country By Id  ******************************************************/


const getCountryById = async (req, res) => {
    try {
        let id = req.params.countryId;
        let countries = await countryModel.find({ countryId: id }).select({ _id: 1, countryName: 1, countryId: 1 });
        res.status(200).send({ status: true, data: countries })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = {
    createCountry,
    getCountries,
    getCountryById
}