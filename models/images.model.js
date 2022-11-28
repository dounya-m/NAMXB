var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var project = new Schema({
  ProjectOwner: String,
  ProjectName: String,
  ProjectDetails: String,
  ProjectImagePath: [String],
  ProjectPdfPath: String,
  ProjectLocation: Number,
  ProjectAmount: String
});

module.exports = mongoose.model("project", project);
