import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-serif font-bold text-gold-500 mb-4">404</h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Página Não Encontrada
        </h2>

        <p className="text-xl text-silver-200 mb-12 leading-relaxed">
          Lamentamos, mas a página que procura não existe ou foi movida.
          Explore outras áreas do nosso site ou volte à página inicial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-semibold hover:bg-gold-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            Ir para a Página Inicial
          </Link>

          <Link
            href="/imoveis"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-navy-950 transition-colors"
          >
            Ver Imóveis Disponíveis
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-silver-300">
            Precisa de ajuda? Entre em contacto connosco:
          </p>
          <a
            href="tel:+351211627071"
            className="text-gold-500 hover:text-gold-400 font-semibold text-lg transition-colors"
          >
            (+351) 211 627 071
          </a>
        </div>
      </div>
    </div>
  )
}
