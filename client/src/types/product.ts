import { Author } from '@/types/author';
import { Price } from '@/types/price';

export interface Product {
  id: string;
  title: string;
  price: Price
  picture: string;
  condition: string;
  free_shipping: boolean;
  description: string;
  sold_quantity?: number;
}
