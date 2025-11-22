"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Header() {
  const NAV_ITEMS = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="w-full p-4 flex justify-between items-center">
        <h1 className="text-3xl tracking-tighter font-extrabold">GEN-X NIRMAN</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-between font-semibold tracking-tight gap-6">
          {NAV_ITEMS.map((item) => (
            <Link key={item.name} href={item.href} className="text-lg nav-underline">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Icon */}
        <button onClick={() => setOpen(true)} className="md:hidden relative z-20">
          <Menu size={28} />
        </button>
      </header>

      {/* BACKDROP OVERLAY (blur glass effect) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40"
        ></div>
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[80%] max-w-[300px]
          bg-[#0D0D0D] text-white shadow-xl z-50
          border-r border-[#1E1E1E]
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-[#1E1E1E]">
          <h2 className="text-xl font-bold">GEN-X NIRMAN</h2>
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="px-4 py-6 flex flex-col gap-6">

          {/* SIMPLE LINKS */}
          {NAV_ITEMS.slice(0, 1).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold hover:text-gray-300 transition"
            >
              {item.name}
            </Link>
          ))}

          {/* ACCORDION SECTION */}
          <Accordion type="single" collapsible className="text-lg font-semibold">
            <AccordionItem value="services">
              <AccordionTrigger className="text-white hover:text-gray-300">
                SERVICES
              </AccordionTrigger>
              <AccordionContent className="flex flex-col text-gray-400 pl-2 gap-3 py-2">
                <Link href="/services/construction" onClick={() => setOpen(false)}>
                  Construction
                </Link>
                <Link href="/services/renovation" onClick={() => setOpen(false)}>
                  Renovation
                </Link>
                <Link href="/services/project-management" onClick={() => setOpen(false)}>
                  Project Management
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* SIMPLE LINKS CONTINUE */}
          {NAV_ITEMS.slice(2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold hover:text-gray-300 transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Footer inside Sidebar */}
          <div className="pt-8 border-t border-[#1E1E1E] text-gray-500 text-sm">
            © {new Date().getFullYear()} GEN-X NIRMAN  
          </div>
        </div>
      </aside>
    </>
  );
}
