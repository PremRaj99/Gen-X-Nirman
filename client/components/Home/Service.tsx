"use client";

import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function Service() {
  return (
    <section className="w-full py-20 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Heading */}
        <div className="text-center space-y-3 mb-16">
          <p className="text-sm opacity-70 flex items-center justify-center gap-1">
            Our Services <ArrowUpRight size={14} />
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Aberdeen’s Most Trusted <br /> Construction Services – Built for You
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            From granite-clad homes to city-centre commercial spaces, we deliver
            precision craftsmanship with local expertise.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Image */}
          <div className="relative w-full md:h-[600px] h-96 rounded-xl overflow-hidden">
            <Image
              src="/bg.jpg" // replace with your image
              alt="service image"
              fill
              className="object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70" />
          </div>

          {/* Right Content - Top Two Cards */}
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-[#1A1A1A] border-none shadow-none text-gray-300">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <span className="text-lg">📐</span>
                  Custom Home Building
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  Bespoke Aberdeen homes designed for your lifestyle and the
                  Scottish climate.
                </p>
                <a
                  className="text-sm underline flex items-center gap-1"
                  href="#"
                >
                  Explore Our Home Designs <ArrowUpRight size={14} />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1A1A] border-none shadow-none text-gray-300">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <span className="text-lg">🏗️</span>
                  Commercial Construction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  Durable, code-compliant spaces for Aberdeen businesses, from
                  fit-outs to ground-up builds.
                </p>
                <a
                  className="text-sm underline flex items-center gap-1"
                  href="#"
                >
                  View Commercial Portfolio <ArrowUpRight size={14} />
                </a>
              </CardContent>
            </Card>
            <Card className="bg-[#1A1A1A] border-none shadow-none text-gray-300">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <span className="text-lg">🛠️</span>
                  Roofing & Structural Repairs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  Storm-proof solutions for Aberdeen’s harsh weather, backed by
                  10-year guarantees.
                </p>
                <a
                  className="text-sm underline flex items-center gap-1"
                  href="#"
                >
                  Schedule an Inspection <ArrowUpRight size={14} />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-1 md:col-span-2">
            <Card className="bg-[#1A1A1A] border-none shadow-none text-gray-300">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <span className="text-lg">➕</span>
                  Renovations & Extensions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  Transform your existing space with seamless, stress-free
                  remodels.
                </p>
                <a
                  className="text-sm underline flex items-center gap-1"
                  href="#"
                >
                  Get a Renovation Quote <ArrowUpRight size={14} />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1A1A] border-none shadow-none text-gray-300">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <span className="text-lg">📋</span>
                  Project Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  Full-service oversight — we handle permits, timelines, and
                  budgets so you don’t have to.
                </p>
                <a
                  className="text-sm underline flex items-center gap-1"
                  href="#"
                >
                  Learn How We Work <ArrowUpRight size={14} />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
