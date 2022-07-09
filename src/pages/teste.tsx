import { GoogleIcon } from '@components/icons/Google';
import { InputButton } from '@components/Input/InputButton';
import { ListTotal } from '@components/Listagem';
import mockList from '../mock/mockList';
import { HeaderMock } from '@mock/components/header/headerMock';
import { Header } from 'src/layout/Header';

export default function test(): JSX.Element {
  console.log('aq', HeaderMock);

  return (
    <>
      {mockList.map((list, index) => (
        <ListTotal key={index} name={list.name} subList={list.subList} />
      ))}
    </>
  );
}
