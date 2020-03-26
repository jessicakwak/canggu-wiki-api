const Features = require("../models/features");
const router = require("express").Router();

//Create
router.post("/", (req, res) => {
  Features.create(req.body)
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
  Features.find().then(data => {
    res.send(data);
  });
});

//Delete
router.delete("/:id", (req, res) => {
  Features.findByIdAndDelete(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
module.exports = router;
