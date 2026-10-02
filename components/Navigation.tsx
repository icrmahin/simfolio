"use client";

import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  CalendarDays,
  Home,
  MessageSquareQuote,
  Route,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    id: "home",
    icon: Home,
  },
  {
    label: "Projects",
    id: "projects",
    icon: BriefcaseBusiness,
  },
  {
    label: "Experience",
    id: "experience",
    icon: Route,
  },
  {
    label: "Testimonials",
    id: "testimonials",
    icon: MessageSquareQuote,
  },
  {
    label: "Contact",
    id: "contact",
    icon: CalendarDays,
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-50 flex justify-center px-2 sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] sm:px-4"
    >
      <div
        className={[
          "flex items-center gap-0.5 rounded-2xl sm:gap-1",
          "bg-neutral-800 px-2 py-2",
          "shadow-[6px_6px_16px_rgba(0,0,0,0.18),-4px_-4px_12px_rgba(255,255,255,0.08)]",
        ].join(" ")}
      >
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={isHome ? `#${item.id}` : `/#${item.id}`}
              className={[
                "flex flex-col items-center justify-center gap-1 rounded-xl px-1.5 py-2 min-w-11 sm:min-w-16 sm:px-3",
                "text-neutral-400",
                "transition-colors duration-150",
                "hover:text-neutral-50",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-neutral-500",
              ].join(" ")}
              aria-label={item.label}
            >
              <Icon size={17} strokeWidth={1.75} aria-hidden="true" />

              <span className="text-[9px] font-medium leading-none sm:text-[10px]">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}