import { ArrowUpRight, Mail, Copy } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-balance">
            Let&apos;s build something great together
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-xl">
            I&apos;m currently open to new opportunities and collaborations. 
            Whether you have a project in mind or just want to say hi, feel free to reach out.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:hello@alexchen.dev"
              className="group flex items-center gap-4 text-xl md:text-2xl hover:text-muted-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@alexchen.dev</span>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm hover:bg-foreground hover:text-background transition-all"
            >
              GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm hover:bg-foreground hover:text-background transition-all"
            >
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm hover:bg-foreground hover:text-background transition-all"
            >
              Twitter
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
