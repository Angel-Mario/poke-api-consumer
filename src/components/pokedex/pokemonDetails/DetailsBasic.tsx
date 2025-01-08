import { Ripple } from "primereact/ripple";
import { Link } from "react-router-dom";
import BackIcon from "../../../assets/BackIcon";
import { HeartIcon } from "../../../assets/HeartIcon";
import PokeIcon from "../../../assets/PokeIcon";
import { cardButton, cardDetails } from "../../../utils/card-aspects";
import { POKETYPES } from "../../../utils/consts";
import {
  getId,
  getIfPokemonFavorite,
  getRoute,
  manageHeartClick,
} from "../../../utils/utils.functions";
import { PokemonTag } from "../PokemonTag";
import { PokemonListItemData } from "../types";
import React, { useEffect, useState } from "react";
import { MultiDots } from "../../../assets/MultiDots";

interface Props {
  pokemon: PokemonListItemData;
}

export const DetailsBasic: React.FC<Props> = ({ pokemon }) => {
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    if (pokemon) setFavorite(getIfPokemonFavorite(pokemon.id));
  }, [pokemon]);

  return (
    <>
      {/* Square Top Left Corner */}
      <div className="absolute z-0 flex h-52 w-fillAvailable flex-row sm:rounded-t-xl">
        <div
          className="h-24 w-28 -translate-x-9 -translate-y-5 -rotate-[20deg] rounded-b-2xl sm:rounded-2xl"
          style={{
            backgroundColor:
              cardButton[
                POKETYPES[pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.id]
              ],
          }}
        ></div>
      </div>

      <nav
        className="sm:rounded-t-xl"
        style={{
          backgroundColor:
            cardDetails[
              POKETYPES[pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.id]
            ],
        }}
      >
        <section className="relative z-10 mx-3 flex h-1/6 flex-row pt-5">
          <div className="p-ripple ms-1 w-11 rounded-2xl">
            <Link relative={"path"} to={"."}>
              <Ripple
                pt={{
                  root: {
                    style: {
                      backgroundColor:
                        cardButton[
                          POKETYPES[
                            pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type
                              .id
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
              manageClick={() =>
                manageHeartClick(isFavorite, pokemon.id, setFavorite)
              }
            ></HeartIcon>
          </div>
        </section>
        <section className="z-10 ms-3 mt-5 flex flex-col">
          <h1 className="relative ms-4 w-8/12 scale-x-110 select-none text-5xl font-bold capitalize text-white">
            {pokemon.name}
          </h1>
          <h1 className="justify-centertext-base -mt-4 w-full scale-y-90 select-none pr-8 text-end font-bold text-white opacity-90">
            #{getId(pokemon.id)}
          </h1>
          <div className="inline-grid w-48 grid-cols-2 flex-row gap-2 px-2">
            <PokemonTag
              id={pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.id}
              id2={pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.id}
            ></PokemonTag>
            {pokemon.pokemon_v2_pokemontypes.length > 1 &&
              pokemon.pokemon_v2_pokemontypes[1].pokemon_v2_type.id != -1 && (
                <PokemonTag
                  id={pokemon.pokemon_v2_pokemontypes[1].pokemon_v2_type.id}
                  id2={pokemon.pokemon_v2_pokemontypes[1].pokemon_v2_type.id}
                ></PokemonTag>
              )}
          </div>
          <section className="relative -mt-12 flex justify-center overflow-hidden">
            <img
              className="pointer-events-none z-50 col-span-8 h-52 w-52 translate-y-5 select-none overflow-visible"
              src={getRoute(pokemon.id)}
              alt={pokemon.name}
            />
            <div className="absolute z-20 flex h-52 w-fillAvailable translate-x-7 translate-y-5 flex-row justify-end overflow-hidden">
              <PokeIcon
                fill={
                  cardButton[
                    POKETYPES[
                      pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.id
                    ]
                  ]
                }
              ></PokeIcon>
            </div>
            <div className="absolute z-20 flex w-fillAvailable -translate-x-20 translate-y-16 flex-row justify-center overflow-hidden">
              <MultiDots
                fill={
                  cardButton[
                    POKETYPES[
                      pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.id
                    ]
                  ]
                }
              ></MultiDots>
            </div>
          </section>
        </section>

        <div
          style={{
            backgroundColor:
              cardButton[
                POKETYPES[pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.id]
              ],
          }}
        ></div>
      </nav>
    </>
  );
};
