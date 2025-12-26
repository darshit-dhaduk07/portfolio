import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        {children}
      </main>
    </div>
  );
}

export default Layout;
