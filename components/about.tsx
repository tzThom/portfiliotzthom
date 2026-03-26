import { Github, Linkedin, Twitter } from "lucide-react"

const skills = [
  { category: "Languages", items: ["Luau", "Node.js", "Discord.js"] },
  { category: "Tools", items: ["Visual Studio Code", "Roblox Studio", "Figma"] },
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
              Roblox developer building immersive and scalable systems
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Roblox developer focused on creating engaging and optimized 
                game systems. From UI/UX to backend logic, I design experiences that 
                are both smooth and enjoyable for players.
              </p>

              <p>
                I specialize in Luau scripting, DataStore systems, custom UI, and 
                advanced features like voice chat interactions, donation systems, 
                and player progression. I also build Discord bots to support and 
                manage communities around my projects.
              </p>

              <p>
                My goal is simple: create clean, efficient systems and unique 
                gameplay experiences that players actually remember.
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
                <h3 className="text-sm text-muted-foreground mb-4">
                  {skill.category}
                </h3>

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