"use client";

import React from "react";
import Header from "../Header/Header";
import { Button } from "../ui/button";
import { CircleArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="relative 
      bg-[url('/bg.jpg')] 
      bg-cover bg-center 
      bg-no-repeat
      md:h-screen h-[90vh]"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black mix-blend-multiply"></div>
      <Header />
      <div className="relative z-10 w-full h-[90%] flex flex-col md:flex-row justify-end md:justify-between items-end text-white md:px-12 py-12 px-4 md:py-24 gap-6">
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter font-heading max-w-lg">
          BUILDING THE FUTURE
        </h1>
        <div className="max-w-2xl">
          <p className="max-w-2xl">
            At Gen-X Nirman, we are committed to transforming your vision into
            reality with our expert construction services. From residential to
            commercial projects, we deliver quality craftsmanship and innovative
            solutions that stand the test of time.
          </p>
          <Button variant={"link"} className="mt-6 text-[#cf6f02] p-0! mx-0">
            <CircleArrowRight
              size={120}
              className="w-8! h-8! text-white"
              strokeWidth={1}
            />
            <span className="pl-2 text-base underline-offset-64!">Explore Our Services</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
