const posts = [
  {
    title: "Understanding Criminal Law in India",
    date: "Jan 2026",
  },
  {
    title: "Corporate Legal Compliance Explained",
    date: "Dec 2025",
  },
  {
    title: "How to Prepare for a Court Hearing",
    date: "Nov 2025",
  },
];

export default function Blog() {
  return (
    <section>
      <h2>Articles & Insights</h2>
      <div className="grid">
        {posts.map((post, i) => (
          <div className="card" key={i}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
