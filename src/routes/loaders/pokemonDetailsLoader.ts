import { LoaderFunctionArgs } from "react-router-dom";
import { PokemonListItemDetails } from "../../components/pokemons/types";
import {
  getGenerationByVersion,
  getPokemonDataDetails,
  setPokemonDataDetails,
} from "../../utils/utils.functions";
import { QUERY_POKEMON_DETAILS } from "./queries";

export async function loader({ params }: LoaderFunctionArgs<{ id: string }>) {
  const pokemonDetailsLocalStorage = getPokemonDataDetails(+params.id!);
  if (pokemonDetailsLocalStorage != undefined) {
    return pokemonDetailsLocalStorage;
  }
  const pokemonDetails = await getPokemonDetails(params.id!).catch((_error) => {
    return undefined;
  });

  if (pokemonDetails) {
    setPokemonDataDetails(pokemonDetails);
  }
  return pokemonDetails;
}

const getPokemonDetails = (id: string) => {
  return requestPokemonDetails(id);
};

async function requestPokemonDetails(
  id: string,
): Promise<PokemonListItemDetails | undefined> {
  let version = localStorage.getItem("gameVer");
  if (version == undefined) {
    version = "0";
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(
      QUERY_POKEMON_DETAILS(
        id,
        +version + 1,
        getGenerationByVersion(+version + 1),
      ),
    ),
  };

  const response = await fetch(
    "https://beta.pokeapi.co/graphql/v1beta",
    requestOptions,
  );
  console.log(response);

  const data = await response.json();
  return data;
}
