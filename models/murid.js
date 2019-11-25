const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MuridSchema = Schema({
  nama: String,
  kursus: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('murids', MuridSchema);