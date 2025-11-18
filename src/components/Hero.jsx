import React from 'react'
import Spline from '@splinetool/react-spline'
import LiquidButton from './LiquidButton'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-black overflow-hidden">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlay - non-interactive so it won't block Spline */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.25),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.2),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-20 flex flex-col items-start">
        <h1 className="text-5xl md:text-7xl font-[750] tracking-tight text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
          ABOH — Immersive Motion Craft
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-white/70">
          A blacked-out canvas featuring liquid chrome forms. Scroll to explore animations, interactions, and playful physics.
        </p>
        <div className="mt-8 flex gap-3">
          <LiquidButton href="#reel">Watch Reel</LiquidButton>
          <LiquidButton href="#contact" className="bg-white/10">Get in touch</LiquidButton>
        </div>
      </div>
    </section>
  )
}
