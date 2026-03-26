import { Github, Linkedin, Twitter } from "lucide-react"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
]

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-balance">
              Building digital products that make a difference
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a full-stack developer passionate about crafting accessible, 
                performant web experiences. My work lies at the intersection of design 
                and engineering, creating products that are both beautiful and functional.
              </p>
              <p>
                With over 5 years of experience, I&apos;ve had the opportunity to work with 
                startups and established companies, helping them build scalable 
                applications and design systems.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open source, or sharing knowledge through writing and speaking.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h3 className="text-sm text-muted-foreground mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 border border-border rounded-full text-sm hover:bg-secondary transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
