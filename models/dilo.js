const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiloSchema = Schema({
  nama: String,
  kursus: String
});

module.exports = mongoose.model('murid', DiloSchema);