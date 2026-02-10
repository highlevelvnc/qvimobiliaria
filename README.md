# 🏛️ QV Imobiliária - Site Premium 2026

Site institucional e catálogo de imóveis de luxo para a **QV Imobiliária** (AMI 17398), com tecnologias de ponta 2026 e recursos específicos para brokers/corretores.

## 🎯 Características Principais

### ✨ Design Premium 2026
- **Paleta de cores sofisticada**: Navy profundo, prateado elegante e dourado discreto
- **Tipografia de luxo**: Combinação de Inter (sans-serif) e Playfair Display (serif)
- **Animações suaves**: Implementadas com Framer Motion 11.11+
- **Microinterações elegantes**: Hover effects, transições e scroll effects
- **Imagens de banco premium**: Unsplash para hero sections e backgrounds de qualidade excepcional
- **Fotos originais dos imóveis**: Mantidas as imagens autênticas de cada propriedade

### 🚀 Stack Tecnológica 2026
- **Framework**: Next.js 15.1.3 (App Router) com Turbopack
- **React**: 19.0.0 (última versão)
- **Linguagem**: TypeScript 5.7.2
- **Estilização**: Tailwind CSS 3.4.17
- **Animações**: Framer Motion 11.11.11
- **Carousel**: Embla Carousel 8.5.1
- **Notificações**: React Hot Toast 2.4.1
- **Otimização de Imagens**: Sharp 0.33.5
- **Performance**: Otimizado para SEO e Core Web Vitals

### 🎨 Tela de Carregamento Premium
- Loader sofisticado com animações fluidas
- Barra de progresso elegante
- Partículas decorativas animadas
- Logo com efeitos de escala e opacidade

### 💼 Ferramentas para Brokers/Corretores

1. **Calculadora de Financiamento**
   - Simulação de prestação mensal
   - Cálculo de juros totais
   - Prazo personalizável
   - Taxa de juro ajustável

2. **Calculadora de Custos de Aquisição**
   - IMT (Imposto Municipal sobre Transmissões)
   - Imposto de Selo
   - Taxa de Registo
   - Custos Notariais
   - Total estimado automático

3. **Ferramentas Profissionais**
   - Partilha de imóveis (Share API)
   - Download de ficha técnica
   - Análise de investimento
   - CTA específicos para corretores

### 📸 Galeria Moderna de Imóveis
- Carousel com Embla (performance superior)
- Navegação por setas e indicadores
- Contador de imagens
- Transições suaves
- Otimizado para mobile e desktop
- Lazy loading automático

### 📄 Páginas Implementadas

1. **Home (`/`)** 
   - Hero impactante com imagem premium do Unsplash
   - Destaques dos valores da empresa
   - Imóveis em destaque
   - Áreas de atuação
   - CTA final

2. **Imóveis (`/imoveis`)**
   - Catálogo completo de propriedades
   - Cards premium com informações detalhadas
   - Preparado para filtros futuros

3. **Página Individual de Imóvel (`/imoveis/[slug]`)**
   - Galeria moderna com carousel
   - Ferramentas para brokers integradas
   - Informações detalhadas
   - Características e destaques
   - Sidebar de contacto premium

4. **Quem Somos (`/sobre`)**
   - História e missão da empresa
   - Valores corporativos
   - Diferenciais competitivos
   - Áreas de atuação
   - Imagem premium de banco

5. **Contactos (`/contactos`)**
   - Formulário de contacto com toast notifications
   - Informações completas
   - Integração com Google Maps
   - Botão WhatsApp
   - Notificações elegantes de sucesso/erro

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos para Instalação

```bash
# 1. Navegar para o diretório do projeto
cd qv-imobiliaria

# 2. Instalar dependências
npm install

# 3. Executar em modo desenvolvimento (com Turbopack)
npm run dev

# 4. Abrir no navegador
# http://localhost:3000
```

### Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack (mais rápido)
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint
```

## 📁 Estrutura do Projeto

```
qv-imobiliaria/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── page.tsx           # Página Home
│   │   ├── layout.tsx         # Layout global
│   │   ├── loading.tsx        # Loading premium
│   │   ├── not-found.tsx      # Página 404
│   │   ├── globals.css        # Estilos globais
│   │   ├── imoveis/
│   │   │   ├── page.tsx       # Lista de imóveis
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Página individual
│   │   ├── sobre/
│   │   │   └── page.tsx       # Quem Somos
│   │   └── contactos/
│   │       └── page.tsx       # Contactos
│   ├── components/             # Componentes React
│   │   ├── Header.tsx         # Cabeçalho
│   │   ├── Footer.tsx         # Rodapé
│   │   ├── PropertyCard.tsx   # Card de imóvel
│   │   ├── PropertyGallery.tsx # Galeria moderna
│   │   ├── ContactForm.tsx    # Formulário
│   │   ├── PremiumLoader.tsx  # Loading premium
│   │   ├── BrokerTools.tsx    # Ferramentas broker
│   │   └── ToastProvider.tsx  # Notificações
│   └── data/
│       └── properties.ts      # Base de dados
├── public/                     # Arquivos estáticos
├── tailwind.config.ts         # Configuração Tailwind
├── tsconfig.json              # Configuração TypeScript
├── next.config.js             # Configuração Next.js
└── package.json               # Dependências
```

## 🎨 Paleta de Cores

```css
Navy Profundo:   #0a1929 (navy-950)
Navy Médio:      #102a43 (navy-900)
Prateado:        #adb5bd (silver-500)
Dourado:         #c9b87a (gold-500)
Branco:          #ffffff
Cinza Claro:     #f8f9fa (silver-50)
```

## 🔧 Personalização

### Adicionar Novos Imóveis

Editar o arquivo `src/data/properties.ts`:

```typescript
export const properties: Property[] = [
  {
    id: '4',
    slug: 'novo-imovel-slug',
    title: 'Título do Imóvel',
    type: 'moradia',
    price: 500000,
    area: 150,
    // ... resto das propriedades
    images: [
      'url-imagem-1.jpg',
      'url-imagem-2.jpg', // Suporta múltiplas imagens
    ],
    featured: true
  },
]
```

## 🔍 SEO 2026

O site está otimizado para SEO com:

- ✅ Meta tags completas
- ✅ OpenGraph para redes sociais
- ✅ Sitemap automático
- ✅ URLs amigáveis
- ✅ Estrutura semântica HTML5
- ✅ Alt text em todas as imagens
- ✅ Core Web Vitals otimizados

## 📱 Responsividade

Totalmente responsivo:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ⚡ Performance 2026

- Next.js 15 com Turbopack (compilação ultra rápida)
- React 19 (concurrent features)
- Imagens otimizadas (AVIF, WebP)
- Lazy loading automático
- CSS otimizado
- Bundle size minimizado
- Sharp para processamento de imagens

## 🆕 Novidades 2026

### Tecnologias Atualizadas
- ✅ Next.js 15.1.3 (última versão)
- ✅ React 19 (concurrent rendering)
- ✅ TypeScript 5.7.2
- ✅ Framer Motion 11.11.11
- ✅ Embla Carousel 8.5.1

### Recursos Profissionais
- ✅ Ferramentas para brokers integradas
- ✅ Calculadoras de financiamento
- ✅ Calculadora de custos
- ✅ Sistema de notificações toast
- ✅ Galeria moderna com carousel

### Design Premium
- ✅ Imagens Unsplash de alta qualidade
- ✅ Loader sofisticado animado
- ✅ Microinterações fluidas
- ✅ Animações com partículas

## 🚀 Deploy

### Vercel (Recomendado)

```bash
vercel
```

### Outras Plataformas
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway

## 📞 Informações de Contacto

**QV Imobiliária**
- **AMI**: 17398
- **Telefone**: (+351) 211 627 071
- **Email**: geral@qvimobiliaria.pt
- **Morada**: Oeiras

## 📝 Licença

© 2026 QV Imobiliária. Todos os direitos reservados.

---

**Desenvolvido com tecnologias 2026** ⚡
**Next.js 15 + React 19 + TypeScript 5.7 + Tailwind CSS**


## 🎯 Características Principais

### ✨ Design Premium
- **Paleta de cores sofisticada**: Navy profundo, prateado elegante e dourado discreto
- **Tipografia de luxo**: Combinação de Inter (sans-serif) e Playfair Display (serif)
- **Animações suaves**: Implementadas com Framer Motion
- **Microinterações elegantes**: Hover effects, transições e scroll effects

### 🏗️ Arquitetura Técnica
- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Performance**: Otimizado para SEO e Core Web Vitals
- **Responsivo**: Design adaptativo para todos os dispositivos

### 📄 Páginas Implementadas

1. **Home (`/`)** 
   - Hero impactante com call-to-action
   - Destaques dos valores da empresa
   - Imóveis em destaque
   - Áreas de atuação
   - CTA final

2. **Imóveis (`/imoveis`)**
   - Catálogo completo de propriedades
   - Cards premium com informações detalhadas
   - Preparado para filtros futuros

3. **Página Individual de Imóvel (`/imoveis/[slug]`)**
   - Galeria de imagens
   - Informações detalhadas
   - Características e destaques
   - Sidebar de contacto
   - CTAs estratégicos

4. **Quem Somos (`/sobre`)**
   - História e missão da empresa
   - Valores corporativos
   - Diferenciais competitivos
   - Áreas de atuação

5. **Contactos (`/contactos`)**
   - Formulário de contacto funcional
   - Informações completas (telefone, email, morada)
   - Integração com Google Maps
   - Botão WhatsApp

### 🏡 Imóveis Cadastrados

O site inclui 3 imóveis premium cadastrados:

1. **Moradia V4** - Jardins da Parede, Cascais (€1.230.000)
2. **Apartamento T1** - Sete Rios, Lisboa (€580.000)
3. **Terreno Urbano** - Abrantes (€190.000) - 17 moradias

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos para Instalação

```bash
# 1. Navegar para o diretório do projeto
cd qv-imobiliaria

