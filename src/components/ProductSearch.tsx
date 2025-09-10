import { useState } from 'react';
import { Product } from '@/types';
import { mockProducts } from '@/data/mockData';
import ProductCard from './ProductCard';

const ProductSearch: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'E-commerce' | 'Infoproduto'>('E-commerce');
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const handleToggleProduct = (product: Product) => {
    setSelectedProducts(prev =>
      prev.find(p => p.id === product.id)
        ? prev.filter(p => p.id !== product.id)
        : [...prev, product]
    );
  };

  const filteredProducts = mockProducts.filter(p => p.type === activeCategory);

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

      {/* AQUI VOCÊ PODE ADICIONAR OS FILTROS */}
      <div className="mb-6 p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Filtros</h3>
        <p className="text-gray-600">Filtros de Marketplace, Categoria, Preço, etc. irão aqui.</p>
      </div>
      
      {/* AQUI ENTRARIA O MessageSummary SE HOUVER PRODUTOS SELECIONADOS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.map(product => (
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