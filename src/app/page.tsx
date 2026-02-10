import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, TrendingUp, ShieldCheck, MapPin } from 'lucide-react'
import { getFeaturedProperties } from '@/data/properties'
import PropertyCard from '@/components/PropertyCard'

export const metadata: Metadata = {
  title: 'Início',
  description:
    'QV Imobiliária - Mediação imobiliária de excelência em Lisboa, Cascais, Oeiras, Amadora, Odivelas e Benfica. Venda ágil, eficaz e sem preocupações. Especialistas em imóveis de luxo na Grande Lisboa. AMI 17398.',
  keywords: [
    'imobiliária lisboa',
    'imobiliária cascais',
    'imobiliária oeiras',
    'imobiliária amadora',
    'imobiliária odivelas',
    'imobiliária benfica',
    'mediação imobiliária grande lisboa',
    'comprar casa lisboa',
    'vender casa cascais',
    'apartamentos oeiras',
    'moradias cascais',
    'arrendamento lisboa',
    'imóveis luxo portugal',
  ],
}

export default function HomePage() {
  const featuredProperties = getFeaturedProperties()

  return (
    <>
      {/* Hero Section - Imagem Exclusiva QV Imobiliária */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Premium com opacidade otimizada */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-luxury-villa.png"
            alt="QV Imobiliária - Luxo à Beira-Mar"
            fill
            className="object-cover"
            priority
            quality={95}
          />
          {/* Overlay gradiente com opacidade refinada para realçar texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
        </div>

        {/* Conteúdo do Hero */}
        <div className="container-premium relative z-10 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-gold-500/20 border border-gold-500 backdrop-blur-sm mb-4">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
                AMI 17398 | Mediação Imobiliária Premium
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Venda Ágil, Eficaz
              <br />
              <span className="text-gradient-gold">e sem Preocupações</span>
            </h1>

            <p className="text-xl md:text-2xl text-silver-200 max-w-2xl mx-auto leading-relaxed">
              Transformamos Imóveis em Negócios Bem Sucedidos.
              <br />
              Especialistas em imóveis de luxo em Lisboa, Cascais, Oeiras e Abrantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/imoveis" className="btn-gold text-lg group">
                Descubra Imóveis Exclusivos
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contactos"
                className="btn-premium-outline text-lg text-white border-white hover:bg-white hover:text-navy-950"
              >
                Agende a Sua Visita
              </Link>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Secção: Porquê QV Imobiliária */}
      <section className="py-24 bg-white">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="gold-divider mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-950 mb-6">
              Porquê Escolher a QV Imobiliária
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Excelência, confiança e resultados. A nossa abordagem premium garante que o seu imóvel
              receba a atenção e o posicionamento que merece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vantagem 1 */}
            <div className="group p-8 border border-silver-200 hover:border-gold-500 hover:shadow-premium-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-4">
                Venda Ágil e Eficaz
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Processos otimizados e estratégias de marketing premium para vender o seu imóvel no
                menor tempo possível e pelo melhor valor.
              </p>
            </div>

            {/* Vantagem 2 */}
            <div className="group p-8 border border-silver-200 hover:border-gold-500 hover:shadow-premium-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-4">
                Sem Preocupações
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Acompanhamento total do processo. Cuidamos de toda a burocracia, documentação e
                negociação para que não tenha de se preocupar com nada.
              </p>
            </div>

            {/* Vantagem 3 */}
            <div className="group p-8 border border-silver-200 hover:border-gold-500 hover:shadow-premium-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-4">
                Autoridade e Credibilidade
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Certificação AMI 17398 e anos de experiência no mercado imobiliário premium. A sua
                confiança é a nossa prioridade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secção: Imóveis em Destaque */}
      <section className="py-24 bg-silver-50">
        <div className="container-premium">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="gold-divider" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-950 mb-4">
                Imóveis em Destaque
              </h2>
              <p className="text-lg text-navy-600">Seleção premium de propriedades exclusivas</p>
            </div>

            <Link href="/imoveis" className="hidden md:inline-flex btn-premium-outline group">
              Ver Todos os Imóveis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link href="/imoveis" className="btn-premium-outline group">
              Ver Todos os Imóveis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Secção: Áreas de Atuação */}
      <section className="py-24 bg-white">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="gold-divider mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-950 mb-6">
              Onde Atuamos
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Presença estratégica nas regiões mais procuradas de Portugal
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Lisboa', description: 'Capital cosmopolita' },
              { name: 'Cascais', description: 'Litoral de prestígio' },
              { name: 'Oeiras', description: 'Qualidade de vida' },
              { name: 'Abrantes', description: 'Oportunidades de investimento' },
            ].map((location) => (
              <div
                key={location.name}
                className="group p-8 bg-gradient-to-br from-navy-950 to-navy-800 text-white hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <MapPin className="w-10 h-10 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif font-bold mb-2">{location.name}</h3>
                <p className="text-silver-300">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 gradient-premium text-white">
        <div className="container-premium text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Pronto para Transformar o Seu Imóvel
              <br />
              num Negócio de Sucesso?
            </h2>
            <p className="text-xl text-silver-200 leading-relaxed">
              Entre em contacto connosco e descubra como a QV Imobiliária pode valorizar e vender o
              seu imóvel de forma ágil e eficaz.
            </p>
            <Link href="/contactos" className="inline-flex btn-gold text-lg group">
              Agendar Reunião
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
