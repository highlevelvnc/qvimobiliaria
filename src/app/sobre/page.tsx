import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, TrendingUp, ShieldCheck, Users, Target, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quem Somos | A Nossa História e Valores',
  description: 'Conheça a QV Imobiliária - AMI 17398. Venda Ágil, Eficaz e sem Preocupações. Transformamos Imóveis em Negócios Bem Sucedidos em Lisboa, Cascais, Oeiras e Abrantes.',
  keywords: ['QV Imobiliária', 'AMI 17398', 'mediação imobiliária', 'sobre nós', 'história'],
}

export default function SobrePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <div className="gold-divider mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Quem Somos
            </h1>
            <p className="text-xl md:text-2xl text-silver-200 leading-relaxed">
              A QV Imobiliária é sinónimo de excelência, confiança e resultados
              no mercado imobiliário premium em Portugal.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-24 bg-white">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-divider mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-950 mb-6">
                Venda Ágil, Eficaz e sem Preocupações
              </h2>
              <div className="space-y-4 text-lg text-navy-700 leading-relaxed">
                <p>
                  Na <strong>QV Imobiliária</strong>, transformamos imóveis em negócios bem-sucedidos.
                  Com a certificação <strong>AMI 17398</strong>, posicionamo-nos como referência
                  na mediação imobiliária de luxo em Portugal.
                </p>
                <p>
                  A nossa missão é proporcionar aos nossos clientes uma experiência de venda
                  ou aquisição de imóveis sem igual, caracterizada pela agilidade nos processos,
                  eficácia nos resultados e total tranquilidade em cada etapa.
                </p>
                <p>
                  Acreditamos que cada propriedade tem uma história única e merece uma estratégia
                  personalizada. Por isso, dedicamos toda a nossa experiência e conhecimento
                  do mercado para valorizar o seu património e alcançar os melhores resultados.
                </p>
              </div>
            </div>

            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2400&auto=format&fit=crop"
                alt="QV Imobiliária - Excelência em Mediação Imobiliária"
                fill
                className="object-cover shadow-premium-lg"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-24 bg-silver-50">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="gold-divider mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-950 mb-6">
              Os Nossos Valores
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Princípios que guiam cada decisão e cada interação com os nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Valor 1 */}
            <div className="bg-white p-8 border border-silver-200 hover:border-gold-500 hover:shadow-premium-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-4">
                Confiança
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Construímos relações duradouras baseadas na transparência, honestidade
                e compromisso com os interesses dos nossos clientes.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="bg-white p-8 border border-silver-200 hover:border-gold-500 hover:shadow-premium-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-4">
                Excelência
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Procuramos a perfeição em cada detalhe, desde a apresentação dos imóveis
                até ao acompanhamento pós-venda.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="bg-white p-8 border border-silver-200 hover:border-gold-500 hover:shadow-premium-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-4">
                Resultados
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Focamo-nos em estratégias eficazes que maximizam o valor do seu imóvel
                e garantem negociações bem-sucedidas.
              </p>
            </div>

            {/* Valor 4 */}
            <div className="bg-white p-8 border border-silver-200 hover:border-gold-500 hover:shadow-premium-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-4">
                Proximidade
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Mantemos uma comunicação constante e personalizada, estando sempre
                disponíveis para esclarecer dúvidas e dar apoio.
              </p>
            </div>

            {/* Valor 5 */}
            <div className="bg-white p-8 border border-silver-200 hover:border-gold-500 hover:shadow-premium-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-4">
                Profissionalismo
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Operamos com os mais altos padrões éticos e profissionais, sempre
                em conformidade com a legislação vigente.
              </p>
            </div>

            {/* Valor 6 */}
            <div className="bg-white p-8 border border-silver-200 hover:border-gold-500 hover:shadow-premium-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-4">
                Dedicação
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Cada cliente e cada imóvel recebe a nossa total atenção e empenho
                para alcançar os objetivos definidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Nos Diferencia */}
      <section className="py-24 bg-white">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="gold-divider mx-auto" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-950 mb-6">
                O Que Nos Diferencia
              </h2>
            </div>

            <div className="space-y-12">
              {/* Diferencial 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-3">
                    Conhecimento Profundo do Mercado
                  </h3>
                  <p className="text-lg text-navy-700 leading-relaxed">
                    Anos de experiência nas regiões mais prestigiadas de Portugal permitem-nos
                    avaliar corretamente cada propriedade e posicioná-la estrategicamente no mercado.
                  </p>
                </div>
              </div>

              {/* Diferencial 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-3">
                    Marketing Premium
                  </h3>
                  <p className="text-lg text-navy-700 leading-relaxed">
                    Utilizamos fotografia profissional, vídeos de alta qualidade e estratégias
                    de marketing digital para destacar o seu imóvel e atrair os compradores certos.
                  </p>
                </div>
              </div>

              {/* Diferencial 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-3">
                    Acompanhamento Completo
                  </h3>
                  <p className="text-lg text-navy-700 leading-relaxed">
                    Do primeiro contacto ao fecho do negócio, acompanhamos cada etapa do processo,
                    tratando de toda a documentação e burocracia para que não tenha preocupações.
                  </p>
                </div>
              </div>

              {/* Diferencial 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-navy-950 mb-3">
                    Rede de Contactos Exclusiva
                  </h3>
                  <p className="text-lg text-navy-700 leading-relaxed">
                    Acesso a uma vasta rede de potenciais compradores e investidores, nacionais
                    e internacionais, interessados em propriedades premium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-24 bg-navy-950 text-white">
        <div className="container-premium">
          <div className="text-center mb-16">
            <div className="gold-divider mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Áreas de Atuação
            </h2>
            <p className="text-xl text-silver-200 max-w-3xl mx-auto leading-relaxed">
              Presença estratégica nas localizações mais procuradas de Portugal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                city: 'Lisboa',
                description: 'Capital cosmopolita com património histórico e cultural único',
              },
              {
                city: 'Cascais',
                description: 'Litoral de prestígio com praias deslumbrantes e qualidade de vida',
              },
              {
                city: 'Oeiras',
                description: 'Concelho moderno com excelentes infraestruturas e escolas',
              },
              {
                city: 'Abrantes',
                description: 'Localização estratégica com oportunidades de investimento',
              },
            ].map((location) => (
              <div
                key={location.city}
                className="p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-bold mb-3 text-gold-500">
                  {location.city}
                </h3>
                <p className="text-silver-200">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-navy-950 to-navy-800 text-white p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-xl text-silver-200 mb-8 leading-relaxed">
              Quer vender o seu imóvel ou está à procura da propriedade ideal?
              Entre em contacto connosco e descubra como podemos ajudá-lo.
            </p>
            <Link href="/contactos" className="inline-flex btn-gold text-lg">
              Contacte-nos Hoje
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
