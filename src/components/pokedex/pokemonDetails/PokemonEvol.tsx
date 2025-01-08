import React, { useEffect, useRef } from "react";
import { getRoute } from "../../../utils/utils.functions";
import { PokemonTag } from "../PokemonTag";
import BackIcon from "../../../assets/BackIcon";
import { Ripple } from "primereact/ripple";
import { ScrollPanel } from "primereact/scrollpanel";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { PokemonV2Pokemon, PokemonV2PokemonspecyElement } from "../types";

interface Props {
  pokemon: PokemonV2Pokemon;
}

export const PokemonEvol: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="flex h-full flex-col overflow-x-visible" key={"evoList"}>
      <ScrollPanel style={{ width: "100%", height: "100%" }}>
        <div className="px-0">{getPokemonLine(pokemon)}</div>
      </ScrollPanel>
    </div>
  );
};

function getPokemonLine(pokemon: PokemonV2Pokemon): JSX.Element {
  const base = getBasePokemon(pokemon);
  const firstScrollBar = useRef<ScrollPanel>(null);

  const firstEvol =
    base != undefined ? getEvolsPokemonFromId(pokemon, base.id) : undefined;
  const secondEvol: (PokemonV2PokemonspecyElement[] | undefined)[] | undefined =
    getSecondsForms(firstEvol, pokemon);

  useEffect(() => {
    firstScrollBar.current?.getXBar().classList.remove("invisible");
  }, [firstScrollBar]);

  return (
    <>
      {/* First or Base */}
      <section className="flex w-fillAvailable flex-row items-center justify-center">
        <ScrollPanel
          ref={firstScrollBar}
          style={{ width: "100%", height: "100%" }}
        >
          <section className="mx-auto mt-2 flex w-fit flex-row gap-3">
            {base && <PokemonEvolItem pokemon={base}></PokemonEvolItem>}
            {firstEvol && (
              <>
                <BackIcon className="w-10 rotate-180"></BackIcon>
                {firstEvol.map((poke, i) => {
                  if (i > 3) {
                    firstScrollBar.current
                      ?.getXBar()
                      .classList.remove("invisible");
                  }
                  return (
                    <div className="grid" key={`firstEvol${poke.id}`}>
                      <PokemonEvolItem
                        margin={
                          i == firstEvol.length - 1
                            ? "me-0"
                            : i > 0
                              ? "-mx-3"
                              : ""
                        }
                        pokemon={poke}
                      />
                      <PokemonEvolRequirements
                        pokemon={poke}
                      ></PokemonEvolRequirements>
                    </div>
                  );
                })}
              </>
            )}
          </section>
        </ScrollPanel>
      </section>

      {secondEvol &&
        secondEvol.map((pokeList, i) => (
          <div key={"previus" + i}>
            {pokeList &&
              pokeList.map((poke, j) => (
                <div
                  className="flex w-fillAvailable flex-row items-center justify-center"
                  key={`EvolChain${poke.id}${i}-${j}`}
                >
                  <section className="mx-auto mt-2 flex w-fit flex-row gap-3">
                    {poke && (
                      <PokemonEvolItem
                        pokemon={getEvolPrev(pokemon, poke.id)![0]}
                      ></PokemonEvolItem>
                    )}
                    {poke && (
                      <>
                        <BackIcon className="w-10 rotate-180"></BackIcon>

                        <div className="grid" key={`Evol${poke.id}${i}-${j}`}>
                          <PokemonEvolItem pokemon={poke} />
                          <PokemonEvolRequirements
                            pokemon={poke}
                          ></PokemonEvolRequirements>
                        </div>
                      </>
                    )}
                  </section>
                </div>
              ))}
          </div>
        ))}
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
  const temp =
    pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.filter(
      (value) => value.evolves_from_species_id == id,
    );
  return temp.length > 0 ? temp : undefined;
}

function getEvolPrev(
  pokemon: PokemonV2Pokemon,
  id: number,
): PokemonV2PokemonspecyElement[] | undefined {
  const temp =
    pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.filter(
      (value) =>
        value.id ==
        pokemon.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.filter(
          (value) => value.id == id,
        )[0].evolves_from_species_id,
    );
  return temp.length > 0 ? temp : undefined;
}

function getSecondsForms(
  firstEvol: PokemonV2PokemonspecyElement[] | undefined,
  pokemon: PokemonV2Pokemon,
): (PokemonV2PokemonspecyElement[] | undefined)[] | undefined {
  let secondEvol: (PokemonV2PokemonspecyElement[] | undefined)[] | undefined =
    undefined;
  if (firstEvol != undefined) {
    firstEvol.forEach((evol, i) => {
      if (i == 0) {
        secondEvol = Array.of(getEvolsPokemonFromId(pokemon, evol.id));
      } else {
        secondEvol?.push(getEvolsPokemonFromId(pokemon, evol.id));
      }
    });
  }
  return secondEvol;
}

const PokemonEvolItem: React.FC<{
  pokemon: PokemonV2PokemonspecyElement;
  margin?: string;
}> = ({ pokemon, margin }) => {
  return (
    <>
      <article
        className={twMerge(
          "p-ripple border-round flex w-28 flex-col items-center rounded-xl",
          margin,
        )}
      >
        <Link
          relative={"path"}
          to={`../${pokemon.id}`}
          className="flex flex-col items-center justify-center"
        >
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
            className="pointer-events-none -mb-3 h-28 w-28 scale-110 select-none overflow-visible"
            src={getRoute(pokemon.id)}
            alt={pokemon.name}
          />
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
              responsive={false}
            ></PokemonTag>
            {pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.length >
              1 && (
              <PokemonTag
                responsive={false}
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
        </Link>
      </article>
    </>
  );
};

const PokemonEvolRequirements: React.FC<{
  pokemon: PokemonV2PokemonspecyElement;
  id?: number;
}> = ({ pokemon }) => {
  let itemName: string | undefined = undefined;
  let minLevel: number | undefined = undefined;
  let time_of_day: string | undefined = undefined;

  pokemon.pokemon_v2_pokemonevolutions.forEach((pokemon_v2_pokemon) => {
    if (!itemName && pokemon_v2_pokemon.pokemon_v2_item) {
      itemName = pokemon_v2_pokemon.pokemon_v2_item.name;
    }
    if (!minLevel && pokemon_v2_pokemon.min_level) {
      minLevel = pokemon_v2_pokemon.min_level;
    }
    if (
      !time_of_day &&
      pokemon_v2_pokemon.time_of_day &&
      pokemon_v2_pokemon.time_of_day.length > 0
    ) {
      time_of_day = pokemon_v2_pokemon.time_of_day;
    }
  });

  return (
    <div className="h-fillAvailable text-center font-semibold capitalize">
      {itemName && <h2 className="">{itemName}</h2>}
      {minLevel && <h2 className="">Lv.{minLevel}</h2>}
      {time_of_day && <h2 className="">At {time_of_day}</h2>}
    </div>
  );
};
