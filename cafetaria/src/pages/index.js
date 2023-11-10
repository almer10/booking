import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen ">
      <Navbar />
      <div className="container mx-auto text-center p-6 justify-center justify-items-center text-center items-center flex flex-col">
        <h2 className={`text-6xl font-bold text-center ${inter}`}>Cafetaria</h2>
        <p className="text-xl mt-1">
          Menyediakan booking table sesuai dengan keinginan anda
        </p>
        <button className="btn btn-warning text-xl font-bold my-4">
          <Link href="/reservasi">Book Table</Link>
        </button>

        <Image
          src="/img/download.jpeg"
          width={700}
          height={50}
          className="rounded-lg"
        ></Image>
      </div>
    </main>
  );
}
