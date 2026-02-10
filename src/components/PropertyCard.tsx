import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Maximize, Bed, Bath } from 'lucide-react'
import type { Property } from '@/data/properties'
import { formatPrice, formatArea } from '@/data/properties'

interface PropertyCardProps {
  property: Property
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  // Determinar tipo de imóvel em português
  const getPropertyTypeLabel = (type: Property['type']): string => {
    const types = {
      moradia: 'Moradia',
      apartamento: 'Apartamento',
      terreno: 'Terreno',
      comercial: 'Comercial'
    }
    return types[type]
  }

  // Determinar se é arrendamento (baseado no preço baixo)
  const isRental = property.price > 0 && property.price < 10000

  return (
    <Link href={`/imoveis/${property.slug}`}>
      <div className="card-premium group overflow-hidden h-full flex flex-col">
        {/* Imagem */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badge de tipo */}
          <div className="absolute top-4 left-4 bg-navy-950/90 backdrop-blur-sm px-4 py-2">
            <span className="text-white text-sm font-semibold uppercase tracking-wider">
              {getPropertyTypeLabel(property.type)}
            </span>
          </div>

          {/* Badge destaque */}
          {property.featured && (
            <div className="absolute top-4 right-4 bg-gold-500 px-4 py-2">
              <span className="text-navy-950 text-sm font-bold uppercase tracking-wider">
                Destaque
              </span>
            </div>
          )}

          {/* Badge arrendamento */}
          {isRental && (
            <div className="absolute top-16 left-4 bg-blue-600/90 backdrop-blur-sm px-4 py-2">
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                Arrendamento
              </span>
            </div>
          )}

          {/* Overlay gradient no hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Conteúdo */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Preço */}
          <div className="mb-4">
            <p className="text-3xl font-serif font-bold text-navy-950">
              {property.price === 0 
                ? 'Sob Consulta' 
                : isRental 
                  ? `${formatPrice(property.price)}/mês`
                  : formatPrice(property.price)
              }
            </p>
          </div>

          {/* Título */}
          <h3 className="text-xl font-semibold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
            {property.title}
          </h3>

          {/* Localização */}
          <div className="flex items-start gap-2 text-navy-600 mb-4">
            <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span className="text-sm">
              {property.location.district}, {property.location.city}
            </span>
          </div>

          {/* Características */}
          <div className="flex flex-wrap items-center gap-4 pt-4 mt-auto border-t border-silver-200">
            {property.features.bedrooms && (
              <div className="flex items-center gap-2 text-navy-600">
                <Bed className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {property.features.bedrooms} {property.features.bedrooms === 1 ? 'Quarto' : 'Quartos'}
                </span>
              </div>
            )}
            
            {property.features.bathrooms && (
              <div className="flex items-center gap-2 text-navy-600">
                <Bath className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {property.features.bathrooms} {property.features.bathrooms === 1 ? 'Casa de Banho' : 'Casas de Banho'}
                </span>
              </div>
            )}
            
            <div className="flex items-center gap-2 text-navy-600">
              <Maximize className="w-5 h-5" />
              <span className="text-sm font-medium">
                {formatArea(property.area)}
              </span>
            </div>
          </div>

          {/* Descrição curta */}
          <p className="text-navy-600 mt-4 text-sm line-clamp-2">
            {property.description}
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <span className="inline-flex items-center text-gold-500 font-semibold group-hover:gap-2 transition-all">
              Ver Detalhes
              <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PropertyCard
