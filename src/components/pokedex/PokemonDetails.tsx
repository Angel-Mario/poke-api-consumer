import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PokemonListItemDetails } from "./types";
import { POKETYPES } from "../../utils/consts";
import { mockePokeDetails } from "../../utils/mocks";
import { getId, getRoute } from "../../utils/utils.functions";
import { cardButton, cardTheme } from "../../utils/card-aspects";
import { PokemonTag } from "./PokemonTag";
import PokeIcon from "../../assets/PokeIcon";
import { TabView, TabPanel } from "primereact/tabview";
import BackIcon from "../../assets/BackIcon";
import { HeartIcon } from "../../assets/HeartIcon";
import { Ripple } from "primereact/ripple";

export const PokemonDetails: React.FC = () => {
  const selectedPokemonAll = useLoaderData() as PokemonListItemDetails;

  const selectedPokemon = selectedPokemonAll.data.pokemon_v2_pokemon[0];

  const [isFavorite, setFavorite] = useState(false);

  console.log(selectedPokemon);
  window.matchMedia("(prefers-color-scheme: light)");

  return (
    <>
      <article className="relative h-screen overflow-hidden sm:rounded-tl-xl">
        {/* Square Top Left Corner */}
        <div
          className="absolute z-0 flex h-52 flex-row sm:rounded-t-xl"
          style={{ width: "-webkit-fill-available" }}
        >
          <div
            className="h-24 w-28 -translate-x-9 -translate-y-5 -rotate-[20deg] opacity-50 sm:rounded-2xl"
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
            <div className="" style={{ width: "-webkit-fill-available" }}></div>
            <div
              className="me-3 mt-1 w-8 scale-y-95 cursor-pointer"
              onClick={() => setFavorite(!isFavorite)}
            >
              <HeartIcon
                props={{ stroke: "#FFFFFF" }}
                favorite={isFavorite}
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
              <div
                style={{ width: "-webkit-fill-available" }}
                className="absolute z-20 flex h-52 translate-x-7 translate-y-5 flex-row justify-end overflow-hidden"
              >
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

        {/* TabView Info */}
        <section className="absolute z-30 -mt-9 h-full w-full rounded-[2.5rem] bg-white shadow-2xl">
          <div className="mx-4 mt-9">
            <TabView>
              <TabPanel header="About">
                <section className="inline-grid w-full grid-cols-12 flex-col gap-y-1 font-semibold">
                  <h1 className="col-span-3 opacity-60">Species</h1>
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

                  <h1 className="col-span-3 opacity-60">Height</h1>
                  <h1 className="col-span-9">{`${getHeightInFeets(selectedPokemon.height * 0.328084)} (${selectedPokemon.height * 10}cm)`}</h1>

                  <h1 className="col-span-3 opacity-60">Weigth</h1>
                  <h1 className="col-span-9">{`${getWeightInHectograms(selectedPokemon.weight)} (${selectedPokemon.height / 10}kg)`}</h1>

                  <h1 className="col-span-3 opacity-60">Abilities</h1>
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
                <h1 className="mt-2 text-xl font-bold">Breeding</h1>
                <section className="inline-grid grid-cols-9 flex-col gap-y-1"></section>
              </TabPanel>
              <TabPanel header="Base Stats">
                <p className="m-0"></p>
              </TabPanel>
              <TabPanel header="Evolution">
                <p className="m-0"></p>
              </TabPanel>
              <TabPanel header="Moves">
                <p className="m-0"></p>
              </TabPanel>
            </TabView>
          </div>
        </section>
        <div>{selectedPokemon.height}</div>
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

function getHeightInFeets(heightDec: number): string {
  const feets = Math.floor(heightDec);
  const inches = ((heightDec - feets) * 12).toFixed(1);
  return feets + "'" + inches + `"`;
}
function getWeightInHectograms(weight: number): string {
  return `${(weight * 0.22).toFixed(1)} lbs"`;
}
