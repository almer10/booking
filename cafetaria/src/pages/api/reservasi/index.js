import connectDB from "@/middleware/mongodb";
import Reservasi from "@/models/reservasi";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const user = await Reservasi.find();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else if (req.method === "POST") {
    const data = req.body;
    try {
      const reservasi = new Reservasi({
        tanggal: data.tanggal,
        waktu: data.waktu,
        kapasitas: data.kapasitas,
        nama: data.nama,
        telepon: data.telepon,
        email: data.email,
      });

      var createdReservasi = await reservasi.save();
      return res
        .status(200)
        .json({ status: "Success", data: createdReservasi });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send("data_incomplete");
  }
};

export default connectDB(handler);
