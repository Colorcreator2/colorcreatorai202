export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-[0.18]"
        style={{
          background:
            "radial-gradient(circle, #7C5CFF, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 -right-40 h-[600px] w-[600px] rounded-full opacity-[0.14]"
        style={{
          background:
            "radial-gradient(circle, #3DA9FC, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
    </div>
  );
}
