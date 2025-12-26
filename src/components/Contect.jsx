function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[var(--border)]">
      <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>

      <div className="max-w-3xl space-y-6 text-[var(--text-secondary)]">
        <p className="leading-relaxed">
          I’m currently open to learning opportunities, internships, and
          collaboration on interesting projects.
        </p>

        <div className="space-y-3 text-sm">
          {/* Email */}
          <div>
            <span className="text-[var(--text-muted)]">Email:</span>{" "}
            <a
              href="mailto:darshitdhaduk129@gmail.com"
              className="underline underline-offset-4 hover:text-[var(--text-primary)] transition"
            >
              darshitdhaduk129@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div>
            <span className="text-[var(--text-muted)]">GitHub:</span>{" "}
            <a
              href="https://github.com/darshit-dhaduk07"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[var(--text-primary)] transition"
            >
              darshit-dhaduk07
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <span className="text-[var(--text-muted)]">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/darshitdhaduk7/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[var(--text-primary)] transition"
            >
              darshitdhaduk7
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
