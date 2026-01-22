import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about">
      <div className="about-grid">
        
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Replace with lawyer photo */}
          <img src="https://via.placeholder.com/420x520" alt="Lawyer" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>About the Lawyer</h2>
          <p>
            With over a decade of experience in criminal, civil, and corporate law,
            we provide reliable legal representation grounded in integrity and
            professionalism.
          </p>
          <p>
            Our mission is to protect client rights while delivering justice with
            clarity, discretion, and strategic insight.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
