import { PokemonListItem } from "./PokemonListItem";
import { PokemonListItemData } from "./types";

interface Props {
  pokemons: PokemonListItemData[];
  dialog: () => void;
}

export const PokemonList: React.FC<Props> = ({ pokemons, dialog }) => {
  return (
    <>
      <ul className="extraLarge:grid-cols-6 mt-1 inline-grid grid-cols-2 gap-4 smaller:grid-cols-2 small:grid-cols-3 small:gap-4 medium:grid-cols-4 large:grid-cols-5">
        {pokemons?.map((pokemon) => (
          <PokemonListItem
            pokemonListItemData={pokemon}
            key={pokemon.id}
            dialogManager={dialog}
          ></PokemonListItem>
        ))}
      </ul>
    </>
  );
};
