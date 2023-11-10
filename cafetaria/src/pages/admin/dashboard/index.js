import { useState, useEffect } from "react";
import { NavbarA } from "@/components/Navbar-admin";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/reservasi")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div>
        <NavbarA />
      </div>
      <div className="justify-center text-center items-center flex flex-col p-4">
        <h1 className="text-6xl mt-4 text-bold">Data Reservasi</h1>

        <table className="table-auto mt-8 w-full border-collapse border border-slate-400 ...">
          <thead>
            <tr>
              <th className="border border-slate-300 ...">No</th>
              <th className="border border-slate-300 ...">Tanggal</th>
              <th className="border border-slate-300 ...">Waktu</th>
              <th className="border border-slate-300 ...">Kapasitas</th>
              <th className="border border-slate-300 ...">Nama</th>
              <th className="border border-slate-300 ...">Telepon</th>
              <th className="border border-slate-300 ...">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr>
                <td className="border border-slate-300 ...">{i + 1}</td>
                <td className="border border-slate-300 ...">{data.tanggal}</td>
                <td className="border border-slate-300 ...">{data.waktu}</td>
                <td className="border border-slate-300 ...">
                  {data.kapasitas}
                </td>
                <td className="border border-slate-300 ...">{data.nama}</td>
                <td className="border border-slate-300 ...">{data.telepon}</td>
                <td className="border border-slate-300 ...">{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
