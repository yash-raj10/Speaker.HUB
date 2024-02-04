const mongoose = require('mongoose');

const conferenceSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true
  },
  until: {
    type: String,
    required: true
  },
  untilDate: {
    type: Number,
    required: true
  },
  conf: {
    name: {
      type: String,
      required: true
    },
    date: {
      type: [Number],
      required: true
    },
    hyperlink: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  }
});

const Conference = mongoose.model('Conference', conferenceSchema);

module.exports = Conference;