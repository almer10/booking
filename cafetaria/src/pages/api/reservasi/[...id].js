import connectDB from "@/middleware/mongodb";
import Reservasi from "@/models/reservasi";

const handler = async (req, res) => {
  const method = req.method;
  const { id } = req.query;

  const handleMethod = {
    GET: async () => {
      try {
        const reservasi = await Reservasi.findOne({ _id: id });

        return res.status(200).json(reservasi);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    },
  };

  const response = handleMethod[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
};

export default connectDB(handler);
