'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Detectar scroll para adicionar efeito no header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationLinks = [
    { href: '/', label: 'Início' },
    { href: '/imoveis', label: 'Imóveis' },
    { href: '/sobre', label: 'Quem Somos' },
    { href: '/contactos', label: 'Contactos' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-premium' 
          : 'bg-transparent'
      }`}
    >
      {/* Barra superior com informações de contacto */}
      <div 
        className={`border-b border-silver-200 transition-all duration-300 ${
          isScrolled ? 'hidden' : 'block'
        }`}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6 text-navy-700">
              <a 
                href="tel:+351211627071" 
                className="flex items-center gap-2 hover:text-gold-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">(+351) 211 627 071</span>
              </a>
              <a 
                href="mailto:geral@qvimobiliaria.pt" 
                className="flex items-center gap-2 hover:text-gold-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden md:inline">geral@qvimobiliaria.pt</span>
              </a>
            </div>
            <div className="text-navy-600 text-xs hidden lg:block">
              AMI 17398 | Mediação Imobiliária de Excelência
            </div>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <nav className="container-premium">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-navy-950 group-hover:text-gold-500 transition-colors">
                QV
              </span>
              <span className="text-xs font-medium text-navy-600 tracking-wider uppercase">
                Imobiliária
              </span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy-800 hover:text-gold-500 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <Link
            href="/contactos"
            className="hidden md:inline-flex btn-gold"
          >
            Agende a Sua Visita
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-navy-950 hover:text-gold-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-silver-200"
          >
            <div className="container-premium py-6">
              <div className="flex flex-col gap-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-navy-800 hover:text-gold-500 font-medium py-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contactos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-gold mt-4"
                >
                  Agende a Sua Visita
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
