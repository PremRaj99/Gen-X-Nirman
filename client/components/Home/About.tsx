"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="w-full py-20 bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-400 flex items-center gap-1">
            About Us <ArrowUpRight size={14} />
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Deep Roots in Aberdeen: Builders <br /> Who Understand Your Needs
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-400 leading-relaxed">
            Family-owned and locally grown, we’ve been building Aberdeen’s homes
            and businesses with pride for over 15 years. Our team of
            NHBC-certified craftsmen combines traditional techniques with modern
            innovation to withstand Scotland’s toughest conditions.
          </p>

          <p className="text-gray-400 leading-relaxed">
            From granite restoration to energy-efficient new builds, every
            project reflects our commitment to quality, transparency, and your
            complete satisfaction. We don’t just construct buildings — we build
            relationships that last.
          </p>

          {/* Button */}
          <Button className="w-fit px-5 py-5 text-base bg-white text-black hover:bg-gray-200">
            Go to About Us Page <ArrowUpRight size={18} className="ml-1" />
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            <div>
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-sm text-gray-400">Aberdeen Projects</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">15 Year</p>
              <p className="text-sm text-gray-400">Structural Guarantees</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">4.8/5</p>
              <p className="text-sm text-gray-400">Client Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 h-full">
          {/* Left tall image */}
          <div className="relative h-[700px] rounded-2xl overflow-hidden">
            <Image
              src="/bg.jpg"
              alt="construction"
              fill
              className="object-cover"
            />
          </div>

          {/* Two stacked images */}
          <div className="grid grid-rows-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-full">
              <Image
                src="/bg.jpg"
                alt="team"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden h-full">
              <Image
                src="/bg.jpg"
                alt="workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
