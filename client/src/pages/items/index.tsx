import { useSearchParams } from 'next/navigation';
import Layout from '@/components/common/Layout/Layout';
import ProductService from '@/services/ProductService';
import { SearchResponse } from '@/types/responses';
import ProductList from '@/components/ProductList/ProductList';

interface Props {
  products: SearchResponse;
}

export const getServerSideProps = async (context: any) => {
  try {
    const productService = new ProductService();
    const data = await productService.getProducts(context.query.search);

    return { props: { products: data } };
  } catch {
    return {
      redirect: {
        destination: '/error',
        permanent: true,
      },
    };
  }
};

export default function SearchResultsPage({ products }: Props) {
  return (
    <Layout breadcrumbItems={products.categories}>
      <ProductList items={products.items} />
    </Layout>
  );
}
