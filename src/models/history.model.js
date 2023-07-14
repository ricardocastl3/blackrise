const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    id: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

const HistoryModel = mongoose.model("history", HistorySchema);

module.exports = HistoryModel;
