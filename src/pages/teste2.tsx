import { Teste } from '@components/Test/Teste';
import { loadProducts } from '@services/api/api';

export default function test2(): JSX.Element {
  loadProducts();

  return (
    <>
      <Teste />
    </>
  );
}
