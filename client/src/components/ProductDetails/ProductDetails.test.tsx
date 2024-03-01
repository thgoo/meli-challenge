import { render } from '@testing-library/react';
import ProductDetails from './ProductDetails';

describe('ProductDetails', () => {
  const mockData = {
    id: 'MLA123',
    title: 'Test Product',
    price: {
      amount: 100,
      currency: 'ARS',
      decimals: 99,
    },
    free_shipping: false,
    picture: 'https://example.com/product.jpg',
    condition: 'new',
    sold_quantity: 10,
    description: 'This is a test product',
  };

  it('renders product details correctly', () => {
    const { getByText, getByRole } = render(<ProductDetails data={mockData} />);
    const pictureDiv = getByRole('img');

    expect(pictureDiv).toHaveStyle(`backgroundImage: url(${mockData.picture})`);
    expect(getByText('Nuevo - 10')).toBeInTheDocument();
    expect(getByText('Test Product')).toBeInTheDocument();
    expect(getByText('$ 100')).toBeInTheDocument();
    expect(getByText('99')).toBeInTheDocument();
    expect(getByText('Comprar')).toBeInTheDocument();
    expect(getByText('Descripción del producto')).toBeInTheDocument();
    expect(getByText('This is a test product')).toBeInTheDocument();
  });

  it('renders used product condition correctly', () => {
    const usedData = { ...mockData, condition: 'used' };
    const { getByText } = render(<ProductDetails data={usedData} />);

    expect(getByText('Usado - 10')).toBeInTheDocument();
  });

  it('renders product without sold quantity correctly', () => {
    const noSoldQuantityData = { ...mockData, sold_quantity: undefined };
    const { getByText } = render(<ProductDetails data={noSoldQuantityData} />);

    expect(getByText('Nuevo')).toBeInTheDocument();
  });
});
