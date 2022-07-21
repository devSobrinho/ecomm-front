import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
  list: any[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  count: number;
  totalPages: number;
}

export const initialState: PokemonsState = {
  list: [],
  count: 0,
  totalPages: 0,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const getPokemons = createAsyncThunk(
  'getPokemon',
  async (page: number) => {
    page <= 0 && page === 1;
    const perPage = 20;
    const limit = perPage;
    const offset = perPage * (page - 1);
    const pokemons: any[] = [];
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
    );
    const pokemonsResponse = await response.json();

    for (const pok of pokemonsResponse.results) {
      const response = await fetch(pok.url);
      const pokemonResponse = await response.json();
      pokemons.push(pokemonResponse);
    }

    return { count: pokemonsResponse.count, pokemons };
  },
);

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.list = action.payload.pokemons;
        state.count = action.payload.count;
        state.totalPages = Math.floor(action.payload.count / 20);
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(getPokemons.rejected, (state) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
      });
  },
});
// redux toolkit
// redux toolkit query
export default pokemonsSlice.reducer;
