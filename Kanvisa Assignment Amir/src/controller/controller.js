const axios = require("axios")


let getRepo = async (req, res) => {
    try {

        let language = req.query.language;
        let since = req.query.since;

        let option = {
            method: "get",
            url: `https://private-anon-dc2491be9a-githubtrendingapi.apiary-mock.com/repositories?language=${language}&since=${since}`,
        }

        let fetchData = await axios(option)
        let data = fetchData.data
        return res.status(200).send({ status: true, data: data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}
module.exports = {
    getRepo
}