'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PremiumLoader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 5
      })
    }, 80)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#c9b87a 1px, transparent 1px), linear-gradient(90deg, #c9b87a 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="text-center relative z-10">
        {/* Logo Animado Premium */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl bg-gold-500/30 rounded-full scale-150" />
            
            <div className="relative">
              <motion.h1 
                className="text-8xl md:text-9xl font-serif font-bold text-white mb-2 tracking-tight"
                style={{
                  textShadow: '0 0 40px rgba(201, 184, 122, 0.5)',
                }}
              >
                QV
              </motion.h1>
              <motion.p 
                className="text-sm font-medium text-gold-500 tracking-[0.4em] uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Imobiliária
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Barra de Progresso Premium com animação de shimmer */}
        <div className="w-80 mx-auto mb-8">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden relative">
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Progress bar */}
            <motion.div
              className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect na ponta */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-gold-400 rounded-full blur-md" />
            </motion.div>
          </div>
          
          {/* Percentage */}
          <motion.p
            className="text-gold-500 text-sm font-semibold mt-3 text-center"
            key={progress}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {progress}%
          </motion.p>
        </div>

        {/* Texto de Loading com efeito de digitação */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <p className="text-silver-300 text-sm">
            A carregar experiência premium...
          </p>
          <motion.div
            className="flex justify-center gap-1"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-gold-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Partículas Decorativas Melhoradas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              <div className="w-1 h-1 bg-gold-500 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Círculos decorativos */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-gold-500/20 rounded-full"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
