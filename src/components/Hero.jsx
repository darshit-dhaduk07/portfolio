import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="py-24">
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Darshit Dhaduk
          </h1>

          <p className="text-lg text-[var(--text-secondary)]">
            Computer Engineering Student · Full Stack Developer
          </p>

          <p className="max-w-xl text-[var(--text-secondary)] leading-relaxed">
            I focus on data structures, problem solving, and building clean,
            maintainable web applications using React, Node.js, and modern
            JavaScript.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-5 py-2 border border-[var(--border)] hover:border-[var(--accent)] transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="px-5 py-2 border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Darshit Dhaduk"
            className="
    w-40 h-40 md:w-48 md:h-48
    object-cover
    rounded-xl
    border border-[var(--border)]
    bg-gray-300
  "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
