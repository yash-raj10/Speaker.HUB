const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  github: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  isA: {
    type: String,
    required: true
  },
  linkedIn: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  talk1: {
    type: String,
    required: false
  },
  talk1Link: {
    type: String,
    required: false
  },
  talk2: {
    type: String,
    required: false
  },
  talk2Link: {
    type: String,
    required: false
  },
  techStack: {
    type: String,
    required: false
  },
  twtr: {
    type: String,
    required: true
  },
  woman: {
    type: String,
    required: true
  }
});

const Profile = mongoose.model('Participant', profileSchema);

module.exports = Profile;
