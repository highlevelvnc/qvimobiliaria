# 🚀 Guia de Início Rápido - QV Imobiliária

## ⚡ Instalação Rápida

### 1️⃣ Instalar Dependências

```bash
cd qv-imobiliaria
npm install
```

**Aguarde** a instalação das dependências (pode levar 1-2 minutos).

### 2️⃣ Executar em Modo Desenvolvimento

```bash
npm run dev
```

### 3️⃣ Abrir no Navegador

Acesse: **http://localhost:3000**

---

## 📂 Estrutura de Navegação

Após executar, você pode acessar:

- **Home**: http://localhost:3000/
- **Imóveis**: http://localhost:3000/imoveis
- **Moradia V4 Cascais**: http://localhost:3000/imoveis/moradia-v4-jardins-parede-cascais
- **Apartamento T1 Lisboa**: http://localhost:3000/imoveis/apartamento-t1-sete-rios-lisboa
- **Terreno Abrantes**: http://localhost:3000/imoveis/terreno-urbano-abrantes-17-moradias
- **Quem Somos**: http://localhost:3000/sobre
- **Contactos**: http://localhost:3000/contactos

---

## 🔧 Comandos Úteis

### Desenvolvimento
```bash
npm run dev        # Inicia servidor de desenvolvimento
```

### Produção
```bash
npm run build      # Gera build otimizado
npm start          # Inicia servidor de produção
```

### Qualidade de Código
```bash
npm run lint       # Verifica erros no código
```

---

## 🎨 Personalizar Conteúdo

### ➕ Adicionar Novo Imóvel

Edite: `src/data/properties.ts`

```typescript
{
  id: '4',
  slug: 'meu-novo-imovel',
  title: 'Título do Imóvel',
  type: 'moradia', // ou 'apartamento', 'terreno'
  price: 450000,
  area: 120,
  location: {
    city: 'Lisboa',
    district: 'Parque das Nações',
    fullAddress: 'Endereço completo'
  },
  features: {
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    energyCertificate: 'A',
  },
  description: 'Descrição curta',
  longDescription: 'Descrição detalhada',
  highlights: ['Característica 1', 'Característica 2'],
  images: ['url-da-imagem.jpg'],
  featured: true
}
```

### 🎨 Alterar Cores

Edite: `tailwind.config.ts`

```typescript
colors: {
  navy: {
    950: '#0a1929', // Sua cor navy
  },
  gold: {
    500: '#c9b87a', // Sua cor dourada
  },
}
```

### 📝 Modificar Textos

- **Home**: `src/app/page.tsx`
- **Sobre**: `src/app/sobre/page.tsx`
- **Contactos**: `src/app/contactos/page.tsx`

---

## 📱 Testar Responsividade

### Chrome DevTools
1. Pressione `F12`
2. Clique no ícone de dispositivo móvel
3. Teste em diferentes tamanhos de tela

### Tamanhos Recomendados
- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px
- Large Desktop: 1920px

---

## 🚀 Deploy (Produção)

### Vercel (Recomendado - Grátis)

1. Criar conta em: https://vercel.com
2. Conectar repositório GitHub
3. Deploy automático! ✨

### Netlify

1. Criar conta em: https://netlify.com
2. Arrastar pasta do projeto
3. Deploy pronto!

---

## ❓ Problemas Comuns

### Porta 3000 já está em uso

```bash
# Matar processo na porta 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID [NUMERO_DO_PID] /F

# Ou usar outra porta
PORT=3001 npm run dev
```

### Erro ao instalar dependências

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Imagens não carregam

Verifique:
1. URLs das imagens em `src/data/properties.ts`
2. Configuração em `next.config.js`

---

## 📞 Suporte

**Dúvidas?** Entre em contacto:

- Email: geral@qvimobiliaria.pt
- Telefone: (+351) 211 627 071

---

## ✅ Checklist de Verificação

Antes de colocar em produção:

- [ ] Testar todas as páginas
- [ ] Verificar responsividade (mobile, tablet, desktop)
- [ ] Testar formulário de contacto
- [ ] Confirmar todas as URLs de imagens
- [ ] Verificar informações de contacto
- [ ] Testar links de navegação
- [ ] Verificar SEO (meta tags)
- [ ] Testar em diferentes navegadores

---

**Pronto! Seu site está funcionando! 🎉**
