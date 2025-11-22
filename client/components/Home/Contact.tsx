"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full py-20 bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Visit Our Office</h2>

          <p className="text-gray-400 max-w-md">
            From first plans to final finishes, our Aberdeen builders are here
            to help – with honest advice and local expertise.
          </p>

          {/* EMAIL CARD */}
          <Card className="rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] shadow-none">
            <CardContent className="flex items-start gap-4 py-5">
              <div className="p-3 rounded-full bg-[#2A2A2A]">
                <Mail size={22} className="text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  For detailed inquiries or documents:
                </p>
                <p className="font-medium text-white">email@company.com</p>
              </div>
            </CardContent>
          </Card>

          {/* PHONE CARD */}
          <Card className="rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] shadow-none">
            <CardContent className="flex items-start gap-4 py-5">
              <div className="p-3 rounded-full bg-[#2A2A2A]">
                <Phone size={22} className="text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Prefer to talk it through? Call our project lead:
                </p>
                <p className="font-medium text-white">01224 XXX XXX</p>
                <p className="text-sm text-gray-500">
                  Mon–Fri: 8am–6pm | Sat: 9am–1pm
                </p>
              </div>
            </CardContent>
          </Card>

          {/* ADDRESS CARD */}
          <Card className="rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] shadow-none">
            <CardContent className="flex items-start gap-4 py-5">
              <div className="p-3 rounded-full bg-[#2A2A2A]">
                <MapPin size={22} className="text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Stop by for a coffee & chat at our HQ:
                </p>
                <p className="font-medium text-white leading-tight">
                  760 Market St Floor 10, San Francisco, Aberdeen, Scotland
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT MAP */}
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-[#2A2A2A]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2879788074155!2d-2.098109!3d57.149717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488410b556d16e8d%3A0xe6eddc860ab0c157!2sPittodrie%20Stadium!5e0!3m2!1sen!2suk!4v1700000000000"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
