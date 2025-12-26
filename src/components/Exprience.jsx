function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[var(--border)]">
      <h2 className="text-2xl font-semibold mb-12">Learning & Practice</h2>

      <div className="space-y-14 max-w-3xl">
        {/* DSA */}
        <div>
          <h3 className="text-lg font-medium mb-4">
            Data Structures & Algorithms
          </h3>

          <ul className="space-y-3 text-[var(--text-secondary)] leading-relaxed list-disc pl-5">
            <li className="pl-1">
              Covered major DSA topics including arrays, strings, hashing, two
              pointers, sliding window, stacks, queues, and binary search.
            </li>
            <li className="pl-1">
              Studied dynamic programming (1D & 2D), recursion, and basic greedy
              techniques with focus on state definition and transitions.
            </li>
            <li className="pl-1">
              Practiced graph algorithms including BFS, DFS, and traversal
              patterns for problem solving.
            </li>
            <li className="pl-1">
              Emphasized problem-solving approach, edge cases, and time–space
              complexity analysis.
            </li>
          </ul>
        </div>

        {/* Full Stack */}
        <div>
          <h3 className="text-lg font-medium mb-4">
            Full Stack Development (Academic & Personal)
          </h3>

          <ul className="space-y-3 text-[var(--text-secondary)] leading-relaxed list-disc pl-5">
            <li className="pl-1">
              Built full-stack applications using React, Node.js, Express, and
              MongoDB.
            </li>
            <li className="pl-1">
              Implemented authentication, REST APIs, and CRUD functionality in
              personal projects.
            </li>
            <li className="pl-1">
              Focused on clean UI, reusable components, and readable backend
              logic.
            </li>
          </ul>
        </div>

        {/* Open Source */}
        <div>
          <h3 className="text-lg font-medium mb-4">
            Open Source (Learning Phase)
          </h3>

          <ul className="space-y-3 text-[var(--text-secondary)] leading-relaxed list-disc pl-5">
            <li className="pl-1">
              Studying open-source project structures and understanding
              real-world codebases.
            </li>
            <li className="pl-1">
              Learning Git workflows, issue tracking, and contribution
              guidelines.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
