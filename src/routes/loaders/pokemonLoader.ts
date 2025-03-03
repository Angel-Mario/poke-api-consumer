import { QUERY_POKEMON_LIST } from "./queries";
import { PokemonListItemDataList } from "../../components/pokemons/types";
import { getPokemonList, setPokemonList } from "../../utils/utils.functions";

export async function loader() {
  const pokemonListLocalStorage = getPokemonList();
  if (
    pokemonListLocalStorage != undefined &&
    pokemonListLocalStorage.length > 0
  ) {
    return pokemonListLocalStorage;
  }
  const pokemonList = await getPokemonListExt().catch((_error) => {
    return undefined;
  });

  if (pokemonList) {
    setPokemonList(pokemonList.data.pokemon_v2_pokemon);
  }
  return pokemonList?.data.pokemon_v2_pokemon;
}

const getPokemonListExt = () => {
  return requestPokemonList();
};

async function requestPokemonList(): Promise<
  PokemonListItemDataList | undefined
> {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(QUERY_POKEMON_LIST),
  };

  const response = await fetch(
    "https://beta.pokeapi.co/graphql/v1beta",
    requestOptions,
  );
  console.log(response);

  const data = await response.json();
  console.log(data);
  return data;
}
