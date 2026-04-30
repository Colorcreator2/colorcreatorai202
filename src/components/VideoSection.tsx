import { motion } from "framer-motion";

const videos = [
  "/public/CCwebvideos/CCwebvid03.mp4",
  "/public/CCwebvideos/CCwebvid.mp4",
  "/public/CCwebvideos/CCwebvid2.mp4",
  "/public/CCwebvideos/CCwebvid04.mp4",
];

export default function VideoSection() {
  return (
    <section className="w-full bg-black py-20 px-6">

      {/* 2x2 GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

        {videos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative overflow-hidden rounded-2xl group"
          >

            {/* LANDSCAPE VIDEO (SMOOTH LOOP) */}
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />

            {/* Border */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition" />

          </motion.div>
        ))}

      </div>
    </section>
  );
}