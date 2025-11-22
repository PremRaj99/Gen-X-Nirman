"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Home Renovation Client",
    image: "/bg.jpg",
    text: "Their craftsmanship and attention to detail exceeded our expectations. The team communicated clearly, stayed on schedule, and delivered a stunning renovation.",
  },
  {
    name: "James Robertson",
    role: "Commercial Fit-Out Client",
    image: "/bg.jpg",
    text: "Professional, reliable, and efficient. They completely transformed our office space while keeping everything smooth and stress-free.",
  },
  {
    name: "Emily Fraser",
    role: "New Build Customer",
    image: "/bg.jpg",
    text: "The quality of their work is unmatched. They guided us through every step with honesty and delivered a beautiful home that exceeded expectations.",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="w-full py-20 bg-[#0D0D0D] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
        {/* Heading */}
        <div className="space-y-2">
          <p className="text-sm text-gray-400">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          className="pb-12"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <Card className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl shadow-none max-w-3xl mx-auto">
                <CardContent className="p-10 space-y-6">
                  {/* Rating */}
                  <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        size={20}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-lg text-gray-300 leading-relaxed">
                    “{item.text}”
                  </p>

                  {/* User */}
                  <div className="flex flex-col items-center gap-3 pt-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-white text-lg">
                        {item.name}
                      </p>
                      <p className="text-gray-500 text-sm">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
