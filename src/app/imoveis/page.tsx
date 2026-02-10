import type { Metadata } from 'next'
import PropertyCard from '@/components/PropertyCard'
import { properties } from '@/data/properties'

export const metadata: Metadata = {
  title: 'Imóveis de Luxo | Moradias e Apartamentos Premium',
  description: 'Descubra a nossa seleção exclusiva de imóveis de luxo em Lisboa, Cascais, Oeiras e Abrantes. Moradias, apartamentos e terrenos premium.',
  keywords: ['imóveis luxo portugal', 'moradias cascais', 'apartamentos lisboa', 'imóveis premium oeiras'],
}

export default function ImoveisPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
        <div className="container-premium">
          <div className="max-w-3xl">
            <div className="gold-divider mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Imóveis Exclusivos
            </h1>
            <p className="text-xl text-silver-200 leading-relaxed">
              Explore a nossa seleção cuidadosamente curada de propriedades premium
              nas localizações mais prestigiadas de Portugal.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros - Preparado para expansão futura */}
      <section className="py-8 bg-white border-b border-silver-200">
        <div className="container-premium">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="text-navy-600 font-medium">
              {properties.length} {properties.length === 1 ? 'Imóvel Disponível' : 'Imóveis Disponíveis'}
            </div>
            
            {/* Espaço preparado para filtros futuros */}
            <div className="ml-auto text-sm text-navy-500">
              Filtros: Em breve disponíveis (Tipo, Localização, Preço)
            </div>
          </div>
        </div>
      </section>

      {/* Listagem de Imóveis */}
      <section className="py-16 bg-silver-50">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Mensagem quando não há imóveis */}
          {properties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-navy-600">
                Não foram encontrados imóveis com os critérios selecionados.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-navy-950 to-navy-800 text-white p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Não Encontrou o Imóvel Ideal?
            </h2>
            <p className="text-xl text-silver-200 mb-8 leading-relaxed">
              Entre em contacto connosco. Temos acesso a uma vasta rede de imóveis
              exclusivos que podem não estar ainda publicados no nosso site.
            </p>
            <a
              href="/contactos"
              className="inline-flex btn-gold text-lg"
            >
              Fale Connosco
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
