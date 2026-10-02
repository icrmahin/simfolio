import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/icrmahin",
  },
  {
    label: "GitHub",
    href: "https://github.com/icrmahin",
  },
  {
    label: "X",
    href: "https://x.com/icrmahin",
  },
];

export default function Footer() {
  return (
    <footer className="px-5 pb-0 pt-32 sm:px-8 sm:pt-40">
      <div className="border-t border-neutral-200 pt-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Identity */}
          <div>
            <p className="text-sm font-semibold tracking-tight text-neutral-800">
              A. Mahin
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              Creative engineer building products in digital worlds.
            </p>
          </div>

          {/* Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-4"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 py-1 text-sm text-neutral-500 transition-colors duration-150 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col gap-1 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} A. Mahin</p>

          <p>Designed & built with intention.</p>
        </div>
      </div>
    </footer>
  );
}
