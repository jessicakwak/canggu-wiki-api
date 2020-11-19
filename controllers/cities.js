const Cities = require("../models/cities");
const router = require("express").Router();

//Create
router.post("/", (req, res) => {
    Cities.create(req.body)
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(err => {
      res.send(err);
      console.log(err);
    });
});

//Read
router.get("/", (req, res) => {
    Cities.find().then(data => {
    res.send(data);
  });
});

//Delete
router.delete("/:id", (req, res) => {
    Cities.findByIdAndDelete(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
module.exports = router;