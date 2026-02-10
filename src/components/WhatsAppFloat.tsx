'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '351211627071'
  const message = 'Olá! Gostaria de obter mais informações sobre os imóveis da QV Imobiliária.'

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    setIsOpen(false)
  }

  return (
    <>
      {/* Botão Principal */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
          aria-label="Abrir WhatsApp"
        >
          <motion.div
            animate={isOpen ? { rotate: 90, scale: 0.8 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
          </motion.div>
          
          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        </button>
      </motion.div>

      {/* Menu Expandido */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-8 z-40 bg-white rounded-2xl shadow-2xl border border-silver-200 p-6 w-80"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-950">WhatsApp QV</h3>
                <p className="text-sm text-navy-600">Resposta rápida</p>
              </div>
            </div>

            <p className="text-sm text-navy-700 mb-4">
              Fale connosco agora e tire todas as suas dúvidas sobre os nossos imóveis de luxo.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="w-full btn-premium text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Iniciar Conversa
            </button>

            <p className="text-xs text-navy-500 text-center mt-3">
              Disponível: Seg-Sex 09:00-19:00
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default WhatsAppFloat
