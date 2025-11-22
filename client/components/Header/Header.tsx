import Link from "next/link";
import React from "react";

export default function Header() {
  const NAV_ITEMS = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];
  return (
    <div className="w-full p-4 flex font-mono justify-between items-center">
      <h1 className="text-3xl tracking-tighter w-[10ch] leading-6.5 font-extrabold">GEN-X NIRMAN</h1>
      <nav className="flex justify-between font-semibold tracking-tighter gap-6">
        {NAV_ITEMS.map((item) => (
          <Link key={item.name} href={item.href} className="text-lg nav-underline">
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
