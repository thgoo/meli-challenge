import { ProductResponse, SearchResponse } from '@/types/responses';
import ProductService from './ProductService';

describe('ProductService', () => {
  let productService: ProductService;

  beforeEach(() => {
    productService = new ProductService();
  });

  describe('getProducts', () => {
    it('should fetch products based on the given query', async () => {
      const query = 'iphone';
      const expectedUrl = `${process.env.API_URL}/items?q=${query}`;
      const expectedResponse: SearchResponse = {
        author: {
          name: 'John',
          lastname: 'Doe',
        },
        categories: ['Electronics', 'Phones'],
        items: [
          {
            id: '1',
            title: 'iPhone 11',
            price: {
              currency: 'USD',
              amount: 699,
              decimals: 2,
            },
            picture: 'https://example.com/iphone11.jpg',
            condition: 'new',
            free_shipping: true,
          },
          {
            id: '1',
            title: 'iPhone 12',
            price: {
              currency: 'USD',
              amount: 799,
              decimals: 2,
            },
            picture: 'https://example.com/iphone11.jpg',
            condition: 'new',
            free_shipping: true,
          },
          {
            id: '1',
            title: 'iPhone 13',
            price: {
              currency: 'USD',
              amount: 899,
              decimals: 2,
            },
            picture: 'https://example.com/iphone11.jpg',
            condition: 'new',
            free_shipping: true,
          },
        ],
      };

      // Mock the fetch function
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(expectedResponse),
      });

      const products = await productService.getProducts(query);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
      expect(products).toEqual(expectedResponse);
    });
  });

  describe('getProductById', () => {
    it('should fetch a product based on the given id', async () => {
      const id = '123';
      const expectedUrl = `${process.env.API_URL}/items/${id}`;
      const expectedResponse: ProductResponse = {
        author: {
          name: 'John',
          lastname: 'Doe',
        },
        item: {
          id: '1',
          title: 'iPhone 11',
          price: {
            currency: 'USD',
            amount: 699,
            decimals: 2,
          },
          picture: 'https://example.com/iphone11.jpg',
          condition: 'new',
          free_shipping: true,
          sold_quantity: 500,
          description: 'Brand new iPhone 11',
        },
        categories: ['Electronics', 'Phones'],
      };

      // Mock the fetch function
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(expectedResponse),
      });

      const product = await productService.getProductById(id);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
      expect(product).toEqual(expectedResponse);
    });
  });
});
