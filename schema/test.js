const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
});

const TestModel = new mongoose.model("Test", TestSchema);

module.exports = TestModel;
