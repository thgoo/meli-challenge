import ProductDetails from '@/components/ProductDetails/ProductDetails';
import Layout from '@/components/common/Layout/Layout';
import ProductService from '@/services/ProductService';
import { ProductResponse } from '@/types/responses';
import Head from 'next/head';

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
      <Head>
        <title>{`${product.item.title} - Meli Challenge`}</title>
        <meta property="og:title" content="Meli Challenge" />
        {product.item.description && (
          <>
            <meta name="description" content={`${product.item.description.substring(0, 300)}…`} />
            <meta property="og:description" content={`${product.item.description.substring(0, 300)}…`} />
          </>
        )}
        {product.item.picture && (
          <meta property="og:image" content={product.item.picture} />
        )}
      </Head>
      <ProductDetails data={product.item} />
    </Layout >
  );
}
