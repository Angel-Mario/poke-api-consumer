import { create } from "zustand";
import { PokemonListItemData } from "../components/pokemons/types";
import { PokemonV2Move } from "../components/moves/types";

interface FilterState {
  filter: string;
  version: string;
  setFilter: (by: string) => void;
  setVersion: (by: string) => void;
}

export const useFilterStore = create<FilterState>()((set) => ({
  filter: "",
  version: "0",
  setFilter: (by: string) => set((_prevState) => ({ filter: by })),
  setVersion: (by: string) => set((_prevState) => ({ version: by })),
}));

interface PokemonListItemState {
  pokemons: PokemonListItemData[];
  setList: (by: PokemonListItemData[]) => void;
}

export const usePokemonListItemStore = create<PokemonListItemState>()(
  (set) => ({
    pokemons: [],
    setList: (by: PokemonListItemData[]) =>
      set((_prevState) => ({ pokemons: by })),
  }),
);

interface MovesListState {
  moves: PokemonV2Move[];
  setList: (by: PokemonV2Move[]) => void;
}

export const useMovesListStore = create<MovesListState>()((set) => ({
  moves: [],
  setList: (by: PokemonV2Move[]) => set((_prevState) => ({ moves: by })),
}));
