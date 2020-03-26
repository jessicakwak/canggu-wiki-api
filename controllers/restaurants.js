const Restaurants = require("../models/restaurants");
const router = require("express").Router();

//create
router.post("/", (req, res) => {
  Restaurants.create(req.body)
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
  Restaurants.find()
    .populate("type features")
    .then(data => {
      res.send(data);
    });
});

//Update
router.patch("/:id", (req, res) => {
  Restaurants.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
//Delete
router.delete("/:id", (req, res) => {
  Restaurants.findByIdAndDelete(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
module.exports = router;
