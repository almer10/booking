import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });
const jams = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
const jamOptions = jams.map((jam, key) => (
  <option value={jam} key={key}>
    {jam}
  </option>
));

const sizes = ["1", "2", "3", "4", "5"];
const sizeOptions = sizes.map((size, key) => (
  <option value={size} key={key}>
    {size}
  </option>
));

export default function Home() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/reservasi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tanggal: e.target.tanggal.value,
        waktu: e.target.waktu.value,
        kapasitas: e.target.kapasitas.value,
        nama: e.target.nama.value,
        telepon: e.target.telepon.value,
        email: e.target.email.value,
      }),
    });
    res = await res.json();
    document.getElementById("my_modal_1").showModal();
    router.push("/");
  };
  return (
    <main className="bg-slate-50 min-h-screen ">
      <Navbar />
      <div className="container mx-auto text-center p-6 justify-center justify-items-center text-center items-center flex flex-col">
        <h2 className={`text-6xl font-bold text-center ${inter}`}>
          Book Table
        </h2>
        <p className="text-xl mt-4">
          Menyediakan booking table sesuai dengan keinginan anda
        </p>

        <form
          className="mt-6 grid grid-cols-3 gap-3 text-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="mb-3 font-bold">Tanggal Reservasi</label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="tanggal"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="mb-3 font-bold">Time</label>
            <select
              className="select select-bordered w-full max-w-ms"
              name="waktu"
            >
              <option value={""} disabled>
                Jam
              </option>
              {jamOptions}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-3 font-bold">Kapasitas</label>
            <select
              className="select select-bordered w-full max-w-ms"
              name="kapasitas"
            >
              <option value={""} disabled>
                Banyak
              </option>
              {sizeOptions}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-3 font-bold">Nama</label>
            <input
              type="text"
              placeholder="Masukkan Nama"
              className="input input-bordered w-full max-w-xs"
              name="nama"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="mb-3 font-bold">No Telpon</label>
            <input
              type="text"
              placeholder="Masukkan Nomor Telepon"
              //   pattern="0-9"
              maxLength={13}
              className="input input-bordered w-full max-w-xs"
              name="telepon"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="mb-3 font-bold">Email</label>
            <input
              type="email"
              placeholder="Masukkan Email"
              className="input input-bordered w-full max-w-xs"
              name="email"
            ></input>
          </div>
          <div></div>
          <button
            type="submit"
            className="btn btn-warning text-uppercase font-extrabold"
            // onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Book Now
          </button>
          <div></div>
        </form>

        {/* Modal */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box text-center">
            <h3 className="font-bold text-lg">Terima Kasih!</h3>
            <p className="py-4">
              Tempat sudah dipersiapkan dan tinggal menunjukan bukti pemesanan
            </p>
          </div>
        </dialog>
      </div>
    </main>
  );
}
