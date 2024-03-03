import Layout from '@/components/common/Layout/Layout';
import Link from 'next/link';

export default function Error404() {
  return (
    <Layout>
      <h1>Parece que esta página no existe</h1>
      <p><Link href="/">Ir a la página principal.</Link></p>
    </Layout>
  );
}
