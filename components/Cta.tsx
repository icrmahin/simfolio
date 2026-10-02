import { ArrowUpRight, CalendarDays } from "lucide-react";

export default function Cta() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="border-t border-neutral-200 pt-8 sm:pt-10">
        {/* CTA content */}
        <div className="max-w-xl">
          <p className="text-sm font-medium text-neutral-500">
            Have something in mind?
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Let&apos;s build something worth remembering.
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-neutral-500 sm:text-base">
            Have a product, idea, or problem you want to turn into something
            real? Let&apos;s talk about it.
          </p>
        </div>

        {/* CTA actions */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://cal.com/icrmahin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-neutral-800 px-4 py-2.5 text-sm font-semibold text-neutral-50 shadow-[4px_4px_10px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.7)] transition-all duration-150 active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            <CalendarDays size={16} strokeWidth={1.75} aria-hidden="true" />
            <span>Book a call</span>
          </a>

          <a
            href="mailto:icrmahin@gmail.com"
            className="flex items-center justify-center gap-2 rounded-xl border border-neutral-300/40 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-neutral-800 shadow-[4px_4px_10px_rgba(0,0,0,0.06),-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all duration-150 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            <span>Send an email</span>
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
