import { Product } from '@/types';
import { Share2, PlusCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface ProductCardProps {
  product: Product;
  onAddToMessage: (product: Product) => void;
  isSelected: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToMessage, isSelected }) => {
  const marketplaceColors: { [key: string]: string } = {
    Amazon: 'text-yellow-500',
    'Mercado Livre': 'text-yellow-400',
    Shopee: 'text-orange-500',
    Magalu: 'text-blue-600',
    TikTok: 'text-pink-500',
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        {product.trending && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Trending</span>
        )}
        <span className="absolute top-2 right-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
          <svg className="w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.07 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z"></path></svg>
          {product.score}
        </span>
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
            <p className={`text-xs font-semibold ${marketplaceColors[product.marketplace] || 'text-gray-500'}`}>
            #{product.rank} {product.marketplace}
            </p>
            <h3 className="font-bold text-base leading-tight mt-1 mb-2">{product.name}</h3>
            <div className="flex flex-col sm:flex-row justify-between text-sm mb-2">
                <div className="mb-1 sm:mb-0">
                    <p className="text-gray-500">Preço</p>
                    <p className="font-semibold">R$ {product.price.toFixed(2)}</p>
                </div>
                <div>
                    <p className="text-gray-500">Comissão</p>
                    <p className="font-semibold text-green-600">R$ {product.commission.toFixed(2)}</p>
                </div>
            </div>
            <p className="text-xs text-gray-500">Vendedor: {product.seller}</p>
            <p className="text-xs text-gray-500">Vendas: ~{product.sales.toLocaleString('pt-BR')} unidades</p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-2">
           <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
              <Share2 size={16} />
              Compartilhar
           </button>
           <button onClick={() => onAddToMessage(product)} className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-colors ${isSelected ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
              {isSelected ? <CheckCircle size={16} /> : <PlusCircle size={16} />}
              {isSelected ? 'Adicionado' : 'Adicionar à Mensagem'}
           </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;