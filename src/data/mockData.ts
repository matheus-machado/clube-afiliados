import { Product, MessageHistory } from '../types';

export const mockProducts: Product[] = [
  // ... (Cole aqui os dados mockados dos produtos que foram gerados anteriormente)
  // Exemplo:
  {
    id: 1,
    marketplace: 'Amazon',
    type: 'E-commerce',
    name: 'Smartphone Samsung Galaxy A54',
    imageUrl: 'https://images.unsplash.com/photo-1678864312282-088a3d7698c1?q=80&w=400',
    rank: 1,
    score: 4.8,
    price: 1899.90,
    commission: 120.50,
    seller: 'Samsung Official Store',
    sales: 15420,
    link: '#',
  },
  {
    id: 2,
    marketplace: 'Mercado Livre',
    type: 'E-commerce',
    name: 'Air Fryer Mondial 5.5L',
    imageUrl: 'https://images.unsplash.com/photo-1620700753999-53e7d563a6a2?q=80&w=400',
    rank: 2,
    score: 4.6,
    price: 299.90,
    commission: 85.30,
    seller: 'Mondial Store',
    sales: 8932,
    link: '#',
  },
  // Adicione mais 10-15 produtos para preencher a tela
];

export const mockMessageHistory: MessageHistory[] = [
    // ... (Cole aqui os dados mockados do histórico de mensagens)
    // Exemplo:
    {
        id: 'msg-001',
        timestamp: '2024-09-08 10:30',
        content: 'Confira estas ofertas incríveis!',
        products: [mockProducts[0], mockProducts[2]],
        stats: {
            clicks: 152,
            conversions: 12,
        },
    }
];