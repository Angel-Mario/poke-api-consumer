import { PokemonListItemData } from "../components/pokedex/types";
import { mockPoke } from "../utils/mocks";

export function usePokemonListItemData() {
  const pokemonListItem: PokemonListItemData[] = [];

  mockPoke.data.pokemon_v2_pokemon.map((pokemon) => {
    pokemonListItem.push({
      id: pokemon.id,
      name: pokemon.name,
      pokemon_v2_pokemontypes: [
        {
          pokemon_v2_type: {
            id: pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.id,
          },
        },
        {
          pokemon_v2_type: {
            id:
              pokemon.pokemon_v2_pokemontypes.length > 1
                ? pokemon.pokemon_v2_pokemontypes[1].pokemon_v2_type.id
                : 0,
          },
        },
      ],
    });
  });
  return { pokemonListItem };
}
