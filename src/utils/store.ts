import { create } from "zustand";
import { PokemonListItemData } from "../components/pokedex/types";

interface PokemonListItemState {
  pokemons: PokemonListItemData[];
  filter: string;
  setList: (by: PokemonListItemData[]) => void;
}

export const usePokemonListItemStore = create<PokemonListItemState>()(
  (set) => ({
    pokemons: [],
    filter: "",
    setList: (by: PokemonListItemData[]) =>
      set((state) => ({ pokemons: state.pokemons })),
    setFilter: (by: string) => set((state) => ({ filter: state.filter })),
  }),
);
