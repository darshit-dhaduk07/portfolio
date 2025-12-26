function Navbar() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-lg font-semibold tracking-tight">
          Darshit<span className="text-[var(--accent)]">.</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-[var(--text-secondary)]">
          <a href="#skills" className="hover:text-[var(--text-primary)]">
            Skills
          </a>
          <a href="#projects" className="hover:text-[var(--text-primary)]">
            Projects
          </a>
          <a href="#experience" className="hover:text-[var(--text-primary)]">
            Experience
          </a>
          <a href="#contact" className="hover:text-[var(--text-primary)]">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
