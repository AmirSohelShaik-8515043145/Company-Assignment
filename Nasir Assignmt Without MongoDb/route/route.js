const router = require('express').Router();
const fs = require("fs");
let { countries } = require("../data.json");

router.get("/countries", (req, res) => {
  return res.status(200).send(countries.map(({ id, name }) => ({ id, name })))
});


router.get("/country/:id", (req, res) => {
  const countryId = req.params.id;
  return res.status(200).send(countries.find(country => country.id === Number(countryId)));
});


router.post("/country", async (req, res) => {
  try {
    const countryData = req.body;
    if (countryData.name == undefined) {
      return res.status(400).send({ message: "Country Name should be present" })
    };
    let length = countryData.name.length;
    if (!(2 < length && length < 21)) {
      return res.status(400).send({ status: false, message: "Country Name should contain 3 to 20 character." })
    };
    
    if (Number(countryData.rank) % 1 !== 0) {
      return res.status(400).send({ status: false, message: "Rank should be a Integer value" })
    };
    countries = [...countries, { ...countryData, id: countries.length + 1 }];

    await fs.writeFileSync(
      "../data.json",
      JSON.stringify({ countries }),
      err => {
        if (err) {
          console.log(err);
        }
      }
    );

    return res.status(201).send(countries[countries.length - 1]);
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;