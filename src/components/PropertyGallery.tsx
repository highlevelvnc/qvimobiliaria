'use client'

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface PropertyGalleryProps {
  images: string[]
  title: string
}

const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative group">
      {/* Carousel Principal */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[500px] md:h-[600px]">
              <Image
                src={image}
                alt={`${title} - Imagem ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controles de Navegação */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-navy-950/80 hover:bg-navy-950 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-navy-950/80 hover:bg-navy-950 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'bg-gold-500 w-8'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="absolute top-6 right-6 bg-navy-950/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white text-sm font-medium">
              {selectedIndex + 1} / {images.length}
            </span>
          </div>
        </>
      )}
    </div>
  )
}

export default PropertyGallery
