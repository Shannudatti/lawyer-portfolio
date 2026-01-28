import { motion } from "framer-motion";
const areas = [
  "Criminal Law",
  "Corporate Law",
  "Family Law",
  "Civil Litigation",
  "Property Law",
  "Legal Consultation"
];

export default function PracticeAreas() {
  return (
    
    <section>
      <h2>Practice Areas</h2>
      <div className="grid">
        {areas.map(area => (
          <div className="card" key={area}>{area}</div>
        ))}
      </div>
    </section>
    
  );
}
