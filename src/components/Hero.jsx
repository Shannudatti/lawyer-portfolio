import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Justice.<br />Integrity.<br />Excellence.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Providing professional legal services with dedication,
        discretion, and experience.
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Book Consultation
      </motion.button>
    </section>
  );
}
