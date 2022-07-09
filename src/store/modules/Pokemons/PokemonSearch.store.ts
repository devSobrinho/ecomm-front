import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { REHYDRATE } from 'redux-persist';

interface Pokemon {
  name: string;
  url: string;
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),

  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// extractRehydrationInfo(action, { reducerPath }) {
// if (action.type === REHYDRATE) {
//   return action.payload[reducerPath];
// }
// },

export const { useGetPokemonByNameQuery } = pokemonApi;
export const useGetPokemonByNameQuery2 =
  pokemonApi.endpoints.getPokemonByName.useQuery;
