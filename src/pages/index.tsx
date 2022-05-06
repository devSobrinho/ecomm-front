import { RootState } from '../store/';
import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { all } from '../store/modules/Products/Products.store';

import HomeTemplates from '../templates/Home';

const Home: NextPage = () => {
  const products = useSelector<RootState>((state) => state.products);
  const dispatch = useDispatch();
  // console.log('MY CATEGORIES', categories);
  dispatch(all('a'));
  return (
    <>
      <HomeTemplates />
    </>
  );
};

export default Home;
