"use client";

import { CalComBadge } from "@thesvg/react";
import { Download } from "lucide-react";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import Profile from "./ui/profile";

export interface HeroProps {
  onJoinClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  onKnowMoreClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

interface CtaButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "primary" | "secondary";
}

function CtaButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: CtaButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-neutral-800 text-neutral-50 shadow-[4px_4px_10px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.7)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.4)]"
      : "bg-blue-50 text-neutral-800 shadow-[4px_4px_10px_rgba(0,0,0,0.06),-4px_-4px_10px_rgba(255,255,255,0.8)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]";
  return (
    <a
      {...props}
      className={[
        "flex items-center justify-center gap-2 rounded-xl",
        "border border-neutral-300/40 px-4 py-2",
        "text-sm font-semibold",
        "transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
        styles,
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}

export default function Hero({ onJoinClick, onKnowMoreClick }: HeroProps) {
  return (
    <section
      id="home"
      className="px-5 pb-10 pt-6 sm:px-8 sm:pb-10 sm:pt-8 mt-20"
    >
      <div className="mb-3">
        <Profile />
      </div>

      <h1 className="text-xl font-semibold tracking-tight text-neutral-800">
        A. Mahin
      </h1>

      <article className="mt-3 max-w-2xl space-y-2.5 leading-relaxed text-neutral-700">
        <p>
          <strong className="font-semibold text-neutral-900">
            I build products in digital worlds.
          </strong>
          <br />
          In the era of AI, I am an{" "}
          <strong className="font-semibold text-neutral-900">
            NI — a Natural Intelligence
          </strong>
          . I collaborate with AI to build absolute, boundary-pushing products
          that clients didn&apos;t even think were possible.
        </p>

        <p className="text-neutral-500">
          Seems confusing? Let&apos;s have a cup of tea!
        </p>
      </article>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <CtaButton
          href="/resume.pdf"
          download="A-Mahin-Resume.pdf"
          aria-label="Download A. Mahin resume"
          onClick={onJoinClick}
        >
          <Download
            className="h-4 w-4 shrink-0"
            strokeWidth={2}
            aria-hidden="true"
          />
          <span>Resume</span>
        </CtaButton>

        <CtaButton
          variant="secondary"
          href="https://cal.com/icrmahin"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onKnowMoreClick}
          aria-label="Schedule a call via Cal.com"
        >
          <CalComBadge className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Cal Now!</span>
        </CtaButton>
      </div>
    </section>
  );
}
