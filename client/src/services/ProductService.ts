import { ProductResponse, SearchResponse } from '@/types/responses';

export default class ProductService {
  baseUrl = process.env.API_URL;

  async getProducts(query: string): Promise<SearchResponse> {
    const searchParams = new URLSearchParams({
      q: query,
    });
    const response = await fetch(`${this.baseUrl}/items?${searchParams}`);
    const products = await response.json();
    return products;
  }

  async getProductById(id: string): Promise<ProductResponse> {
    const response = await fetch(`${this.baseUrl}/items/${id}`);
    const product = await response.json();
    return product;
  }
}
