function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[var(--border)]">
      <h2 className="text-2xl font-semibold mb-10">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Frontend */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-[var(--text-secondary)] mb-3">
            Frontend
          </h3>
          <p className="leading-relaxed">
            React, JavaScript (ES6+), Tailwind CSS, HTML, CSS
          </p>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-[var(--text-secondary)] mb-3">
            Backend
          </h3>
          <p className="leading-relaxed">
            Node.js, Express, MongoDB, REST APIs
          </p>
        </div>

        {/* Computer Science */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-[var(--text-secondary)] mb-3">
            Computer Science
          </h3>
          <p className="leading-relaxed">
            Data Structures & Algorithms, OOP, DBMS, OS
          </p>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-sm uppercase tracking-wide text-[var(--text-secondary)] mb-3">
            Tools
          </h3>
          <p className="leading-relaxed">
            Git, GitHub, Linux, VS Code, Postman
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
