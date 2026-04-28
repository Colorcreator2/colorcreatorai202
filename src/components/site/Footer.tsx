import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, Mail, Facebook, PhoneCall, icons } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 items-start">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Color-Creator AI logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover drop-shadow-[0_0_12px_rgba(124,92,255,0.4)]"
              />
              <span className="font-display text-lg font-semibold">
                Color-Creator <span className="gradient-text">AI</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              AI-powered creative content studio. We build the visual presence
              of modern brands.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-center">
            <a
              href="mailto:okirikachika530@gmail.com"
              className="inline-flex items-center gap-2 text-sm hover:text-foreground transition-colors text-muted-foreground"
            >
              <Mail size={16} />
              okirikachika530@gmail.com
            </a>
            <div className="flex gap-3 mt-2">
              {[
                { icons: Instagram, href: "https://instagram.com/colorcreator_ai" },
                { icons: Twitter, href: "https://x.com/udenwabenjamin?s=21" },
                { icons: Linkedin, href: "https://www.linkedin.com/in/chukwudi-udenwa-95a4b9317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
                { icons: PhoneCall, href: "https://wa.me/8078931982" },
                { icons: Facebook, href: "https://www.facebook.com/profile.php?id=100081041916249" },
              ].map(({ icons: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 grid place-items-center rounded-full glass hover:shadow-glow transition-all"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <div className="text-sm text-muted-foreground">
              Available worldwide
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Booking Q1 — Q2 projects
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Color-Creator AI. All rights reserved.</span>
          <span>Crafted with cinematic intent.</span>
        </div>
      </div>
    </footer>
  );
}
