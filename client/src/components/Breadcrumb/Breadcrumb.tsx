import styles from './Breadcrumb.module.scss';

interface Props {
  items: string[];
}

const MAIN_CLASS = 'breadcrumb';
const CLASSES = {
  MAIN: styles[MAIN_CLASS],
  ITEM: styles[`${MAIN_CLASS}__item`],
};

export default function Breadcrumb({ items }: Props) {
  return (
    <div className={CLASSES.MAIN} aria-label="breadcrumb">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className={CLASSES.ITEM}>
          {item}
        </span>
      ))}
    </div>
  );
}
