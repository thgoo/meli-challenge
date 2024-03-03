import Link from 'next/link';
import ProductListItem from '@/components/ProductListItem/ProductListItem';
import { Product } from '@/types/product';
import styles from './ProductList.module.scss';

interface Props {
  items: Omit<Product, 'sold_quantity' | 'description'>[];
}

const MAIN_CLASS = 'product-list';
const CLASSES = {
  MAIN: styles[MAIN_CLASS],
  PRODUCT_WRAPPER: styles[`${MAIN_CLASS}__product-wrapper`],
};

export default function ProductList({ items }: Props) {
  return (
    <div className={CLASSES.MAIN}>
      {items.length === 0 && <p>No se encontraron resultados</p>}
      {items.map(product => (
        <div className={CLASSES.PRODUCT_WRAPPER} key={product.id}>
          <Link href={`/items/${product.id}`}>
            <ProductListItem data={product} />
          </Link>
        </div>
      ))}
    </div>
  );
}
