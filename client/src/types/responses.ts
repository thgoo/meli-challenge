import { Author } from '@/types/author';
import { Product } from '@/types/product';

export interface SearchResponse {
  author: Author;
  categories: string[];
  items: Omit<Product, 'sold_quantity' | 'description'>[];
}

export interface ProductResponse {
  author: Author;
  item: Product;
  categories: string[];
}
