const mongoose = require("mongoose");
//fix deprecation warning for findByIdAndUpdate
mongoose.set("useFindAndModify", false);

module.exports = mongoose.model("features", {
  name: {
    type: String,
    required: true
  }
});
