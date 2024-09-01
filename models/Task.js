const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  deadline: { type: Date, required: true },
  teamLeader: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
