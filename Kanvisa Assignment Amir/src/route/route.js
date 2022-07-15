const express = require("express")
const router = express.Router()

const {getRepo} = require("../controller/controller");

router.get("/getTrendingRepo",getRepo)

module.exports = router