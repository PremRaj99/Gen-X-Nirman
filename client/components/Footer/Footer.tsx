"use client";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D0D0D] text-white border-t border-[#1E1E1E]">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-14">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Gen-X Nirman</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision craftsmanship, trusted expertise, and quality builds  
              designed to withstand Scotland’s toughest conditions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Services</Link></li>
              <li><Link href="#" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <div className="space-y-4 text-gray-400 text-sm">

              <p className="flex items-start gap-3">
                <Mail size={18} className="text-gray-300 mt-0.5" />
                email@company.com
              </p>

              <p className="flex items-start gap-3">
                <Phone size={18} className="text-gray-300 mt-0.5" />
                01224 XXX XXX  
                <br />Mon–Fri: 8am–6pm | Sat: 9am–1pm
              </p>

              <p className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-300 mt-0.5" />
                760 Market St Floor 10  
                <br /> Aberdeen, Scotland
              </p>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#1E1E1E] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Gen-X Nirman. All rights reserved.
          </p>

          {/* Social / CTA */}
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition flex items-center gap-1">
              Back to Top <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
