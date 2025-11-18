import React from 'react'
import LiquidButton from './LiquidButton'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="text-white font-semibold tracking-widest">ABOH</div>
        <div className="flex items-center gap-3">
          <LiquidButton href="#work">Work</LiquidButton>
          <LiquidButton href="#about">About</LiquidButton>
          <LiquidButton href="#contact">Contact</LiquidButton>
        </div>
      </div>
    </nav>
  )
}
