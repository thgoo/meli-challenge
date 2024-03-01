import { Suspense } from 'react';
import SearchBar from '@/components/SearchBar/SearchBar';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import styles from './Layout.module.scss';

interface Props {
  children?: React.ReactNode;
  breadcrumbItems?: string[];
}

const MAIN_CLASS = 'main-layout';
const CLASSES = {
  MAIN: styles[MAIN_CLASS],
  BREADCRUMB_WRAPPER: styles[`${MAIN_CLASS}__breadcrumb-wrapper`],
  CONTENT: styles[`${MAIN_CLASS}__content`],
};

export default function Layout({ children, breadcrumbItems = [] }: Props) {
  return (
    <div className={CLASSES.MAIN}>
      <SearchBar />
      <Suspense fallback={<p>loading...</p>}>
        {breadcrumbItems.length > 0 && (
          <div className={CLASSES.BREADCRUMB_WRAPPER}>
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
      </Suspense>
      {children && (
        <div className={CLASSES.CONTENT}>
          {children}
        </div>
      )}
    </div>
  );
}
