import React, { useState, useMemo } from 'react';
import { Product } from '@/types';
import { mockProducts } from '@/data/mockData';
import ProductCard from './ProductCard';
import { ChevronDown, Filter } from 'lucide-react'; // Ícones para os filtros

// Supondo que você tenha um componente Dropdown para seleção
// Para simplificar, vou usar elementos <select> nativos, mas você pode substituí-los por componentes de UI mais bonitos

const ProductSearch: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'E-commerce' | 'Infoproduto'>('E-commerce');
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  // Estados para os filtros
  const [marketplaceFilter, setMarketplaceFilter] = useState<string>('Todos');
  const [categoryFilter, setCategoryFilter] = useState<string>('Todas');
  const [orderBy, setOrderBy] = useState<'Ranking' | 'Preço' | 'Comissão'>('Ranking');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [trendingFilter, setTrendingFilter] = useState<'Sim' | 'Não' | 'Todos'>('Todos');
  const [filtersExpanded, setFiltersExpanded] = useState<boolean>(true); // Estado para expandir/colapsar filtros

  const handleToggleProduct = (product: Product) => {
    setSelectedProducts(prev =>
      prev.find(p => p.id === product.id)
        ? prev.filter(p => p.id !== product.id)
        : [...prev, product]
    );
  };

  // Coletar opções únicas para os filtros
  const uniqueMarketplaces = useMemo(() => {
    const all = mockProducts.map(p => p.marketplace);
    return ['Todos', ...Array.from(new Set(all))];
  }, []);

  const uniqueCategories = useMemo(() => {
    const all = mockProducts.map(p => 'categoria-generica'); // Adapte isso se seus produtos tiverem categorias reais
    return ['Todas', ...Array.from(new Set(all))];
  }, []);


  // Lógica de Filtragem e Ordenação
  const filteredAndSortedProducts = useMemo(() => {
    let tempProducts = mockProducts.filter(p => p.type === activeCategory);

    // Filtrar por Marketplace
    if (marketplaceFilter !== 'Todos') {
      tempProducts = tempProducts.filter(p => p.marketplace === marketplaceFilter);
    }

    // Filtrar por Categoria (usando uma categoria genérica por enquanto)
    if (categoryFilter !== 'Todas') {
        // Implementar lógica de filtro de categoria real aqui
        // Ex: tempProducts = tempProducts.filter(p => p.category === categoryFilter);
    }

    // Filtrar por Preço
    const minP = parseFloat(minPrice);
    const maxP = parseFloat(maxPrice);
    if (!isNaN(minP)) {
      tempProducts = tempProducts.filter(p => p.price >= minP);
    }
    if (!isNaN(maxP)) {
      tempProducts = tempProducts.filter(p => p.price <= maxP);
    }

    // Filtrar por Trending
    if (trendingFilter === 'Sim') {
      tempProducts = tempProducts.filter(p => p.trending);
    } else if (trendingFilter === 'Não') {
      tempProducts = tempProducts.filter(p => !p.trending);
    }

    // Ordenar
    tempProducts.sort((a, b) => {
      if (orderBy === 'Ranking') {
        return a.rank - b.rank;
      }
      if (orderBy === 'Preço') {
        return a.price - b.price;
      }
      if (orderBy === 'Comissão') {
        return b.commission - a.commission; // Maior comissão primeiro
      }
      return 0;
    });

    return tempProducts;
  }, [
    activeCategory,
    marketplaceFilter,
    categoryFilter,
    orderBy,
    minPrice,
    maxPrice,
    trendingFilter,
  ]);

  return (
    <div>
      <div className="flex space-x-2 border-b mb-4">
        <button
          onClick={() => setActiveCategory('E-commerce')}
          className={`py-2 px-4 font-semibold ${activeCategory === 'E-commerce' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}
        >
          E-commerce
        </button>
        <button
          onClick={() => setActiveCategory('Infoproduto')}
          className={`py-2 px-4 font-semibold ${activeCategory === 'Infoproduto' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}
        >
          Infoprodutos
        </button>
      </div>

      {/* Seção de Filtros */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-6 border border-gray-200">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setFiltersExpanded(!filtersExpanded)}>
          <h3 className="font-bold text-lg flex items-center gap-2 text-gray-700">
            <Filter size={20} />
            Filtros
          </h3>
          <ChevronDown size={20} className={`transform transition-transform ${filtersExpanded ? 'rotate-180' : 'rotate-0'}`} />
        </div>

        {filtersExpanded && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
            {/* Filtro de Marketplace */}
            <div>
              <label htmlFor="marketplace" className="block text-sm font-medium text-gray-700">Marketplace</label>
              <select
                id="marketplace"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={marketplaceFilter}
                onChange={(e) => setMarketplaceFilter(e.target.value)}
              >
                {uniqueMarketplaces.map(mp => (
                  <option key={mp} value={mp}>{mp}</option>
                ))}
              </select>
            </div>

            {/* Filtro de Categoria */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoria</label>
              <select
                id="category"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {uniqueCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Ordenar por */}
            <div>
              <label htmlFor="orderBy" className="block text-sm font-medium text-gray-700">Ordenar por</label>
              <select
                id="orderBy"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value as 'Ranking' | 'Preço' | 'Comissão')}
              >
                <option value="Ranking">Ranking</option>
                <option value="Preço">Preço</option>
                <option value="Comissão">Comissão</option>
              </select>
            </div>

            {/* Faixa de Preço */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1"> {/* Ajuste para ocupar 1 coluna em telas maiores */}
              <label className="block text-sm font-medium text-gray-700">Faixa de Preço</label>
              <div className="mt-1 flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="block w-1/2 pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="block w-1/2 pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            {/* Trending */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Trending</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <button
                  onClick={() => setTrendingFilter('Sim')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-md border ${trendingFilter === 'Sim' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                >
                  Sim
                </button>
                <button
                  onClick={() => setTrendingFilter('Não')}
                  className={`flex-1 px-4 py-2 text-sm font-medium border-t border-b ${trendingFilter === 'Não' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                >
                  Não
                </button>
                 <button
                  onClick={() => setTrendingFilter('Todos')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-md border ${trendingFilter === 'Todos' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                >
                  Todos
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Exibição dos produtos */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Produtos {activeCategory === 'E-commerce' ? 'E-commerce' : 'Infoprodutos'}
      </h2>
      <p className="text-sm text-gray-600 mb-6">{filteredAndSortedProducts.length} produtos encontrados</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredAndSortedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToMessage={handleToggleProduct}
            isSelected={!!selectedProducts.find(p => p.id === product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;