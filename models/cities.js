const mongoose = require("mongoose");
//fix deprecation warning for findByIdAndUpdate
mongoose.set("useFindAndModify", false);

module.exports = mongoose.model("cities", {
  name: {
    type: String,
    required: true
  }
});
