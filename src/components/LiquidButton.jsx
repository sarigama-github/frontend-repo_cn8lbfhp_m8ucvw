import React from 'react'
import { motion } from 'framer-motion'

/*
  Liquid Glass Button
  - Iridescent/neo-chrome sheen
  - Subtle inner glow and glass blur
  - Fluid hover morph with micro-bounce
*/
export default function LiquidButton({ children, href = '#', onClick, className = '' }) {
  const base =
    'relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium text-white/90 select-none ' +
    'backdrop-blur-xl bg-white/5 border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] '

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={base + ' ' + className}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      style={{
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      {/* Iridescent liquid sheen */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute -inset-1 bg-[conic-gradient(from_180deg_at_50%_50%,#8EC5FF_0deg,#E0B1FF_90deg,#8EC5FF_180deg,#E0B1FF_270deg,#8EC5FF_360deg)] opacity-20 blur-md" />
        <span className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
        <span className="absolute inset-0 rounded-xl shadow-[0_0_30px_5px_rgba(168,85,247,0.15)]" />
      </span>

      <span className="relative z-10 mix-blend-screen">{children}</span>
    </motion.a>
  )
}
