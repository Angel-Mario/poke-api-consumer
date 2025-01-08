import { create } from "zustand";
import { PokemonListItemData } from "../components/pokedex/types";

interface PokemonListItemState {
  pokemons: PokemonListItemData[];
  filter: string;
  version: string;
  setList: (by: PokemonListItemData[]) => void;
  setFilter: (by: string) => void;
  setVersion: (by: string) => void;
}

export const usePokemonListItemStore = create<PokemonListItemState>()(
  (set) => ({
    pokemons: [],
    filter: "",
    version: "0",
    setList: (by: PokemonListItemData[]) =>
      set((_prevState) => ({ pokemons: by })),
    setFilter: (by: string) => set((_prevState) => ({ filter: by })),
    setVersion: (by: string) => set((_prevState) => ({ version: by })),
  }),
);
