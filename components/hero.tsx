"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId = 0
    let width = 0
    let height = 0
    let centerX = 0
    let centerY = 0
    let fade = 0.08
    let fadeDirection = 1

    const particleCount = 100
    const particles: Particle[] = []

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    })

    const resetParticle = (particle: Particle) => {
      particle.x = Math.random() * width
      particle.y = Math.random() * height
      particle.vx = (Math.random() - 0.5) * 0.3
      particle.vy = (Math.random() - 0.5) * 0.3
      particle.size = Math.random() * 2 + 0.3
      particle.opacity = Math.random() * 0.5 + 0.1
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      width = window.innerWidth
      height = window.innerHeight
      centerX = width / 2
      centerY = height / 2

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    resize()

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle())
    }

    const animate = () => {
      fade += 0.002 * fadeDirection

      if (fade >= 0.2) {
        fade = 0.2
        fadeDirection = -1
      } else if (fade <= 0.04) {
        fade = 0.04
        fadeDirection = 1
      }

      ctx.fillStyle = `rgba(10, 10, 10, ${fade})`
      ctx.fillRect(0, 0, width, height)

      for (const particle of particles) {
        const dx = centerX - particle.x
        const dy = centerY - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy) || 1

        const force = Math.min(0.5, 50 / (dist + 1))

        particle.vx += (dx / dist) * force * 0.01
        particle.vy += (dy / dist) * force * 0.01

        particle.x += particle.vx
        particle.y += particle.vy

        if (
          dist < 50 ||
          particle.x < -50 ||
          particle.x > width + 50 ||
          particle.y < -50 ||
          particle.y > height + 50
        ) {
          resetParticle(particle)
          continue
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()
      }

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150)
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.05)")
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.02)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      animationId = window.requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
        style={{ background: "transparent" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Lua Developer
        </p>

        <h1 className="mb-8 text-6xl font-light tracking-tight text-balance md:text-8xl lg:text-9xl xl:text-[10rem]">
          TzThom
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
          Creator of Roblox games for fun. As a Roblox game creator, both for fun, I specialize in designing voice chat experiences that captivate
          French players. My passion for game development drives me to constantly innovate
          and create memorable adventures.
        </p>

        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
            Available for work
          </span>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}