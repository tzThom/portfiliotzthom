"use client"

import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Quantum",
    description: "A next-generation design system built for scale. Features dark mode, accessibility, and seamless integration with modern frameworks.",
    tags: ["React", "TypeScript", "Storybook"],
    link: "#",
    featured: true,
  },
  {
    title: "Nebula",
    description: "Real-time collaborative workspace for remote teams. Built with WebSockets and optimistic updates for lightning-fast performance.",
    tags: ["Next.js", "WebSocket", "PostgreSQL"],
    link: "#",
    featured: true,
  },
  {
    title: "Pulse",
    description: "Analytics dashboard with real-time data visualization. Custom charts and interactive filters for deep insights.",
    tags: ["React", "D3.js", "GraphQL"],
    link: "#",
    featured: false,
  },
  {
    title: "Echo",
    description: "Voice-controlled smart home interface. Natural language processing meets intuitive design.",
    tags: ["Python", "TensorFlow", "React Native"],
    link: "#",
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">
              Selected Work
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-balance">
              Projects I&apos;ve built
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              className={cn(
                "group relative p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300",
                project.featured && "md:col-span-1"
              )}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-muted-foreground text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <h3 className="text-2xl font-light mb-4 group-hover:text-foreground transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground px-3 py-1 bg-secondary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <a
          href="#"
          className="md:hidden flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-8"
        >
          View all projects
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
