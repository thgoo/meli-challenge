import { Product } from '@/types/product';
import styles from './ProductDetails.module.scss';

interface Props {
  data: Product;
}

const MAIN_CLASS = 'product-details';
const CLASSES = {
  MAIN: styles[MAIN_CLASS],
  DETAILS: styles[`${MAIN_CLASS}__details`],
  PICTURE: styles[`${MAIN_CLASS}__picture`],
  DATA: styles[`${MAIN_CLASS}__data`],
  CONDITION: styles[`${MAIN_CLASS}__condition`],
  TITLE: styles[`${MAIN_CLASS}__title`],
  PRICE: styles[`${MAIN_CLASS}__price`],
  DESCRIPTION: styles[`${MAIN_CLASS}__description`],
};

export default function ProductDetails({ data }: Props) {
  return (
    <div className={CLASSES.MAIN}>
      <div className={CLASSES.DETAILS}>
        <div className={CLASSES.PICTURE} style={{ backgroundImage: `url(${data.picture})` }} role="img" />
        <div className={CLASSES.DATA}>
          <p className={CLASSES.CONDITION}>
            {data.condition === 'new' ? 'Nuevo' : 'Usado'}
            {data.sold_quantity && ` - ${data.sold_quantity}`}
          </p>
          <h1 className={CLASSES.TITLE}>{data.title}</h1>
          <p className={CLASSES.PRICE}>
            {data.price.amount.toLocaleString('es-AR', {
              style: 'currency', currency: data.price.currency, maximumFractionDigits: 0,
            })}
            <small>{data.price.decimals.toString().padStart(2, '0')}</small>
          </p>
          <p>
            <button type="button">Comprar</button>
          </p>
        </div>
      </div>
      <div className={CLASSES.DESCRIPTION}>
        <h3>Descripción del producto</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
