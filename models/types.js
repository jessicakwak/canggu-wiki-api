const mongoose = require("mongoose");
//fix deprecation warning for findByIdAndUpdate
mongoose.set("useFindAndModify", false);

module.exports = mongoose.model("types", {
  name: {
    type: String,
    required: true
  }
});
