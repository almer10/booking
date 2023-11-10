import Link from "next/link";
import { ADMIN_PASSWORD } from "@/utils/adminPassword";
import { useState, useEffect } from "react";
import useAdminAuth from "@/utils/adminAuth";
import axios from "axios";
import { useRouter } from "next/router";

export default function AdminPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdminLoggedIn");
    if (loggedIn === "true") {
      router.push("/admin/dashboard");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdminLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Incorrect password");
    }
  };
  return (
    <>
      <section className="bg-slate-100 h-screen flex items-center justify-center text-center">
        <div className="loginBox bg-white p-4 rounded-lg flex-column max-w-md w-5/6">
          <h1 className="text-2xl mb-5">Login Admin</h1>

          <form
            onSubmit={handleSubmit}
            className="w-full flex-col justify-center"
          >
            <input
              type="password"
              placeholder="Masukkan Password"
              className="input input-bordered w-full max-w-xs"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              className="btn btn-primary mt-3 w-40 max-w-xs"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
