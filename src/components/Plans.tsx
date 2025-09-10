// src/components/Plans.tsx

import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, CheckCircle2, Star, XCircle } from 'lucide-react';

// Estrutura de dados para as funcionalidades
const features = [
  { name: 'Consulta de produtos', description: 'Acesso completo ao banco de dados de produtos.', iniciante: true, pro: true },
  { name: 'Geração de links de afiliado', description: 'Links únicos com tracking personalizado.', iniciante: true, pro: true },
  { name: 'Análises básicas', description: 'Relatórios de cliques e conversões.', iniciante: true, pro: true },
  { name: 'Suporte por email', description: 'Atendimento em até 48h.', iniciante: true, pro: true },
  { name: 'Recomendações personalizadas', description: 'IA sugere produtos baseado no seu histórico.', iniciante: false, pro: true },
  { name: 'Filtro por score de produto', description: 'Filtre produtos por pontuação de qualidade.', iniciante: false, pro: true },
  { name: 'Análises avançadas', description: 'Relatórios detalhados e insights de performance.', iniciante: false, pro: true },
  { name: 'API para integração', description: 'Integre com suas próprias ferramentas.', iniciante: false, pro: true },
  { name: 'Suporte prioritário', description: 'Atendimento em até 2h via WhatsApp.', iniciante: false, pro: true },
  { name: 'Exportação de dados', description: 'Baixe seus dados em CSV e Excel.', iniciante: false, pro: true },
];

// --- NOVO: Estrutura de dados para o FAQ ---
const faqData = [
    {
        question: 'Posso cancelar a qualquer momento?',
        answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento.'
    },
    {
        question: 'Como funciona o upgrade?',
        answer: 'O upgrade é instantâneo e você paga apenas a diferença proporcional do período atual.'
    },
    {
        question: 'Existe desconto anual?',
        answer: 'Sim! Assinantes anuais recebem 2 meses grátis (20% de desconto).'
    },
    {
        question: 'Posso testar antes de assinar?',
        answer: 'Oferecemos 7 dias grátis do plano Pro para novos usuários.'
    }
];

interface PlansProps {
  onBack: () => void;
}

const Plans: React.FC<PlansProps> = ({ onBack }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 min-h-screen">
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft size={16} />
        Voltar
      </button>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Escolha seu Plano</h1>
        <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">Encontre o plano ideal para acelerar seus resultados como afiliado.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
        {/* Coluna de Funcionalidades */}
        <div className="hidden lg:block pt-16">
            <div className="flex items-center gap-3 mb-4">
                <Star className="text-indigo-500" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Funcionalidades</h3>
            </div>
            <p className="text-gray-500 mb-6">Compare todos os recursos disponíveis.</p>
            <div className="space-y-6">
                {features.map((feature) => (
                <div key={feature.name}>
                    <p className="font-semibold text-gray-700">{feature.name}</p>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
                ))}
            </div>
        </div>

        {/* Plano Iniciante */}
        <Card className="rounded-xl shadow-md bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">Afiliado Iniciante</CardTitle>
            <p className="text-4xl font-extrabold text-gray-900 mt-4">R$ 49,90<span className="text-lg font-medium text-gray-500">/mês</span></p>
            <p className="mt-2 text-sm text-gray-500">Ideal para começar</p>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.name} className="flex items-center gap-3">
                  {feature.iniciante 
                    ? <CheckCircle2 className="text-green-500" size={20} /> 
                    : <XCircle className="text-gray-400" size={20} />
                  }
                  <span className={`text-sm ${feature.iniciante ? 'text-gray-700' : 'text-gray-400'}`}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        {/* Plano Pro */}
        <Card className="rounded-xl shadow-2xl bg-white border-2 border-indigo-500 relative transform lg:scale-105">
           <div className="absolute top-0 right-4 -mt-3">
             <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Mais Popular</span>
           </div>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">Afiliado Pro</CardTitle>
            <p className="text-4xl font-extrabold text-gray-900 mt-4">R$ 99,90<span className="text-lg font-medium text-gray-500">/mês</span></p>
            <p className="mt-2 text-sm text-gray-500">Máximo desempenho</p>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-4 mb-6">
              {features.map((feature) => (
                <li key={feature.name} className="flex items-center gap-3">
                  {feature.pro 
                    ? <CheckCircle2 className="text-green-500" size={20} /> 
                    : <XCircle className="text-gray-400" size={20} />
                  }
                  <span className="text-sm text-gray-700">
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base py-6">
              Fazer Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* --- NOVA SEÇÃO DE FAQ --- */}
      <section className="max-w-4xl mx-auto mt-20">
        <Card className="rounded-xl shadow-md bg-white p-8 sm:p-10">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
                Perguntas Frequentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {faqData.map((faqItem) => (
                    <div key={faqItem.question}>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">
                            {faqItem.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {faqItem.answer}
                        </p>
                    </div>
                ))}
            </div>
        </Card>
      </section>
      
    </div>
  );
};

export default Plans;