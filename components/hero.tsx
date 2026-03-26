"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        // Gravitational pull towards center (blackhole effect)
        const dx = centerX - p.x
        const dy = centerY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const force = Math.min(0.5, 50 / (dist + 1))

        p.vx += (dx / dist) * force * 0.01
        p.vy += (dy / dist) * force * 0.01

        p.x += p.vx
        p.y += p.vy

        // Reset if too close to center
        if (dist < 50) {
          p.x = Math.random() * canvas.width
          p.y = Math.random() * canvas.height
          p.vx = (Math.random() - 0.5) * 0.3
          p.vy = (Math.random() - 0.5) * 0.3
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
        ctx.fill()
      })

      // Draw center glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150)
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.05)")
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.02)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
      ctx.beginPath()
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "transparent" }}
      />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
          Full-Stack Developer
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance">
          Alex Chen
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          Crafting digital experiences at the intersection of design and technology. 
          Building performant, accessible, and beautiful web applications.
        </p>

        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            Available for work
          </span>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}
