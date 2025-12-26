function Experience() {
  return (
    <section id="experience" className="py-20">
  <h2 className="text-3xl font-semibold mb-10">Learning & Practice</h2>

  <div className="grid md:grid-cols-3 gap-6">
    {/* DSA */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
      <h3 className="text-lg font-medium mb-4">
        Data Structures & Algorithms
      </h3>
      <ul className="space-y-3 text-sm text-zinc-400">
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">Arrays, Strings, Hashing, Two Pointers</li>
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">Stacks, Queues, Binary Search, Recursion</li>
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">Dynamic Programming (1D & 2D)</li>
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">Graph Algorithms (BFS, DFS)</li>
      </ul>
    </div>

    {/* Full Stack */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
      <h3 className="text-lg font-medium mb-4">
        Full Stack Practice
      </h3>
      <ul className="space-y-3 text-sm text-zinc-400">
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">React UI with reusable components</li>
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">REST APIs with Node.js & Express</li>
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">Authentication & CRUD operations</li>
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">MongoDB data modeling</li>
      </ul>
    </div>

    {/* Learning */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
      <h3 className="text-lg font-medium mb-4">
        Continuous Learning
      </h3>
      <ul className="space-y-3 text-sm text-zinc-400">
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">Consistent problem-solving practice</li>
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">Understanding real-world codebases</li>
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">Improving Git and debugging skills</li>
        <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-500">Strengthening CS fundamentals</li>
      </ul>
    </div>
  </div>
</section>

  );
}

export default Experience;
