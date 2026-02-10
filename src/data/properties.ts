// Base de dados de imóveis da QV Imobiliária
// Estrutura preparada para escalar facilmente

export interface Property {
  id: string
  slug: string
  title: string
  type: 'moradia' | 'apartamento' | 'terreno' | 'comercial'
  price: number
  area: number
  location: {
    city: string
    district: string
    fullAddress: string
  }
  features: {
    bedrooms?: number
    bathrooms?: number
    garage?: number
    energyCertificate?: string
    condition?: string
    buildingUnits?: number
  }
  description: string
  longDescription: string
  highlights: string[]
  images: string[]
  featured: boolean
}

export const properties: Property[] = [
  {
    id: '1',
    slug: 'moradia-v4-jardins-parede-cascais',
    title: 'Moradia V4 de Luxo - Jardins da Parede',
    type: 'moradia',
    price: 1230000,
    area: 285,
    location: {
      city: 'Cascais',
      district: 'Carcavelos e Parede',
      fullAddress: 'Jardins da Parede, Carcavelos e Parede, Cascais'
    },
    features: {
      bedrooms: 4,
      bathrooms: 4,
      garage: 2,
      energyCertificate: 'A',
      condition: 'Excelente estado'
    },
    description: 'Moradia V4 premium em condomínio privado de prestígio, com acabamentos de luxo e localização privilegiada a poucos minutos da praia.',
    longDescription: `Apresentamos esta magnífica moradia V4, situada no prestigiado condomínio Jardins da Parede, em Cascais. Com 285m² de área útil, esta propriedade representa o equilíbrio perfeito entre elegância, conforto e funcionalidade.

Inserida num dos condomínios mais procurados da região, esta moradia destaca-se pelos seus acabamentos premium e pela atenção ao detalhe em cada divisão. A arquitetura contemporânea privilegia a entrada de luz natural em todos os espaços, criando ambientes acolhedores e sofisticados.

A localização estratégica oferece proximidade à praia, acessos rápidos à A5 e à Marginal, além de estar inserida numa zona com todas as comodidades: escolas internacionais de referência, centros comerciais, restaurantes de excelência e espaços verdes.

Esta é uma oportunidade única para adquirir uma propriedade de elevado padrão numa das zonas mais valorizadas da linha de Cascais.`,
    highlights: [
      'Condomínio privado de prestígio com segurança 24h',
      '4 suítes com roupeiros embutidos',
      'Cozinha equipada com eletrodomésticos topo de gama',
      'Sala ampla com lareira e acesso ao jardim',
      'Jardim privativo com 150m²',
      'Piscina aquecida',
      'Garagem para 2 viaturas',
      'Sistema de domótica integrado',
      'A 5 minutos da praia de Carcavelos',
      'Excelente eficiência energética (Classe A)'
    ],
    images: [
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P25464211/Tphoto/ID938d8401-0000-0500-0000-0000180c8c67.jpg.webp'
    ],
    featured: true
  },
  {
    id: '2',
    slug: 'apartamento-t1-sete-rios-lisboa',
    title: 'Apartamento T1 Premium - Sete Rios',
    type: 'apartamento',
    price: 580000,
    area: 56,
    location: {
      city: 'Lisboa',
      district: 'Sete Rios',
      fullAddress: 'Sete Rios, Lisboa'
    },
    features: {
      bedrooms: 1,
      bathrooms: 1,
      garage: 1,
      energyCertificate: 'A',
      condition: 'Novo'
    },
    description: 'Apartamento T1 moderno em edifício de arquitetura contemporânea, com acabamentos premium e localização estratégica em Lisboa.',
    longDescription: `Descobra este elegante apartamento T1 de 56m², inserido num empreendimento moderno de excelência em Sete Rios, uma das zonas mais valorizadas de Lisboa.

Com acabamentos de luxo e design contemporâneo, este imóvel oferece o melhor estilo de vida urbano, combinando funcionalidade, conforto e sofisticação. O projeto privilegia a eficiência dos espaços e a qualidade de vida, com materiais premium e soluções inteligentes.

A localização estratégica permite acesso imediato ao Parque Florestal de Monsanto, ao Colégio Militar, e a excelentes acessos rodoviários (A5, Eixo Norte-Sul). A zona dispõe de transportes públicos à porta (metro e comboio), restaurantes, ginásios, e todos os serviços necessários para o dia a dia.

Ideal para profissionais exigentes que procuram qualidade, conforto e uma localização central em Lisboa.`,
    highlights: [
      'Apartamento novo em empreendimento premium',
      'Cozinha totalmente equipada com eletrodomésticos Bosch',
      'Ar condicionado em todas as divisões',
      'Varanda com vista desafogada',
      'Acabamentos de luxo: pavimento flutuante, carpintarias lacadas',
      'Estores elétricos',
      'Lugar de garagem e arrecadação',
      'Certificação energética A',
      'Metro e comboio a 3 minutos',
      'Proximidade ao Parque Florestal de Monsanto'
    ],
    images: [
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P27050880/Tphoto/ID80c39c01-0000-0500-0000-000015ad2de2.jpg.webp'
    ],
    featured: true
  },
  {
    id: '3',
    slug: 'terreno-urbano-abrantes-17-moradias',
    title: 'Terreno Urbano - Viabilidade 17 Moradias',
    type: 'terreno',
    price: 190000,
    area: 11884,
    location: {
      city: 'Abrantes',
      district: 'Santarém',
      fullAddress: 'Abrantes, Santarém'
    },
    features: {
      buildingUnits: 17,
      condition: 'Terreno limpo e infraestruturado'
    },
    description: 'Terreno urbano com 11.884m² e viabilidade para construção de 17 moradias. Excelente oportunidade de investimento imobiliário.',
    longDescription: `Apresentamos uma oportunidade única de investimento imobiliário: terreno urbano com 11.884m² em Abrantes, com viabilidade aprovada para a construção de 17 moradias unifamiliares.

Esta propriedade representa uma solução ideal para promotores e investidores que procuram desenvolver projetos habitacionais numa região em crescimento. O terreno encontra-se limpo, devidamente infraestruturado e pronto para iniciar o desenvolvimento do projeto.

Abrantes tem registado um crescimento significativo nos últimos anos, beneficiando da sua localização estratégica no centro do país, com excelentes acessibilidades (A23 e linha ferroviária), serviços completos e qualidade de vida reconhecida. A procura por habitação na região tem aumentado, impulsionada pelo preço competitivo comparativamente aos grandes centros urbanos e pela qualidade de vida que a cidade oferece.

Este é um projeto com forte potencial de rentabilidade, numa localização estratégica e com todas as condições para um desenvolvimento bem-sucedido.`,
    highlights: [
      'Terreno com 11.884m² totalmente urbanizável',
      'Viabilidade aprovada para 17 moradias',
      'Infraestruturas completas (água, luz, saneamento, gás)',
      'Localização privilegiada em Abrantes',
      'Acesso rápido à A23',
      'Proximidade a todos os serviços e comércio',
      'Zona residencial em expansão',
      'Alto potencial de rentabilidade',
      'Ideal para promoção imobiliária',
      'Documentação completa e regularizada'
    ],
    images: [
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P29005143/Tphoto/ID5795ba01-0000-0500-0000-0000180551b8.jpg.webp'
    ],
    featured: false
  },
  {
    id: '4',
    slug: 'apartamento-t3-quinta-borel-amadora',
    title: 'Apartamento T3 - Quinta do Borel, Amadora',
    type: 'apartamento',
    price: 365000,
    area: 110,
    location: {
      city: 'Amadora',
      district: 'Venteira',
      fullAddress: 'Quinta do Borel, Venteira, Amadora, Lisboa'
    },
    features: {
      bedrooms: 3,
      bathrooms: 2,
      energyCertificate: 'B',
      condition: 'Em remodelação (conclusão Out/2025)'
    },
    description: 'Apartamento T3 em remodelação total na Quinta do Borel, Amadora. Sala com lareira, excelente localização. Conclusão prevista: 31/10/2025.',
    longDescription: `Apresentamos este apartamento T3 de 110m² em remodelação total na prestigiada Quinta do Borel, Amadora. Com conclusão prevista para 31 de outubro de 2025, este imóvel representa uma excelente oportunidade para quem procura um lar moderno e funcional numa localização privilegiada.

A remodelação contempla todos os espaços do apartamento, incluindo uma sala ampla de aproximadamente 28m² com lareira, perfeita para momentos de convívio. Os acabamentos serão de qualidade superior, com atenção aos detalhes e funcionalidade.

A Quinta do Borel é uma das zonas mais procuradas da Amadora, beneficiando de excelentes acessos à A5, CRIL e CREL, proximidade ao IC19, e uma oferta completa de transportes públicos. A área dispõe de escolas, supermercados, farmácias, ginásios e todos os serviços essenciais numa distância confortável.

Esta é uma oportunidade única para adquirir um imóvel totalmente renovado numa das melhores localizações da Grande Lisboa, com excelente relação qualidade-preço.`,
    highlights: [
      'Remodelação total - entrega Out/2025',
      'Sala ampla com lareira (~28m²)',
      '3 quartos espaçosos',
      '2 casas de banho modernas',
      'Localização privilegiada - Quinta do Borel',
      'Excelentes acessos (A5, CRIL, CREL, IC19)',
      'Transportes públicos à porta',
      'Proximidade a escolas e comércio',
      'Zona residencial tranquila',
      'Investimento com valorização garantida'
    ],
    images: [
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P28467664/Tphoto/IDd061b201-0000-0500-0000-0000175e018e.jpg.webp'
    ],
    featured: false
  },
  {
    id: '5',
    slug: 'andar-moradia-ramada-odivelas',
    title: 'Andar de Moradia - Ramada, Odivelas',
    type: 'moradia',
    price: 2000,
    area: 153,
    location: {
      city: 'Odivelas',
      district: 'Ramada e Caneças',
      fullAddress: 'Ramada, Ramada e Caneças, Odivelas, Lisboa'
    },
    features: {
      bedrooms: 3,
      bathrooms: 3,
      garage: 1,
      energyCertificate: 'C',
      condition: 'Totalmente remodelado'
    },
    description: 'Andar de moradia para arrendamento em Ramada, Odivelas. Totalmente remodelado, 3 quartos, 3 WC, garagem box e logradouro. 2.000€/mês.',
    longDescription: `Apresentamos este magnífico andar de moradia de 153m² para arrendamento, localizado em Ramada, Odivelas. Totalmente remodelado com acabamentos de qualidade, este imóvel oferece todo o conforto e funcionalidade para uma família que procura qualidade de vida.

A propriedade dispõe de uma cozinha moderna e equipada, duas salas amplas ideais para diferentes utilizações, três quartos espaçosos e três casas de banho completas. Destaca-se ainda a garagem box e um logradouro privativo, perfeito para momentos de lazer ao ar livre.

A localização em Ramada proporciona fácil acesso a Lisboa através da IC22 e CREL, proximidade ao Metro de Odivelas, e uma oferta completa de serviços, comércio e espaços verdes. A zona é conhecida pela sua tranquilidade e pela qualidade das infraestruturas disponíveis.

Ideal para famílias que valorizam espaço, conforto e uma localização estratégica na Grande Lisboa.`,
    highlights: [
      'Totalmente remodelado',
      'Cozinha moderna e equipada',
      'Duas salas espaçosas',
      'Três quartos amplos',
      'Três casas de banho completas',
      'Garagem box',
      'Logradouro privativo',
      'Excelentes acessos (IC22, CREL)',
      'Proximidade ao Metro de Odivelas',
      'Zona tranquila e residencial'
    ],
    images: [
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P28918651/Tphoto/ID7819b901-0000-0500-0000-000017f34f0e.jpg.webp',
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P28918651/Tphoto/IDbd19b901-0000-0500-0000-000017f34f1f.jpg.webp',
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P28918651/Tphoto/IDf219b901-0000-0500-0000-000017f34f30.jpg.webp'
    ],
    featured: false
  },
  {
    id: '6',
    slug: 'loja-brandoa-amadora',
    title: 'Loja - Brandoa, Amadora',
    type: 'comercial',
    price: 200000,
    area: 211,
    location: {
      city: 'Amadora',
      district: 'Encosta do Sol',
      fullAddress: 'Brandoa, Encosta do Sol, Amadora, Lisboa'
    },
    features: {
      bathrooms: 2,
      garage: 1,
      condition: 'Bom estado'
    },
    description: 'Loja com 211m² no centro da Brandoa, Amadora. Open space, divisão adicional, 2 WC, garagem box 50m². Excelente para comércio ou serviços.',
    longDescription: `Apresentamos esta excelente loja comercial de 211m² localizada no centro da Brandoa, Amadora. Com uma configuração versátil em open space e uma divisão adicional, este espaço oferece múltiplas possibilidades de utilização para diferentes tipos de negócio.

A propriedade inclui duas casas de banho completas, garantindo conforto para funcionários e clientes, e uma garagem box de 50m², ideal para armazenamento ou estacionamento. A localização central na Brandoa proporciona excelente visibilidade e fluxo de potenciais clientes.

A zona da Brandoa é uma das mais dinâmicas da Amadora, com forte componente comercial e residencial. O acesso é facilitado pela proximidade à IC19 e CREL, e a área beneficia de uma boa rede de transportes públicos. A envolvente dispõe de todo o tipo de comércio, serviços e restauração.

Este espaço é ideal para estabelecimentos comerciais, prestação de serviços, escritórios ou showrooms, representando uma excelente oportunidade de investimento numa zona consolidada e em crescimento.`,
    highlights: [
      'Área ampla de 211m² em open space',
      'Divisão adicional versátil',
      'Duas casas de banho completas',
      'Garagem box de 50m²',
      'Localização central na Brandoa',
      'Excelente visibilidade comercial',
      'Acessos facilitados (IC19, CREL)',
      'Transportes públicos na proximidade',
      'Zona comercial consolidada',
      'Múltiplas possibilidades de negócio'
    ],
    images: [
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P28656636/Tphoto/IDb0eba601-0000-0500-0000-000017b5a1ca.jpg.webp',
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P28656636/Tphoto/IDc4eba601-0000-0500-0000-000017b5a1d5.jpg.webp',
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P28656636/Tphoto/IDd8eba601-0000-0500-0000-000017b5a1e0.jpg.webp'
    ],
    featured: false
  },
  {
    id: '7',
    slug: 'apartamento-t3-benfica-lisboa',
    title: 'Apartamento T3 - Benfica, Lisboa',
    type: 'apartamento',
    price: 0, // Sob consulta
    area: 95,
    location: {
      city: 'Lisboa',
      district: 'Benfica',
      fullAddress: 'Zona do Mercado, Benfica, Lisboa'
    },
    features: {
      bedrooms: 3,
      bathrooms: 2,
      energyCertificate: 'D',
      condition: 'Bom estado'
    },
    description: 'Apartamento T3 em Benfica, zona do Mercado. Duas varandas (uma marquise), despensa, condomínio 45€. Valor sob consulta, negociável.',
    longDescription: `Descobra este apartamento T3 de 95m² situado na zona do Mercado de Benfica, uma das áreas mais tradicionais e bem servidas de Lisboa. Este imóvel oferece uma excelente oportunidade para quem procura viver numa zona central com todas as comodidades.

O apartamento dispõe de duas varandas, sendo uma delas em marquise, proporcionando espaço adicional e muita luminosidade. A despensa oferece capacidade extra de arrumação, e o imóvel encontra-se em bom estado de conservação. O valor de condomínio é acessível, de apenas 45€ mensais.

Benfica é um dos bairros mais completos de Lisboa, com o Mercado de Benfica nas proximidades, oferecendo produtos frescos diariamente. A zona beneficia de excelentes transportes públicos (comboio, metro e autocarros), escolas, centros de saúde, ginásios, restaurantes e todo o tipo de comércio e serviços.

O valor é sob consulta e negociável, representando uma excelente oportunidade para adquirir um imóvel numa das zonas mais procuradas da capital, com forte potencial de valorização.`,
    highlights: [
      'Localização central em Benfica',
      'Duas varandas (uma em marquise)',
      'Despensa para arrumação extra',
      '3 quartos espaçosos',
      '2 casas de banho',
      'Condomínio acessível (45€/mês)',
      'Mercado de Benfica nas proximidades',
      'Excelentes transportes públicos',
      'Zona com todo o tipo de serviços',
      'Valor negociável'
    ],
    images: [
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P29200267/Tphoto/IDcc12e401-0000-0500-0000-000018436b32.jpg.webp',
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P29200267/Tphoto/IDE112e401-0000-0500-0000-000018436b43.jpg.webp',
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P29200267/Tphoto/IDF612e401-0000-0500-0000-000018436b54.jpg.webp',
      'https://images.egorealestate.com/Z1280x960/S5/C7016/P29200267/Tphoto/ID0a13e401-0000-0500-0000-000018436b65.jpg.webp'
    ],
    featured: false
  }
]

// Função auxiliar para buscar imóvel por slug
export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find(property => property.slug === slug)
}

// Função auxiliar para buscar imóveis em destaque
export const getFeaturedProperties = (): Property[] => {
  return properties.filter(property => property.featured)
}

// Função auxiliar para formatar preço
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

// Função auxiliar para formatar área
export const formatArea = (area: number): string => {
  return `${area.toLocaleString('pt-PT')} m²`
}
