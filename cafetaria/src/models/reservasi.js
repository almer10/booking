import mongoose from "mongoose";

const reservasiScheme = new mongoose.Schema({
  tanggal: {
    type: String,
    required: true,
  },
  waktu: {
    type: String,
    required: true,
  },
  kapasitas: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  telepon: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var Reservasi = mongoose.model("Reservasi", reservasiScheme);

export default Reservasi;
