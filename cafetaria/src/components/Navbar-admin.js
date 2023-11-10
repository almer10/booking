import React from "react";
import useAdminAuth from "@/utils/adminAuth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const NavbarA = () => {
  const { isLoggedIn, login, logout } = useAdminAuth();
  const router = useRouter();

  return (
    <div className="navbar bg-primary-content justify-between">
      <a className="btn btn-ghost uppercase text-4xl font-bold" href="/">
        Cafetaria
      </a>

      <button
        onClick={() => {
          logout();
          localStorage.removeItem("isAdminLoggedIn");
          router.push("/admin");
        }}
        className="btn btn-warning text-uppercase"
      >
        Logout
      </button>
    </div>
  );
};
