import { create } from "zustand";
import { PokemonListItemData } from "../components/pokedex/types";

interface PokemonListItemState {
  pokemons: PokemonListItemData[];
  filter: string;
  setList: (by: PokemonListItemData[]) => void;
  setFilter: (by: string) => void;
}

export const usePokemonListItemStore = create<PokemonListItemState>()(
  (set) => ({
    pokemons: [],
    filter: "",
    setList: (by: PokemonListItemData[]) =>
      set((prevState) => ({ pokemons: by })),
    setFilter: (by: string) => set((prevState) => ({ filter: by })),
  }),
);
