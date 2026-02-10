import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contactos | Fale Connosco',
  description: 'Entre em contacto com a QV Imobiliária. Estamos em Oeiras, próximo a Lisboa e Cascais. Telefone: (+351) 211 627 071 | Email: geral@qvimobiliaria.pt',
  keywords: ['contacto QV Imobiliária', 'telefone', 'email', 'morada', 'Oeiras'],
}

export default function ContactosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <div className="gold-divider mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Contacte-nos
            </h1>
            <p className="text-xl md:text-2xl text-silver-200 leading-relaxed">
              Estamos prontos para o ajudar. Entre em contacto connosco
              e agende a sua visita ou reunião.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contacto */}
      <section className="py-16 bg-white">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Telefone */}
            <div className="text-center p-8 bg-silver-50 hover:bg-gold-50 border border-silver-200 hover:border-gold-500 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-lg font-semibold text-navy-950 mb-2">Telefone</h3>
              <a
                href="tel:+351211627071"
                className="text-navy-600 hover:text-gold-500 transition-colors"
              >
                (+351) 211 627 071
              </a>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-silver-50 hover:bg-gold-50 border border-silver-200 hover:border-gold-500 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-lg font-semibold text-navy-950 mb-2">Email</h3>
              <a
                href="mailto:geral@qvimobiliaria.pt"
                className="text-navy-600 hover:text-gold-500 transition-colors break-all"
              >
                geral@qvimobiliaria.pt
              </a>
            </div>

            {/* Morada */}
            <div className="text-center p-8 bg-silver-50 hover:bg-gold-50 border border-silver-200 hover:border-gold-500 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-lg font-semibold text-navy-950 mb-2">Morada</h3>
              <p className="text-navy-600 text-sm">
                Galerias Alto da Barra<br />
                Av. das Descobertas nº 59<br />
                Piso 1, Loja 264<br />
                2780-053 Oeiras
              </p>
            </div>

            {/* Horário */}
            <div className="text-center p-8 bg-silver-50 hover:bg-gold-50 border border-silver-200 hover:border-gold-500 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-lg font-semibold text-navy-950 mb-2">Horário</h3>
              <p className="text-navy-600 text-sm">
                Segunda a Sexta<br />
                09:00 - 19:00<br />
                <span className="text-xs mt-1 inline-block">
                  (Visitas por marcação)
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contacto */}
      <section className="py-16 bg-silver-50">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coluna Esquerda - Informação */}
            <div>
              <div className="gold-divider mb-6" />
              <h2 className="text-4xl font-serif font-bold text-navy-950 mb-6">
                Envie-nos uma Mensagem
              </h2>
              <p className="text-lg text-navy-700 leading-relaxed mb-8">
                Preencha o formulário ao lado e entraremos em contacto consigo
                o mais breve possível. Estamos aqui para responder a todas as suas
                questões e ajudá-lo a encontrar o imóvel perfeito ou a vender
                a sua propriedade nas melhores condições.
              </p>

              {/* Vantagens de nos contactar */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-950 mb-2">
                      Resposta Rápida
                    </h3>
                    <p className="text-navy-600">
                      Garantimos resposta em menos de 24 horas úteis
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-950 mb-2">
                      Consultoria Gratuita
                    </h3>
                    <p className="text-navy-600">
                      Avaliação e consultoria imobiliária sem compromisso
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-950 mb-2">
                      Visitas Agendadas
                    </h3>
                    <p className="text-navy-600">
                      Marcamos visitas nos horários mais convenientes para si
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-12 p-6 bg-green-50 border border-green-200">
                <h3 className="text-xl font-semibold text-navy-950 mb-3">
                  Prefere falar connosco pelo WhatsApp?
                </h3>
                <p className="text-navy-600 mb-4">
                  Estamos disponíveis para esclarecer as suas dúvidas de forma rápida e prática.
                </p>
                <a
                  href="https://wa.me/351211627071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Coluna Direita - Formulário */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-0">
        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.7894!2d-9.3102!3d38.6902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec9c1e4e4e4e5%3A0x1234567890abcdef!2sAvenida%20das%20Descobertas%2059%2C%20Oeiras!5e0!3m2!1spt-PT!2spt!4v1234567890123!5m2!1spt-PT!2spt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização QV Imobiliária"
          />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="container-premium text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Certificação AMI 17398
          </h2>
          <p className="text-xl text-silver-200 max-w-2xl mx-auto">
            Mediação Imobiliária Certificada e Regulamentada pelo IMPIC
          </p>
        </div>
      </section>
    </>
  )
}
