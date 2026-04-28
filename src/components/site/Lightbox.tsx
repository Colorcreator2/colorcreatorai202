import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Item = { src: string; caption?: string };

export function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: Item[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, onClose, onPrev, onNext]);

  if (index === null) return null;
  const current = items[index];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-xl animate-fade-up"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
        className="absolute top-6 right-6 h-11 w-11 grid place-items-center rounded-full glass-strong hover:bg-white/10 transition-colors"
      >
        <X size={20} />
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 h-12 w-12 grid place-items-center rounded-full glass-strong hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next"
            className="absolute right-4 md:right-8 h-12 w-12 grid place-items-center rounded-full glass-strong hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}
      <figure
        className="max-w-[92vw] max-h-[88vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.caption ?? ""}
          className="max-w-[92vw] max-h-[78vh] object-contain rounded-2xl shadow-elevated"
        />
        {current.caption && (
          <figcaption className="text-sm text-muted-foreground text-center max-w-2xl">
            {current.caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}