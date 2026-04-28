import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Mail, MessageCircle, Instagram, Phone } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a Project — Color-Creator AI" },
      {
        name: "description",
        content:
          "Tell us about your brand and the content you need. We take on a limited number of projects each quarter.",
      },
      { property: "og:title", content: "Start a Project — Color-Creator AI" },
      {
        property: "og:description",
        content: "Start your premium content project with Color-Creator AI.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Start Your <span className="gradient-text">Project</span>.
            </>
          }
          description="Tell us what you need — we'll handle the creative."
        />

        <ContactChannels />

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative glass-strong rounded-3xl p-6 md:p-10 shadow-elevated overflow-hidden">
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, var(--neon-purple), transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-muted-foreground w-fit">
                <Sparkles size={12} className="text-primary" />
                Serious brands only — limited slots each quarter.
              </div>

              <div className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10">
                <iframe
                  aria-label="Color-creator Ai"
                  src="https://forms.zohopublic.com/colorcreatorai1/form/ColorcreatorAi/formperma/iVnUApsvAOy4g5uACcN6DpghQtlZ0ZOs4fE8emSXq5Q"
                  style={{ border: "none" }}
                  className="w-full h-[800px] block"
                />
              </div>

              <p className="mt-6 text-sm text-center text-muted-foreground">
                We'll get back to you within 24–48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactChannels() {
  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+234 807 893 1982",
      href: "https://wa.me/2348078931982",
      cta: "Chat on WhatsApp",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@colorcreator_ai",
      href: "https://instagram.com/colorcreator_ai",
      cta: "Follow on Instagram",
    },
    {
      icon: Mail,
      label: "Email",
      value: "okirikachika530@gmail.com",
      href: "mailto:okirikachika530@gmail.com",
      cta: "Send an email",
    },
  ];
  return (
    <div className="mt-14 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
      {channels.map(({ icon: Icon, label, value, href, cta }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="group glass rounded-2xl p-5 flex flex-col gap-3 hover:shadow-glow transition-all"
        >
          <div className="flex items-center gap-3">
            <span
              className="h-10 w-10 grid place-items-center rounded-full text-primary-foreground"
              style={{ background: "var(--gradient-cinematic)" }}
            >
              <Icon size={16} />
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {label}
            </span>
          </div>
          <div className="text-sm text-foreground font-medium break-all">
            {value}
          </div>
          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            {cta} →
          </span>
        </a>
      ))}
      <a
        href="https://wa.me/2348078931982"
        target="_blank"
        rel="noreferrer"
        className="sm:col-span-3 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition-transform"
        style={{ background: "var(--gradient-cinematic)" }}
      >
        <Phone size={16} /> Chat with us on WhatsApp
      </a>
    </div>
  );
}