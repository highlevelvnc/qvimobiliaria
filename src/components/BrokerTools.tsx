'use client'

import { useState } from 'react'
import { Calculator, FileText, TrendingUp, Download, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

interface BrokerToolsProps {
  propertyPrice: number
  propertyTitle: string
}

const BrokerTools = ({ propertyPrice, propertyTitle }: BrokerToolsProps) => {
  const [loanAmount, setLoanAmount] = useState(propertyPrice * 0.8) // 80% do valor
  const [interestRate, setInterestRate] = useState(4.5) // Taxa padrão
  const [years, setYears] = useState(30)

  // Cálculo de prestação mensal
  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = years * 12
    
    if (interestRate === 0) return loanAmount / numberOfPayments
    
    const monthlyPayment = 
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    
    return monthlyPayment
  }

  const monthlyPayment = calculateMonthlyPayment()
  const totalPayment = monthlyPayment * years * 12
  const totalInterest = totalPayment - loanAmount

  // Calcular IMT (Imposto Municipal sobre Transmissões)
  const calculateIMT = () => {
    if (propertyPrice <= 92407) return 0
    if (propertyPrice <= 126403) return (propertyPrice - 92407) * 0.02
    if (propertyPrice <= 172348) return 680 + (propertyPrice - 126403) * 0.05
    if (propertyPrice <= 287213) return 2977.25 + (propertyPrice - 172348) * 0.07
    if (propertyPrice <= 574323) return 11017.80 + (propertyPrice - 287213) * 0.08
    return 33969.60 + (propertyPrice - 574323) * 0.06
  }

  const imt = calculateIMT()
  const stampDuty = propertyPrice * 0.008 // Imposto de Selo (0.8%)
  const registrationFee = 250 // Taxa de registo aproximada
  const notaryFee = 500 // Custos notariais aproximados

  const totalAcquisitionCosts = imt + stampDuty + registrationFee + notaryFee

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: propertyTitle,
          text: `Confira este imóvel incrível: ${propertyTitle} por ${new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(propertyPrice)}`,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Erro ao compartilhar:', err)
      }
    }
  }

  return (
    <div className="space-y-6">
      {/* Calculadora de Financiamento */}
      <div className="bg-white border border-silver-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
            <Calculator className="w-6 h-6 text-gold-500" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-navy-950">
              Calculadora de Financiamento
            </h3>
            <p className="text-sm text-navy-600">Simule a sua prestação mensal</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Valor do Empréstimo */}
          <div>
            <label className="block text-sm font-semibold text-navy-950 mb-2">
              Valor do Empréstimo
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full px-4 py-2 border border-silver-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500 focus:ring-opacity-20 transition-all"
            />
          </div>

          {/* Taxa de Juro */}
          <div>
            <label className="block text-sm font-semibold text-navy-950 mb-2">
              Taxa de Juro Anual (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-2 border border-silver-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500 focus:ring-opacity-20 transition-all"
            />
          </div>

          {/* Prazo */}
          <div>
            <label className="block text-sm font-semibold text-navy-950 mb-2">
              Prazo (anos)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full px-4 py-2 border border-silver-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500 focus:ring-opacity-20 transition-all"
            />
          </div>

          {/* Resultados */}
          <div className="pt-4 border-t border-silver-200 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-navy-600">Prestação Mensal:</span>
              <span className="text-2xl font-bold text-gold-500">
                {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(monthlyPayment)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-navy-600">Total a Pagar:</span>
              <span className="font-semibold text-navy-950">
                {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(totalPayment)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-navy-600">Total de Juros:</span>
              <span className="font-semibold text-navy-950">
                {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(totalInterest)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custos de Aquisição */}
      <div className="bg-white border border-silver-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
            <FileText className="w-6 h-6 text-gold-500" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-navy-950">
              Custos de Aquisição
            </h3>
            <p className="text-sm text-navy-600">Estimativa de custos adicionais</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-navy-600">IMT (Imposto Municipal):</span>
            <span className="font-semibold text-navy-950">
              {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(imt)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-navy-600">Imposto de Selo:</span>
            <span className="font-semibold text-navy-950">
              {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(stampDuty)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-navy-600">Taxa de Registo:</span>
            <span className="font-semibold text-navy-950">
              {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(registrationFee)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-navy-600">Custos Notariais:</span>
            <span className="font-semibold text-navy-950">
              {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(notaryFee)}
            </span>
          </div>
          <div className="pt-3 border-t border-silver-200 flex justify-between">
            <span className="font-semibold text-navy-950">Total Estimado:</span>
            <span className="text-xl font-bold text-gold-500">
              {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(totalAcquisitionCosts)}
            </span>
          </div>
        </div>
      </div>

      {/* Ações Rápidas para Brokers */}
      <div className="bg-navy-950 text-white p-6">
        <h3 className="text-lg font-semibold mb-4">Ferramentas do Corretor</h3>
        <div className="space-y-3">
          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Share2 className="w-5 h-5" />
            Partilhar Imóvel
          </button>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors">
            <Download className="w-5 h-5" />
            Download Ficha Técnica
          </button>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gold-500 text-navy-950 hover:bg-gold-600 transition-colors font-semibold">
            <TrendingUp className="w-5 h-5" />
            Análise de Investimento
          </button>
        </div>
      </div>
    </div>
  )
}

export default BrokerTools
