import { motion } from "framer-motion";

const experience = [
  { year: "2018 – Present", role: "Senior Advocate – Supreme Court" },
  { year: "2014 – 2018", role: "Legal Advisor – Corporate Firms" },
  { year: "2011 – 2014", role: "Junior Advocate – District Court" },
];

export default function Experience() {
  return (
    <section>
      <h2>Professional Experience</h2>

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <span>{item.year}</span>
            <p>{item.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
