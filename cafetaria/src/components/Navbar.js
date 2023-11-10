import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {

  return (
    <div className="navbar bg-primary-content justify-between">
      <a className="btn btn-ghost uppercase text-4xl font-bold" href="/">
        Cafetaria
      </a>
    </div>
  );
};
