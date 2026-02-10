'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import toast from 'react-hot-toast'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Pedido de Informação',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio (em produção, integrar com backend ou serviço de email)
    setTimeout(() => {
      setIsSubmitting(false)
      
      // Toast de sucesso
      toast.success('Mensagem enviada com sucesso! Entraremos em contacto em breve.', {
        duration: 5000,
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Pedido de Informação',
        message: '',
      })
    }, 1500)
  }

  return (
    <div className="bg-white p-8 border border-silver-200 shadow-premium">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy-950 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-premium"
            placeholder="O seu nome"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-950 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-premium"
            placeholder="seuemail@exemplo.com"
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy-950 mb-2">
            Telefone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input-premium"
            placeholder="+351 912 345 678"
          />
        </div>

        {/* Assunto */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-navy-950 mb-2">
            Assunto *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="input-premium"
          >
            <option value="Pedido de Informação">Pedido de Informação</option>
            <option value="Agendar Visita">Agendar Visita</option>
            <option value="Vender Imóvel">Vender o Meu Imóvel</option>
            <option value="Comprar Imóvel">Comprar Imóvel</option>
            <option value="Avaliação">Pedido de Avaliação</option>
            <option value="Outro">Outro Assunto</option>
          </select>
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-navy-950 mb-2">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="input-premium resize-none"
            placeholder="Escreva aqui a sua mensagem..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-premium flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <div className="spinner-premium w-5 h-5 border-2" />
              A Enviar...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar Mensagem
            </>
          )}
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-navy-500 text-center">
          Ao enviar este formulário, concorda com o tratamento dos seus dados pessoais
          de acordo com a nossa Política de Privacidade.
        </p>
      </form>
    </div>
  )
}

export default ContactForm
