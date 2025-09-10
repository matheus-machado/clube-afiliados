// src/data/mockData.ts

import { Product, MessageHistory } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    marketplace: 'Amazon',
    type: 'E-commerce',
    name: 'Smartphone Samsung Galaxy A54',
    imageUrl: '/samsung.jpeg', // <-- CAMINHO ATUALIZADO
    rank: 1,
    score: 4.8,
    price: 1899.90,
    commission: 120.50,
    seller: 'Samsung Official Store',
    sales: 15420,
    link: '#',
    trending: true,
  },
  {
    id: 2,
    marketplace: 'Mercado Livre',
    type: 'E-commerce',
    name: 'Air Fryer Mondial 5.5L',
    imageUrl: '/airfryer.jpeg', // <-- CAMINHO ATUALIZADO
    rank: 2,
    score: 4.6,
    price: 299.90,
    commission: 85.30,
    seller: 'Mondial Store',
    sales: 8932,
    link: '#',
  },
  {
    id: 3,
    marketplace: 'Shopee',
    type: 'E-commerce',
    name: 'Notebook Gamer Acer Nitro 5',
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=400', // Mantém a URL para os outros
    rank: 3,
    score: 4.7,
    price: 3299.90,
    commission: 350.80,
    seller: 'Acer Brasil',
    sales: 2545,
    link: '#',
  },
  {
    id: 4,
    marketplace: 'Magalu',
    type: 'E-commerce',
    name: 'Tênis Nike Air MAX 270',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400',
    rank: 4,
    score: 4.5,
    price: 549.90,
    commission: 95.40,
    seller: 'Nike Store',
    sales: 12300,
    link: '#',
    trending: true,
  },
  {
    id: 5,
    marketplace: 'TikTok',
    type: 'E-commerce',
    name: 'Fones Bluetooth JBL Tune 510BT',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400',
    rank: 5,
    score: 4.4,
    price: 199.90,
    commission: 45.60,
    seller: 'JBL Official',
    sales: 8543,
    link: '#',
  },
  // Adicione mais produtos para preencher a tela se desejar
];

export const mockMessageHistory: MessageHistory[] = [
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