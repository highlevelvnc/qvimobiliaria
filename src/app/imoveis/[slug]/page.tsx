import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Maximize, Bed, Bath, Car, Award, Phone, Mail, ArrowLeft, Check } from 'lucide-react'
import { properties, getPropertyBySlug, formatPrice, formatArea } from '@/data/properties'
import PropertyGallery from '@/components/PropertyGallery'
import BrokerTools from '@/components/BrokerTools'

// ✅ Next 15: params vem tipado como Promise em alguns cenários de build (Vercel)
type PageProps = {
  params: Promise<{ slug: string }>
}

// Gerar páginas estáticas para todos os imóveis
export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }))
}

// Gerar metadata dinâmica para SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) {
    return {
      title: 'Imóvel não encontrado',
    }
  }

  return {
    title: `${property.title} | ${formatPrice(property.price)}`,
    description: property.description,
    keywords: [
      property.type,
      property.location.city,
      property.location.district,
      'imóvel luxo',
      'venda',
      formatPrice(property.price),
    ],
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.images[0]],
      type: 'website',
    },
  }
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) {
    notFound()
  }

  const getPropertyTypeLabel = (type: string): string => {
    const types: Record<string, string> = {
      moradia: 'Moradia',
      apartamento: 'Apartamento',
      terreno: 'Terreno',
      comercial: 'Comercial',
    }
    return types[type] || type
  }

  const isRental = property.price > 0 && property.price < 10000

  return (
    <>
      {/* Breadcrumb e Header */}
      <section className="pt-32 pb-8 bg-white">
        <div className="container-premium">
          <Link
            href="/imoveis"
            className="inline-flex items-center gap-2 text-navy-600 hover:text-gold-500 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar aos Imóveis
          </Link>
        </div>
      </section>

      {/* Galeria de Imagens Moderna */}
      <section className="pb-12 bg-white">
        <div className="container-premium">
          <PropertyGallery images={property.images} title={property.title} />
        </div>
      </section>

      {/* Informação Principal */}
      <section className="py-12 bg-white">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Coluna Principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Título e Preço */}
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-950 mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-navy-600 mb-6">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{property.location.fullAddress}</span>
                </div>
                <p className="text-5xl font-serif font-bold text-gold-500">
                  {property.price === 0
                    ? 'Sob Consulta'
                    : isRental
                      ? `${formatPrice(property.price)}/mês`
                      : formatPrice(property.price)}
                </p>
              </div>

              {/* Características Principais */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-silver-50 border border-silver-200">
                <div className="text-center">
                  <Maximize className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-navy-950">{formatArea(property.area)}</p>
                  <p className="text-sm text-navy-600">Área</p>
                </div>

                {property.features.bedrooms && (
                  <div className="text-center">
                    <Bed className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-navy-950">{property.features.bedrooms}</p>
                    <p className="text-sm text-navy-600">
                      {property.features.bedrooms === 1 ? 'Quarto' : 'Quartos'}
                    </p>
                  </div>
                )}

                {property.features.bathrooms && (
                  <div className="text-center">
                    <Bath className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-navy-950">{property.features.bathrooms}</p>
                    <p className="text-sm text-navy-600">WC</p>
                  </div>
                )}

                {property.features.garage && (
                  <div className="text-center">
                    <Car className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-navy-950">{property.features.garage}</p>
                    <p className="text-sm text-navy-600">Garagem</p>
                  </div>
                )}

                {property.features.buildingUnits && (
                  <div className="text-center">
                    <Award className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-navy-950">{property.features.buildingUnits}</p>
                    <p className="text-sm text-navy-600">Moradias</p>
                  </div>
                )}
              </div>

              {/* Descrição Detalhada */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-navy-950 mb-6">Sobre Este Imóvel</h2>
                <div className="prose prose-lg max-w-none text-navy-700 leading-relaxed space-y-4">
                  {property.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Destaques */}
              {property.highlights.length > 0 && (
                <div>
                  <h2 className="text-3xl font-serif font-bold text-navy-950 mb-6">
                    Principais Características
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                        <span className="text-navy-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificação Energética */}
              {property.features.energyCertificate && (
                <div className="p-6 bg-gold-50 border border-gold-200">
                  <div className="flex items-center gap-4">
                    <Award className="w-12 h-12 text-gold-500" />
                    <div>
                      <p className="text-sm text-navy-600 mb-1">Certificação Energética</p>
                      <p className="text-3xl font-bold text-navy-950">
                        Classe {property.features.energyCertificate}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar de Contacto */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Card de Contacto */}
                <div className="bg-navy-950 text-white p-8 space-y-6">
                  <h3 className="text-2xl font-serif font-bold mb-4">Interessado neste Imóvel?</h3>
                  <p className="text-silver-200">
                    Entre em contacto connosco para agendar uma visita ou obter mais informações.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="tel:+351211627071"
                      className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-gold-500" />
                      <div>
                        <p className="text-sm text-silver-300">Telefone</p>
                        <p className="font-semibold">(+351) 211 627 071</p>
                      </div>
                    </a>

                    <a
                      href="mailto:geral@qvimobiliaria.pt"
                      className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-gold-500" />
                      <div>
                        <p className="text-sm text-silver-300">Email</p>
                        <p className="font-semibold text-sm">geral@qvimobiliaria.pt</p>
                      </div>
                    </a>
                  </div>

                  <Link href="/contactos" className="w-full btn-gold block text-center">
                    Agendar Visita
                  </Link>

                  <div className="pt-6 border-t border-white/20 text-center">
                    <p className="text-sm text-silver-300">AMI 17398 | Mediação Imobiliária Certificada</p>
                  </div>
                </div>

                {/* Informações Adicionais */}
                <div className="bg-silver-50 p-6 border border-silver-200">
                  <h4 className="font-semibold text-navy-950 mb-4">Informações</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-navy-600">Referência:</span>
                      <span className="font-semibold text-navy-950">
                        QV-{property.id.padStart(4, '0')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy-600">Tipo:</span>
                      <span className="font-semibold text-navy-950">
                        {getPropertyTypeLabel(property.type)}
                      </span>
                    </div>
                    {property.features.condition && (
                      <div className="flex justify-between">
                        <span className="text-navy-600">Estado:</span>
                        <span className="font-semibold text-navy-950">{property.features.condition}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Ferramentas para Brokers */}
                <BrokerTools propertyPrice={property.price} propertyTitle={property.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="container-premium text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Agende a Sua Visita Hoje</h2>
          <p className="text-xl text-silver-200 mb-8 max-w-2xl mx-auto">
            Não perca esta oportunidade única. Entre em contacto connosco e descubra tudo o que este imóvel
            tem para oferecer.
          </p>
          <Link href="/contactos" className="btn-gold text-lg">
            Contacte-nos Agora
          </Link>
        </div>
      </section>
    </>
  )
}
