import { getPokemons } from '@store/modules/Pokemons/Pokemons.store';
import {
  useGetPokemonByNameQuery,
  useGetPokemonByNameQuery2,
} from '@store/modules/Pokemons/PokemonSearch.store';
import { newArray } from '@utils/newArray';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';

export type TesteProps = {
  title?: string;
};

export const Teste = ({ title }: TesteProps): JSX.Element => {
  const [page, setPage] = useState(1);
  const { pokemons } = useAppSelector();
  const dispatch = useAppDispatch();
  const [pokName, setPokName] = useState('aaa');

  const { data } = useGetPokemonByNameQuery(pokName);
  // const { data: data2 } = useGetPokemonByNameQuery2(pokName);

  const handleClickPage = async (page: number) => {
    if (page >= 1) {
      setPage(page - 1);
      dispatch(getPokemons(page));
    }
  };

  const totalPages = newArray(5);
  // console.log(totalPages);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(pokName);

    // console.log('data2 no form', data2);
    // console.log('data no form', data);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search"
            value={pokName}
            onChange={(e) => setPokName(e.target.value)}
          />

          <button type="submit">Enviar</button>
        </form>
        {totalPages.map((pageButton, index) => (
          <button
            key={index}
            style={{
              background: 'red',
              width: '100px',
              height: '100px',
              margin: '1rem',
            }}
            onClick={() => handleClickPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <h1>Cards:</h1>
        <br />
        <ul>
          {pokemons.list.map((pokemon) => (
            <li key={pokemon.name}>
              <h2>{pokemon.name}</h2>
              <p>{pokemon.url}</p>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
