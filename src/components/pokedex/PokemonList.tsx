import { PokemonListItem } from "./PokemonListItem";
import { usePokemonListItemStore } from "../../utils/store.ts";

interface Props {
  dialog: () => void;
}

export const PokemonList: React.FC<Props> = ({ dialog }) => {
  const { pokemons, filter } = usePokemonListItemStore();

  return (
    <>
      <ul className="mt-1 inline-grid grid-cols-2 gap-4 smaller:grid-cols-2 small:grid-cols-3 small:gap-4 medium:grid-cols-4 large:grid-cols-5 extraLarge:grid-cols-6">
        {pokemons?.map((pokemon) => {
          if (
            filter.length == 0 ||
            pokemon.id.toString().includes(filter) ||
            pokemon.name.includes(filter)
          ) {
          }
          return (
            <PokemonListItem
              pokemonListItemData={pokemon}
              key={pokemon.id}
              dialogManager={dialog}
            ></PokemonListItem>
          );
        })}
      </ul>
    </>
  );
};
