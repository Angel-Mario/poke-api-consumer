import React from "react";
import { PokemonV2Pokemon, PokemonV2PokemonspecyElement } from "./types";
import { getRoute } from "../../utils/utils.functions";
import { PokemonTag } from "./PokemonTag";
import BackIcon from "../../assets/BackIcon";
import { Ripple } from "primereact/ripple";

interface Props {
  pokemon: PokemonV2Pokemon;
}

export const PokemonEvol: React.FC<Props> = ({ pokemon }) => {
  return <div className="flex flex-col gap-y-4">{getPokemonLine(pokemon)}</div>;
};

function getPokemonLine(pokemon: PokemonV2Pokemon): JSX.Element {
  const base = getBasePokemon(pokemon);
  const firstEvol =
    base != undefined ? getEvolsPokemonFromId(pokemon, base.id) : undefined;
  const secondEvol =
    firstEvol != undefined
      ? getEvolsPokemonFromId(pokemon, firstEvol[0].id)
      : undefined;

  return (
    <>
      <section className="flex flex-row flex-wrap content-between items-center justify-between">
        {base && <PokemonEvolItem pokemon={base}></PokemonEvolItem>}
        {firstEvol && (
          <div className="flex w-10 flex-col items-center">
            <BackIcon className="w-10 rotate-180"></BackIcon>
            <h2 className="font-semibold">
              Lv.{firstEvol[0].pokemon_v2_pokemonevolutions[0].min_level}
            </h2>
          </div>
        )}
        {firstEvol && (
          <PokemonEvolItem pokemon={firstEvol[0]}></PokemonEvolItem>
        )}
      </section>
      <section className="flex flex-row flex-wrap content-between items-center justify-between">
        {firstEvol && secondEvol && (
          <PokemonEvolItem
            pokemon={firstEvol[0]}
            key={`evol-${pokemon}$repeated`}
          ></PokemonEvolItem>
        )}
        {secondEvol && (
          <div className="flex w-10 flex-col items-center">
            <BackIcon className="w-10 rotate-180"></BackIcon>
            <h2 className="font-semibold">
              Lv.{secondEvol[0].pokemon_v2_pokemonevolutions[0].min_level}
            </h2>
          </div>
        )}
        {firstEvol && secondEvol && (
          <PokemonEvolItem pokemon={secondEvol[0]}></PokemonEvolItem>
        )}
      </section>
    </>
  );
}

function getBasePokemon(
  pokemon: PokemonV2Pokemon,
): PokemonV2PokemonspecyElement | undefined {
  return pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.find(
    (value) => value.evolves_from_species_id == null,
  );
}
function getEvolsPokemonFromId(
  pokemon: PokemonV2Pokemon,
  id: number,
): PokemonV2PokemonspecyElement[] | undefined {
  return pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.filter(
    (value) => value.evolves_from_species_id == id,
  );
}

const PokemonEvolItem: React.FC<{
  pokemon: PokemonV2PokemonspecyElement;
}> = ({ pokemon }) => {
  return (
    <>
      <article className="p-ripple border-round flex flex-col items-center rounded-xl">
        <Ripple
          pt={{
            root: {
              style: {
                backgroundColor: "#245",
              },
            },
          }}
        />
        <img
          className="pointer-events-none h-28 w-28 select-none overflow-visible"
          src={getRoute(pokemon.id)}
          alt={pokemon.name}
        />
        {/* {pokemon.pokemon_v2_pokemonevolutions.length > 0 && (
          <h2 className="font-semibold">
            Lv.{pokemon.pokemon_v2_pokemonevolutions[0].min_level}
            {pokemon.pokemon_v2_pokemonevolutions[0].time_of_day}
            {pokemon.pokemon_v2_pokemonevolutions[0].pokemon_v2_item}
          </h2>
        )} */}
        {<h2 className="font-semibold capitalize">{pokemon.name}</h2>}
        <div className="flex w-36 flex-row flex-wrap justify-center gap-2 px-2">
          <PokemonTag
            padding="px-1 min-w-12"
            id={
              pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0]
                .pokemon_v2_type.id
            }
            id2={
              pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0]
                .pokemon_v2_type.id
            }
          ></PokemonTag>
          {pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.length >
            1 && (
            <PokemonTag
              padding="px-1 min-w-12"
              id={
                pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[1]
                  .pokemon_v2_type.id
              }
              id2={
                pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[1]
                  .pokemon_v2_type.id
              }
            ></PokemonTag>
          )}
        </div>
      </article>
    </>
  );
};
