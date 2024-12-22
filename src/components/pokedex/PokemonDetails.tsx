import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
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
            </div>
            <div className="" style={{ width: "-webkit-fill-available" }}></div>
            <div
              className="me-3 mt-1 w-8 scale-y-95"
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
            <h1 className="justify-centertext-base -mt-4 w-full scale-y-90 select-none pr-3 text-end font-bold text-white opacity-90">
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
        <section className="absolute z-30 -mt-9 h-full w-full rounded-[2.5rem] bg-white shadow-2xl shadow-black">
          <div className="mx-4 mt-9 flex">
            {/* <div className="flex flex-row gap-3">
              <h1>About</h1>
              <h1>Base Stats</h1>
              <h1>Evolution</h1>
              <h1>Moves</h1>
            </div> */}
            <TabView>
              <TabPanel header="Header I">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </TabPanel>
              <TabPanel header="Header II">
                <p className="m-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Consectetur, adipisci velit, sed quia non numquam
                  eius modi.
                </p>
              </TabPanel>
              <TabPanel header="Header III">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus.
                </p>
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
