import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2023 — Present",
    role: "Senior Frontend Engineer",
    company: "Vercel",
    description: "Building the future of web development. Leading the design system team and contributing to Next.js ecosystem.",
    link: "https://vercel.com",
    skills: ["Next.js", "TypeScript", "React"],
  },
  {
    period: "2021 — 2023",
    role: "Full-Stack Developer",
    company: "Linear",
    description: "Built core features for the issue tracking platform. Improved performance by 40% through optimization initiatives.",
    link: "https://linear.app",
    skills: ["React", "GraphQL", "Node.js"],
  },
  {
    period: "2019 — 2021",
    role: "Software Engineer",
    company: "Stripe",
    description: "Developed payment infrastructure components. Worked on checkout optimization and fraud detection systems.",
    link: "https://stripe.com",
    skills: ["Ruby", "React", "PostgreSQL"],
  },
  {
    period: "2018 — 2019",
    role: "Frontend Developer",
    company: "Notion",
    description: "Created interactive UI components and improved editor performance. Contributed to the design system.",
    link: "https://notion.so",
    skills: ["React", "TypeScript", "CSS"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-balance">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-8 border-t border-border last:border-b hover:bg-card/50 -mx-6 px-6 transition-colors"
            >
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                <div className="text-sm text-muted-foreground">
                  {exp.period}
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium">
                      {exp.role}
                    </h3>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                      {exp.company}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 max-w-2xl">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-muted-foreground px-3 py-1 bg-secondary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
