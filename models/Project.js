// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  deadline: Date,
  teamLeader: String,
  technologies: [String],
  tasks: [{
    name: String,
    description: String,
    category: String,
    deadline: Date,
    fileAttachments: [String],
  }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Project', ProjectSchema);
