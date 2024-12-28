import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PokemonListItemDetails } from "./types";
import { getEffectivenessAgainstType, POKETYPES } from "../../utils/consts";
import { mockePokeDetails } from "../../utils/mocks";
import {
  getHeightInFeets,
  getId,
  getRoute,
  getWeightInHectograms,
  setPokemonFavorite,
  getIfPokemonFavorite,
  unsetPokemonFavorite,
} from "../../utils/utils.functions";

import { ScrollPanel } from "primereact/scrollpanel";

import { cardButton, cardTheme } from "../../utils/card-aspects";
import { PokemonTag } from "./PokemonTag";
import PokeIcon from "../../assets/PokeIcon";
import { TabView, TabPanel } from "primereact/tabview";

import BackIcon from "../../assets/BackIcon";
import { HeartIcon } from "../../assets/HeartIcon";
import { Ripple } from "primereact/ripple";
import { PokemonStatBar } from "./PokemonStatBar";
import { PokemonEvol } from "./PokemonEvol";

export const PokemonDetails: React.FC = () => {
  const selectedPokemonAll = useLoaderData() as PokemonListItemDetails;

  const selectedPokemon = selectedPokemonAll.data.pokemon_v2_pokemon[0];

  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(getIfPokemonFavorite(selectedPokemon.id));
  }, []);

  function manageHeartClick() {
    if (isFavorite) {
      unsetPokemonFavorite(selectedPokemon.id);
    } else {
      setPokemonFavorite(selectedPokemon.id);
    }
    setFavorite(!isFavorite);
    console.log("encorazonado");
  }

  return (
    <>
      <article className="relative h-screen overflow-hidden sm:rounded-tl-xl">
        {/* Square Top Left Corner */}
        <div className="w-fillAvailable absolute z-0 flex h-52 flex-row sm:rounded-t-xl">
          <div
            className="h-24 w-28 -translate-x-9 -translate-y-5 -rotate-[20deg] rounded-b-2xl opacity-50 sm:rounded-2xl"
            style={{
              backgroundColor:
                cardButton[
                  POKETYPES[selectedPokemon.pokemon_v2_pokemontypes[0].type_id]
                ],
            }}
          ></div>
        </div>

        <nav
          className="sm:rounded-t-xl"
          style={{
            backgroundColor:
              cardTheme[
                POKETYPES[selectedPokemon.pokemon_v2_pokemontypes[0].type_id]
              ],
          }}
        >
          <section className="relative z-10 mx-3 flex h-1/6 flex-row pt-5">
            <div className="p-ripple ms-1 w-11 rounded-2xl">
              <Link relative={"path"} to={".."}>
                <Ripple
                  pt={{
                    root: {
                      style: {
                        backgroundColor:
                          cardButton[
                            POKETYPES[
                              selectedPokemon.pokemon_v2_pokemontypes[0].type_id
                            ]
                          ],
                      },
                    },
                  }}
                />
                <BackIcon stroke="#FFFFFF"></BackIcon>
              </Link>
            </div>
            <div className="w-fillAvailable"></div>
            <div
              className="me-3 mt-1 w-8 scale-y-95 cursor-pointer"
              onClick={() => setFavorite(!isFavorite)}
            >
              <HeartIcon
                props={{ stroke: "#FFFFFF" }}
                favorite={isFavorite}
                manageClick={manageHeartClick}
              ></HeartIcon>
            </div>
          </section>
          <section className="z-10 ms-3 mt-5 flex flex-col">
            <h1 className="relative ms-4 w-8/12 scale-x-110 select-none text-5xl font-bold capitalize text-white">
              {selectedPokemon.name}
            </h1>
            <h1 className="justify-centertext-base -mt-4 w-full scale-y-90 select-none pr-8 text-end font-bold text-white opacity-90">
              #{getId(selectedPokemon.id)}
            </h1>
            <div className="inline-grid w-48 grid-cols-2 flex-row gap-2 px-2">
              <PokemonTag
                id={selectedPokemon.pokemon_v2_pokemontypes[0].type_id}
                id2={selectedPokemon.pokemon_v2_pokemontypes[0].type_id}
              ></PokemonTag>
              {selectedPokemon.pokemon_v2_pokemontypes[1].type_id != 0 && (
                <PokemonTag
                  id={selectedPokemon.pokemon_v2_pokemontypes[0].type_id}
                  id2={selectedPokemon.pokemon_v2_pokemontypes[1].type_id}
                ></PokemonTag>
              )}
            </div>
            <section className="relative -mt-12 flex justify-center overflow-hidden">
              <img
                className="pointer-events-none z-50 col-span-8 h-52 w-52 translate-y-5 select-none overflow-visible"
                src={getRoute(selectedPokemon.id)}
                alt={selectedPokemon.name}
              />
              <div className="w-fillAvailable absolute z-20 flex h-52 translate-x-7 translate-y-5 flex-row justify-end overflow-hidden">
                <PokeIcon
                  fill={
                    cardButton[
                      POKETYPES[
                        selectedPokemon.pokemon_v2_pokemontypes[0].type_id
                      ]
                    ]
                  }
                ></PokeIcon>
              </div>
            </section>
          </section>

          <div
            style={{
              backgroundColor:
                cardButton[
                  POKETYPES[selectedPokemon.pokemon_v2_pokemontypes[0].type_id]
                ],
            }}
          ></div>
        </nav>

        <section className="h-fillAvailable absolute z-30 -mt-9 w-full rounded-t-[2.5rem] bg-white shadow-2xl sm:rounded-b-[2.5rem]">
          <div className="h-fillAvailable mx-4 mb-3 mt-8 overflow-hidden">
            <TabView className="h-full">
              {/* TabPanel About */}
              <TabPanel header="About" className="h-fillAvailable pb-16">
                <article className="flex h-full flex-col overflow-x-hidden">
                  <ScrollPanel style={{ width: "100%", height: "100%" }}>
                    <h1 className="mb-2 text-xl font-bold capitalize">
                      About {selectedPokemon.name}
                    </h1>
                    <h2 className="mb-1 text-justify font-semibold">
                      {selectedPokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
                        .replace(`\f`, " ")
                        .replace(`\n`, " ")}
                    </h2>
                    <h1 className="mb-1 text-xl font-bold">Data</h1>
                    <section className="inline-grid w-full grid-cols-12 flex-col gap-y-1 font-semibold">
                      <h2 className="col-span-3 opacity-60">Species</h2>
                      <h2 className="col-span-9">
                        {
                          selectedPokemon.pokemon_v2_pokemonspecy
                            .pokemon_v2_pokemonspeciesnames[0].genus
                        }
                      </h2>

                      <h2 className="col-span-3 opacity-60">Height</h2>
                      <h2 className="col-span-9">{`${getHeightInFeets(selectedPokemon.height * 0.328084)} (${selectedPokemon.height * 10}cm)`}</h2>

                      <h2 className="col-span-3 opacity-60">Weigth</h2>
                      <h2 className="col-span-9">{`${getWeightInHectograms(selectedPokemon.weight)} (${selectedPokemon.height / 10}kg)`}</h2>

                      <h2 className="col-span-3 opacity-60">Abilities</h2>
                      <div className="col-span-9 flex flex-row">
                        {selectedPokemon.pokemon_v2_pokemonabilities.map(
                          (abilities, index) => (
                            <h2
                              className="capitalize"
                              key={abilities.pokemon_v2_ability.name}
                            >
                              {`${index != 0 ? ", " : ""}${abilities.pokemon_v2_ability.name}`}
                            </h2>
                          ),
                        )}
                      </div>
                    </section>
                    <h1 className="mb-2 mt-3 text-xl font-bold">Breeding</h1>
                    <section className="inline-grid w-full grid-cols-12 flex-col gap-x-1 gap-y-1 font-semibold">
                      <h2 className="col-span-3 opacity-60">
                        Egg Group
                        {`${selectedPokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonegggroups.length > 1 ? "s" : ""} `}
                      </h2>
                      <div className="col-span-9 flex flex-row">
                        {selectedPokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonegggroups.map(
                          (eggGroup, index) => (
                            <h2
                              className="capitalize"
                              key={eggGroup.pokemon_v2_egggroup.name}
                            >
                              {`${index != 0 ? ", " : ""}${eggGroup.pokemon_v2_egggroup.name}`}
                            </h2>
                          ),
                        )}
                      </div>
                    </section>
                  </ScrollPanel>
                </article>
              </TabPanel>
              {/* TabPanel Stats */}
              <TabPanel header="Base Stats" className="h-fillAvailable pb-16">
                <article className="flex h-full flex-col overflow-x-hidden">
                  <ScrollPanel style={{ width: "100%", height: "100%" }}>
                    <section className="inline-grid w-full grid-cols-12 flex-col gap-y-1 font-semibold">
                      <PokemonStatBar
                        base_stat={
                          selectedPokemon.pokemon_v2_pokemonstats[0].base_stat
                        }
                        text="HP"
                        total_stats={false}
                      ></PokemonStatBar>
                      <PokemonStatBar
                        base_stat={
                          selectedPokemon.pokemon_v2_pokemonstats[1].base_stat
                        }
                        text="Attack"
                        total_stats={false}
                      ></PokemonStatBar>
                      <PokemonStatBar
                        base_stat={
                          selectedPokemon.pokemon_v2_pokemonstats[2].base_stat
                        }
                        text="Defense"
                        total_stats={false}
                      ></PokemonStatBar>
                      <PokemonStatBar
                        base_stat={
                          selectedPokemon.pokemon_v2_pokemonstats[3].base_stat
                        }
                        text="Sp. Attack"
                        total_stats={false}
                      ></PokemonStatBar>
                      <PokemonStatBar
                        base_stat={
                          selectedPokemon.pokemon_v2_pokemonstats[4].base_stat
                        }
                        text="Sp. Defense"
                        total_stats={false}
                      ></PokemonStatBar>
                      <PokemonStatBar
                        base_stat={
                          selectedPokemon.pokemon_v2_pokemonstats[5].base_stat
                        }
                        text="Speed"
                        total_stats={false}
                      ></PokemonStatBar>
                      <PokemonStatBar
                        base_stat={((): number => {
                          let value = 0;
                          selectedPokemon.pokemon_v2_pokemonstats.forEach(
                            (valueTemp) => (value += valueTemp.base_stat),
                          );
                          return value;
                        })()}
                        text="Total"
                        total_stats={true}
                      ></PokemonStatBar>
                    </section>
                    <h1 className="mb-1 mt-3 text-xl font-bold">
                      Type defenses
                    </h1>
                    <div className="mb-1 flex flex-row text-justify font-semibold">
                      <h2>The effectiveness of each type on </h2>
                      <h2 className="ms-1 capitalize">
                        {selectedPokemon.name}.
                      </h2>
                    </div>
                    <section className="mb-2 mt-1 inline-grid w-full grid-cols-3 flex-col gap-y-2 font-semibold">
                      {Object.values(cardTheme)
                        .slice(0, 18)
                        .map((_theme, index) => (
                          <div
                            className="inline-grid select-none grid-cols-3 flex-row gap-x-1"
                            key={index}
                          >
                            <div className="col-span-2">
                              <PokemonTag
                                rounded="rounded-md"
                                id={index + 1}
                                id2={index + 1}
                              ></PokemonTag>
                            </div>
                            x
                            {getEffectivenessAgainstType(
                              index,
                              selectedPokemon.pokemon_v2_pokemontypes[0]
                                .type_id - 1,
                              selectedPokemon.pokemon_v2_pokemontypes.length ==
                                1
                                ? -1
                                : selectedPokemon.pokemon_v2_pokemontypes[1]
                                    .type_id - 1,
                            )}
                            {/* {getEffectivenessAgainstType(index, 0, 1)} */}
                          </div>
                        ))}
                    </section>
                  </ScrollPanel>
                </article>
              </TabPanel>
              {/* TabPanel Evolution */}
              <TabPanel header="Evolution" className="h-fillAvailable pb-16">
                <article className="flex h-full flex-col overflow-x-hidden">
                  <PokemonEvol pokemon={selectedPokemon}></PokemonEvol>
                </article>
              </TabPanel>
              {/* TabPanel Moves */}
              <TabPanel header="Moves">
                <h2>I like to move move i like to move move</h2>
              </TabPanel>
            </TabView>
          </div>
        </section>
      </article>
    </>
  );
};
export default PokemonDetails;

export const getPokemonDetails = (id: string) => {
  return requestPokemonDetails(id);
};

async function requestPokemonDetails(
  id: string,
): Promise<PokemonListItemDetails> {
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(QUERY_POKEMON_DETAILS(id)),
  // };

  // const response = await fetch(
  //     "https://beta.pokeapi.co/graphql/v1beta",
  //     requestOptions,
  // );
  console.log(id);
  const data = mockePokeDetails;
  // const data = await response.json();
  return data;
}
