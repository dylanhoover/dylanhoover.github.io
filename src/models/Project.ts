import mongoose from 'mongoose';

const TechnologySchema = new mongoose.Schema({
  name: String,
  type: String
});

const TechnologyGroupSchema = new mongoose.Schema({
  technologies: [TechnologySchema]
});

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  githubLink: {
    type: String,
    required: false
  },
  technologyGroups: [TechnologyGroupSchema]
}, {
  timestamps: true
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema); 