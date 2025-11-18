import React from 'react'
import LiquidButton from './LiquidButton'

const Section = ({ id, title, children }) => (
  <section id={id} className="relative py-28 md:py-36 border-t border-white/10">
    <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
    <div className="relative z-10 mx-auto max-w-5xl px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">{title}</h2>
      <div className="text-white/70 leading-relaxed">
        {children}
      </div>
    </div>
  </section>
)

export default function Sections() {
  return (
    <div className="bg-black">
      <Section id="work" title="Featured Motion">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="aspect-video bg-gradient-to-br from-white/10 to-transparent" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-white/80">Liquid Glass #{i}</p>
                  <LiquidButton href="#" className="px-3 py-1 text-xs">View</LiquidButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" title="About ABOH">
        <p>
          We craft immersive, liquid-like interactions with a futuristic aesthetic. Our work blends real-time 3D with elegant
          motion to create experiences that feel alive. Every pixel flows.
        </p>
      </Section>

      <Section id="contact" title="Start a project">
        <div className="flex flex-wrap items-center gap-3">
          <LiquidButton href="mailto:contact@aboh.studio">Email us</LiquidButton>
          <LiquidButton href="#reel">Watch the reel</LiquidButton>
        </div>
      </Section>
    </div>
  )
}
