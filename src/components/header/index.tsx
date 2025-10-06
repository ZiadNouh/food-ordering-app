import Navbar from "@/components/header/navbar";
import { Routes } from "@/constants/enums";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between">
        <Link href={Routes.ROOT}>Logo</Link>
        <Navbar />
      </div>
    </header>
  );
}
