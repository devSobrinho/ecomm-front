import { GetStaticProps } from 'next';

import { Background } from '@components/Background';
import { Test } from '@components/Test';

export default function test(): JSX.Element {
  return (
    <>
      <main
        style={{
          height: '100vh',
        }}
      >
        <Test />
      </main>
    </>
  );
}
