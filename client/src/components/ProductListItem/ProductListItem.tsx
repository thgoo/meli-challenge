import Image from 'next/image';
import imgFreeShipping from '@/assets/image/ic_shipping@2x.png';
import { Product } from '@/types/product';
import styles from './ProductListItem.module.scss';

interface Props {
  data: Omit<Product, 'sold_quantity' | 'description'>;
}

const MAIN_CLASS = 'product-list-item';
const CLASSES = {
  MAIN: styles[MAIN_CLASS],
  IMAGE: styles[`${MAIN_CLASS}__image`],
  PRODUCT_INFO: styles[`${MAIN_CLASS}__product-info`],
  PRICE: styles[`${MAIN_CLASS}__price`],
  NAME: styles[`${MAIN_CLASS}__name`],
  CONDITION: styles[`${MAIN_CLASS}__condition`],
};

export default function ProductListItem({ data }: Props) {
  return (
    <div className={CLASSES.MAIN}>
      <div className={CLASSES.IMAGE} role="img" style={{ backgroundImage: `url(${data.picture})` }} />
      <div className={CLASSES.PRODUCT_INFO}>
        <p className={CLASSES.PRICE}>
          {data.price.amount.toLocaleString('es-AR', {
            style: 'currency', currency: data.price.currency, maximumFractionDigits: 0,
          })}
          <small>
            {data.price.decimals.toString().padStart(2, '0')}
          </small>
          {data.free_shipping && (
            <span>
              <Image src={imgFreeShipping} width={18} alt="envio gratis" />
            </span>
          )}
        </p>
        <p className={CLASSES.NAME}>
          {data.title}
        </p>
      </div>
      <p className={CLASSES.CONDITION}>
        {data.condition === 'new' ? 'Nuevo' : 'Usado'}
      </p>
    </div>
  );
}
