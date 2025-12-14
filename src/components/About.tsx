import { FaDownload } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

function About() {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Javascript",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "PHP",
    "laravel",
    "Node.js",
    "Express.js",
  ];
  const devOpsSkills = [
    "Docker",
    "Kubernetes",
    "Google Cloud",
    "Jenkins",
    "Git",
    "GitHub",
    "GitLab",
    "CI/CD",
  ];
  const databaseSkills = [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Firebase",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="container mx-auto px-4 w-5/6">
          <h2 className="text-4xl font-bold mb-2 text-center"> About Me</h2>

          <div className="rounded-xl py-2 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-md font-medium text-gray-600 mb-6 text-center tracking-tighter">
              A passionate Software Engineer with over 5 years of experience,
              specializing in building scalable web applications and innovative
              solutions. Proficient in full-stack development (Laravel, Node.js,
              React), I have a strong background in developing ERP, CRM, and API
              integration systems. I am a collaborative, solution-oriented
              professional experienced in working with cross-functional teams to
              enhance business efficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all justify-center">
                <h3 className="text-xl font-bold mb-4 text-center">Frontend</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all justify-center">
                <h3 className="text-xl font-bold mb-4 text-center"> Backend</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all justify-center">
                <h3 className="text-xl font-bold mb-4 text-center"> DevOps</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {devOpsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all justify-center">
                <h3 className="text-xl font-bold mb-4 text-center">
                  {" "}
                  Database
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {databaseSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center py-5 w-full mt-8">
              <button className="flex items-center gap-2 px-5 py-3 rounded-lg  cursor-pointer items bg-blue-500 hover:bg-blue-600 hover:text-blue-400 text-white animate-pulse">
                <span className="text-end text-lg font-medium leading-1">
                  My Resume
                </span>
                <FaDownload className="text-md" />
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
