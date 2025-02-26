"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="logo">
          Dylan Hoover
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
