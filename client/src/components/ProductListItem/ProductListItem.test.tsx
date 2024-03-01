import { render } from '@testing-library/react';
import ProductListItem from './ProductListItem';

describe('ProductListItem', () => {
  const mockData = {
    id: 'MLA123',
    title: 'Test Product',
    price: {
      amount: 100,
      currency: 'ARS',
      decimals: 99,
    },
    picture: 'https://example.com/product.jpg',
    condition: 'new',
    free_shipping: true,
  };

  it('renders product information correctly', () => {
    const { getByText, getByAltText } = render(<ProductListItem data={mockData} />);

    expect(getByText('$ 100')).toBeInTheDocument();
    expect(getByText('99')).toBeInTheDocument();
    expect(getByText('Test Product')).toBeInTheDocument();
    expect(getByText('Nuevo')).toBeInTheDocument();
    expect(getByAltText('envio gratis')).toBeInTheDocument();
  });

  it('renders used product condition correctly', () => {
    const usedData = { ...mockData, condition: 'used' };
    const { getByText } = render(<ProductListItem data={usedData} />);

    expect(getByText('Usado')).toBeInTheDocument();
  });

  it('does not render free shipping image when free_shipping is false', () => {
    const noShippingData = { ...mockData, free_shipping: false };
    const { queryByAltText } = render(<ProductListItem data={noShippingData} />);

    expect(queryByAltText('envio gratis')).toBeNull();
  });
});
