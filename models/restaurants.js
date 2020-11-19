const mongoose = require("mongoose");
//fix deprecation warning for findByIdAndUpdate
mongoose.set("useFindAndModify", false);
require("./types");
require("./features");
require("./cities");

const ObjectID = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model("restaurants", {
  name: {
    type: String
  },
  images: [
    {
      type: String
    }
  ],
  type: [
    {
      type: ObjectID,
      ref: "types"
    }
  ],
  city: {
    type: ObjectID,
    ref: "cities"
  },
  region: {
    type: String
  },
  description: {
    type: String
  },
  lat: {
    type: Number
  },
  lng: {
    type: Number
  },
  review: {
    type: String
  },
  features: [
    {
      type: ObjectID,
      ref: "features"
    }
  ]
});
