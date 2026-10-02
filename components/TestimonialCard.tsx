"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
};

// Testimonial content
const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Mahin understood the vision quickly and turned it into a clean, polished product.",
    name: "Client Name",
    role: "Founder",
    company: "Company",
    image: "/testimonials/client-1.jpg",
  },
  {
    id: 2,
    quote:
      "The attention to detail and quality of execution made the whole process effortless.",
    name: "Client Name",
    role: "Product Lead",
    company: "Company",
    image: "/testimonials/client-2.jpg",
  },
  {
    id: 3,
    quote:
      "Everything felt intentional, from the first design direction to the final implementation.",
    name: "Client Name",
    role: "Creative Director",
    company: "Company",
    image: "/testimonials/client-3.jpg",
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="w-[280px] shrink-0 rounded-[24px] bg-neutral-100 p-5 sm:w-[320px] lg:w-[360px]">
      {/* Testimonial quote */}
      <div className="flex items-start justify-between gap-4">
        <blockquote className="text-sm leading-relaxed text-neutral-700">
          “{testimonial.quote}”
        </blockquote>

        <Quote
          size={18}
          strokeWidth={1.75}
          className="shrink-0 text-neutral-400"
          aria-hidden="true"
        />
      </div>

      {/* Client information */}
      <div className="mt-5 flex items-center gap-3">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={36}
          height={36}
          className="size-9 rounded-full object-cover"
        />

        <div className="min-w-0">
          <p className="text-sm font-medium text-neutral-900">
            {testimonial.name}
          </p>

          <p className="text-xs text-neutral-500">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      {/* Section heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Testimonials
        </h2>
      </div>

      {/* Slider */}
      <div className="-mx-5 overflow-hidden sm:-mx-8">
        <div className="relative">
          {/* Left fade */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"
            aria-hidden="true"
          />

          {/* Moving track */}
          <motion.div
            className="flex w-max gap-3 pl-5 sm:pl-8"
            animate={{
              x: ["0px", "-1116px"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ),
            )}
          </motion.div>

          {/* Right fade */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
