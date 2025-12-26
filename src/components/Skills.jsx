function Skills() {
  return (
    <section className="py-20">
  <h2 className="text-3xl font-semibold mb-10">Skills</h2>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        title: "Problem Solving",
        skills: ["DSA", "Algorithms", "Dynamic Programming", "Graphs", "BFS", "DFS"],
      },
      {
        title: "Frontend",
        skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
      },
      {
        title: "Backend",
        skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Git"],
      },
    ].map((item) => (
      <div
        key={item.title}
        className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition"
      >
        <h3 className="text-xl font-medium mb-4">{item.title}</h3>
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

  );
}

export default Skills;
