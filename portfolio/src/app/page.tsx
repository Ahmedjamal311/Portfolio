export default function Home() {
  const projects = [
    {
      title: "Project Alpha",
      description:
        "A full-stack web application built with React and Node.js. Features include real-time updates, user authentication, and responsive design.",
      tech: ["React", "Node.js", "MongoDB", "WebSocket"],
    },
    {
      title: "Project Beta",
      description:
        "Mobile-first e-commerce platform with payment integration, inventory management, and analytics dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    },
    {
      title: "Project Gamma",
      description:
        "AI-powered data visualization tool that transforms complex datasets into intuitive, interactive charts.",
      tech: ["Python", "TensorFlow", "D3.js", "FastAPI"],
    },
  ];

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-5xl w-full text-center space-y-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight">
            Hello, I'm <span className="text-yellow-400">Your Name</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-normal">
            Full-Stack Developer & Creative Problem Solver
          </h2>
          <div className="space-y-6 pt-4">
            <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
              I'm a passionate developer with expertise in building elegant
              solutions to complex problems. With a focus on clean code and user
              experience, I create applications that make a difference.
            </p>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
              My journey in tech has led me through various domains, from web
              development to AI integration, always with an eye for detail and a
              commitment to excellence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A collection of my recent work showcasing various technologies and
              problem-solving approaches.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-black border-2 border-gray-800 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-transparent text-yellow-400 text-sm px-4 py-2 rounded-lg border border-yellow-400/30 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 font-semibold py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8">
            Let's <span className="text-yellow-400">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300 text-lg mb-8"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            your.email@example.com
          </a>

          <div className="flex justify-center gap-8 mt-8">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}