# 2. Instalar dependências
npm install

# 3. Executar em modo desenvolvimento
npm run dev

# 4. Abrir no navegador
# http://localhost:3000
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint
```

## 📁 Estrutura do Projeto

```
qv-imobiliaria/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── page.tsx           # Página Home
│   │   ├── layout.tsx         # Layout global
│   │   ├── globals.css        # Estilos globais
│   │   ├── imoveis/
│   │   │   ├── page.tsx       # Lista de imóveis
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Página individual de imóvel
│   │   ├── sobre/
│   │   │   └── page.tsx       # Quem Somos
│   │   └── contactos/
│   │       └── page.tsx       # Contactos
│   ├── components/             # Componentes React reutilizáveis
│   │   ├── Header.tsx         # Cabeçalho
│   │   ├── Footer.tsx         # Rodapé
│   │   ├── PropertyCard.tsx   # Card de imóvel
│   │   └── ContactForm.tsx    # Formulário de contacto
│   └── data/
│       └── properties.ts      # Base de dados de imóveis
├── public/                     # Arquivos estáticos
├── tailwind.config.ts         # Configuração Tailwind
├── tsconfig.json              # Configuração TypeScript
├── next.config.js             # Configuração Next.js
└── package.json               # Dependências
```

## 🎨 Paleta de Cores

```css
Navy Profundo:   #0a1929 (navy-950)
Navy Médio:      #102a43 (navy-900)
Prateado:        #adb5bd (silver-500)
Dourado:         #c9b87a (gold-500)
Branco:          #ffffff
Cinza Claro:     #f8f9fa (silver-50)
```

## 🔧 Personalização

### Adicionar Novos Imóveis

Editar o arquivo `src/data/properties.ts`:

```typescript
export const properties: Property[] = [
  {
    id: '4',
    slug: 'novo-imovel-slug',
    title: 'Título do Imóvel',
    type: 'moradia', // ou 'apartamento', 'terreno'
    price: 500000,
    area: 150,
    location: {
      city: 'Lisboa',
      district: 'Bairro',
      fullAddress: 'Endereço completo'
    },
    features: {
      bedrooms: 3,
      bathrooms: 2,
      // ...
    },
    description: 'Descrição curta...',
    longDescription: 'Descrição longa...',
    highlights: ['Destaque 1', 'Destaque 2'],
    images: ['url-da-imagem.jpg'],
    featured: true
  },
  // ... outros imóveis
]
```

### Modificar Cores

Editar `tailwind.config.ts` para ajustar a paleta:

```typescript
colors: {
  navy: { /* suas cores */ },
  silver: { /* suas cores */ },
  gold: { /* suas cores */ },
}
```

## 🔍 SEO

O site está otimizado para SEO com:

- ✅ Meta tags completas em todas as páginas
- ✅ OpenGraph para redes sociais
- ✅ Sitemap automático (Next.js)
- ✅ URLs amigáveis
- ✅ Estrutura semântica HTML5
- ✅ Alt text em todas as imagens
- ✅ Schema.org markup (preparado para implementação)

### Palavras-chave principais:
- Imobiliária Lisboa
- Imobiliária Cascais
- Imobiliária Oeiras
- Mediação Imobiliária Portugal
- Imóveis de Luxo Portugal

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ⚡ Performance

- Imagens otimizadas com Next.js Image
- Lazy loading automático
- CSS otimizado com Tailwind
- Componentes React otimizados
- Bundle size minimizado

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel
```

### Outras Plataformas

O projeto pode ser deployado em:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway
- Digital Ocean

## 📞 Informações de Contacto

**QV Imobiliária**
- **AMI**: 17398
- **Telefone**: (+351) 211 627 071
- **Email**: geral@qvimobiliaria.pt
- **Morada**: Galerias Alto da Barra, Av. das Descobertas nº 59, Piso 1, Loja 264, 2780-053 Oeiras

## 📝 Licença

© 2026 QV Imobiliária. Todos os direitos reservados.

---

**Desenvolvido com** ❤️ **usando Next.js 14, TypeScript e Tailwind CSS**
