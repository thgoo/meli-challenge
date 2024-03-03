import ProductDetails from '@/components/ProductDetails/ProductDetails';
import Layout from '@/components/common/Layout/Layout';
import ProductService from '@/services/ProductService';
import { ProductResponse } from '@/types/responses';

interface Props {
  product: ProductResponse;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps = async (context: any) => {
  try {
    const productService = new ProductService();
    const product = await productService.getProductById(context.params.id);
    return { props: { product } };
  } catch {
    return { notFound: true };
  }
};

export default function ProductDetailsPage({ product }: Props) {
  return (
    <Layout breadcrumbItems={product.categories}>
      <ProductDetails data={product.item} />
    </Layout >
  );
}
