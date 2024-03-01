import { render, screen } from '@testing-library/react';
import { Product } from '@/types/product';
import ProductList from './ProductList';

const mockItems: Omit<Product, 'sold_quantity' | 'description'>[] = [
  {
    id: 'MELI123',
    title: 'Product 1',
    price: {
      currency: 'ARS',
      amount: 10,
      decimals: 99,
    },
    picture: 'product1.jpg',
    condition: 'new',
    free_shipping: false,
  },
  {
    id: 'MELI456',
    title: 'Product 2',
    price: {
      currency: 'ARS',
      amount: 20,
      decimals: 0,
    },
    picture: 'product2.jpg',
    condition: 'used',
    free_shipping: false,
  },
];

describe('ProductList', () => {
  it('renders the list of products correctly', () => {
    render(<ProductList items={mockItems} />);

    const productElements = screen.getAllByRole('link');
    expect(productElements).toHaveLength(mockItems.length);

    mockItems.forEach((item, index) => {
      const productElement = productElements[index];
      expect(productElement).toHaveTextContent(item.title);
      expect(productElement).toHaveTextContent(`$ ${item.price.amount}`);
      expect(productElement).toHaveTextContent(`${item.price.decimals.toString().padStart(2, '0')}`);
      expect(productElement).toHaveAttribute('href', `/items/${item.id}`);
    });
  });
});
