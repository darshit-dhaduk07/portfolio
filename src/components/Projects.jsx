function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Portfolio Website",
            desc: "Personal portfolio to showcase projects, skills, and contact information.",
            tech: ["React", "Tailwind CSS", "Vite"],
            live: "#",
            github: "#",
          },
          {
            title: "Full Stack CRUD App",
            desc: "A full-stack application with authentication and CRUD operations.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            live: "#",
            github: "#",
          },
        ].map((project) => (
          <div
            key={project.title}
            className="bg-zinc-900 border flex flex-col h-full border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition"
          >
            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
            <p className="text-zinc-400 text-sm mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-4 text-sm ">
              <a
                href="#"
                className="text-white hover:underline"
                target="_blank"
              >
                Live
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
