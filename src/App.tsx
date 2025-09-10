import React, { useState } from 'react';
import ProductSearch from './components/ProductSearch';
// Importe outros componentes de página aqui quando criá-los
// import Plans from './components/Plans';
// import Analytics from './components/Analytics';
import { User, Shield, BarChart2, Search } from 'lucide-react';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'dashboard' | 'analytics' | 'plans'>('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <ProductSearch />;
      // case 'analytics':
      //   return <Analytics />;
      // case 'plans':
      //   return <Plans />;
      default:
        return <ProductSearch />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></div>
              <span className="font-bold text-xl text-gray-800">Clube do Afiliado</span>
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setActiveView('plans')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Planos
              </button>
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm leading-tight">João Silva</p>
                  <span className="text-xs text-white font-semibold bg-green-500 px-2 py-0.5 rounded-full">Iniciante</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`flex items-center gap-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeView === 'dashboard'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Search size={16} />
                Buscar Produtos
              </button>
              <button
                // onClick={() => setActiveView('recommendations')} // Adicionar quando a funcionalidade estiver pronta
                className={`flex items-center gap-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300`}
              >
                <Shield size={16} />
                Recomendações
              </button>
              <button
                onClick={() => setActiveView('analytics')}
                className={`flex items-center gap-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeView === 'analytics'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <BarChart2 size={16} />
                Análises
              </button>
            </nav>
          </div>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;