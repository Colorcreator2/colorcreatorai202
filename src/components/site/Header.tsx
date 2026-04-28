import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elevated" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="Color-Creator AI logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover drop-shadow-[0_0_12px_rgba(124,92,255,0.45)]"
            />
            <span className="font-display text-lg font-semibold tracking-tight">
              Color-Creator <span className="gradient-text">AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                activeProps={{ className: "text-foreground bg-white/5" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            style={{ background: "var(--gradient-cinematic)" }}
          >
            Start Project
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm rounded-lg hover:bg-white/5"
                  activeProps={{ className: "text-foreground bg-white/5" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
