import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white">
      {/* Secção principal do footer */}
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1: Sobre */}
          <div>
            <div className="mb-6">
              <span className="text-4xl font-serif font-bold text-white">QV</span>
              <p className="text-sm text-silver-400 uppercase tracking-wider mt-1">
                Imobiliária
              </p>
            </div>
            <p className="text-silver-300 mb-6 leading-relaxed">
              Venda Ágil, Eficaz e sem Preocupações. Transformamos Imóveis em Negócios Bem Sucedidos.
            </p>
            <div className="flex items-center gap-2 text-gold-500 font-semibold">
              <span className="w-12 h-0.5 bg-gold-500"></span>
              AMI 17398
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-white">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-silver-300 hover:text-gold-500 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-gold-500 group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  href="/imoveis" 
                  className="text-silver-300 hover:text-gold-500 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-gold-500 group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Imóveis
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre" 
                  className="text-silver-300 hover:text-gold-500 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-gold-500 group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link 
                  href="/contactos" 
                  className="text-silver-300 hover:text-gold-500 transition-colors inline-flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-gold-500 group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contactos */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-white">
              Contactos
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+351211627071" 
                  className="flex items-start gap-3 text-silver-300 hover:text-gold-500 transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>(+351) 211 627 071</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:geral@qvimobiliaria.pt" 
                  className="flex items-start gap-3 text-silver-300 hover:text-gold-500 transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>geral@qvimobiliaria.pt</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=Avenida+das+Descobertas+59,+Oeiras" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-silver-300 hover:text-gold-500 transition-colors group"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>
                    Galerias Alto da Barra<br />
                    Av. das Descobertas nº 59<br />
                    Piso 1, Loja 264<br />
                    2780-053 Oeiras
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Áreas de Atuação */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-white">
              Áreas de Atuação
            </h3>
            <ul className="space-y-2 text-silver-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                Lisboa
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                Cascais
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                Oeiras
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                Abrantes
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 text-white">Siga-nos</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-silver-600 flex items-center justify-center text-silver-300 hover:border-gold-500 hover:text-gold-500 hover:scale-110 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-silver-600 flex items-center justify-center text-silver-300 hover:border-gold-500 hover:text-gold-500 hover:scale-110 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-silver-600 flex items-center justify-center text-silver-300 hover:border-gold-500 hover:text-gold-500 hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior de copyright */}
      <div className="border-t border-navy-800">
        <div className="container-premium py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-silver-400">
            <p>
              © {currentYear} QV Imobiliária. Todos os direitos reservados. | AMI 17398
            </p>
            <div className="flex gap-6">
              <Link 
                href="/politica-privacidade" 
                className="hover:text-gold-500 transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                href="/termos-condicoes" 
                className="hover:text-gold-500 transition-colors"
              >
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
