function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[var(--border)]">
      <h2 className="text-2xl font-semibold mb-8">Contact</h2>

      <div className="max-w-3xl space-y-4 text-[var(--text-secondary)]">
        <p>
          I’m currently open to learning opportunities, internships, and
          collaboration on interesting projects.
        </p>

        <div className="space-y-2 text-sm">
          <p>
            Email:{" "}
            <a
              href="mailto:darshitdhaduk129@gmail.com"
              className="underline underline-offset-4 hover:text-[var(--text-primary)]"
            >
              darshitdhaduk129@gmail.com
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/darshit-dhaduk07"
              target="_blank"
              className="underline underline-offset-4 hover:text-[var(--text-primary)]"
            >
              https://github.com/darshit-dhaduk07
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/darshitdhaduk7/"
              target="_blank"
              className="underline underline-offset-4 hover:text-[var(--text-primary)]"
            >
              https://www.linkedin.com/in/darshitdhaduk7/
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
