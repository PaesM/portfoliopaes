"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div><strong>Paes Portfolio</strong></div>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}