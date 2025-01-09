import { Ripple } from "primereact/ripple";
import { cardTheme, cardButton } from "../../utils/card-aspects";
import { POKETYPES } from "../../utils/consts";
import { PokemonListItemData } from "./types";
import { getId, getRoute } from "../../utils/utils.functions";
import PokeIcon from "../../assets/PokeIcon";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { PokemonTag } from "../shared/PokemonTag";
import { Skeleton } from "primereact/skeleton";
import { twJoin, twMerge } from "tailwind-merge";
// import { Skeleton } from "primereact/skeleton";

interface PokemonListItemFunc {
  pokemonListItemData: PokemonListItemData;
}

export const PokemonListItem: React.FC<PokemonListItemFunc> = ({
  pokemonListItemData,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    pokemonListItemData.id && (
      <article
        className="p-ripple z-30 h-auto w-40 cursor-pointer rounded-2xl shadow-sm shadow-gray-600 hover:-translate-y-1 mlarge:w-48 2xl:w-56"
        style={{
          backgroundColor: loaded
            ? cardTheme[
                POKETYPES[
                  pokemonListItemData.pokemon_v2_pokemontypes[0].pokemon_v2_type
                    .id
                ]
              ]
            : "rgb(244, 244, 244)",
        }}
      >
        <Link relative={"path"} to={`${pokemonListItemData.id}`}>
          <Ripple
            pt={{
              root: {
                style: {
                  backgroundColor:
                    cardButton[
                      POKETYPES[
                        pokemonListItemData.pokemon_v2_pokemontypes[0]
                          .pokemon_v2_type.id
                      ]
                    ],
                },
              },
            }}
          />
          {/*Info */}
          <div className="flex flex-col items-end justify-items-center">
            <h1 className="-mb-5 w-4/12 select-none justify-center text-center text-base font-bold text-gray-500 opacity-40 medium:text-lg 2xl:text-xl">
              #{getId(pokemonListItemData.id)}
            </h1>
            <h1
              className={twJoin(
                "ms-2 w-fillAvailable select-none text-clip py-1 text-lg font-bold capitalize sm:text-xl 2xl:text-2xl",
                loaded ? "text-white" : "text-gray-300",
              )}
            >
              {pokemonListItemData.name}
            </h1>
          </div>

          {/* types and image */}
          <div className="relative -mb-1 flex flex-row overflow-hidden">
            <div className="flex w-1/2 flex-col-reverse justify-start gap-2 px-2 py-3">
              {pokemonListItemData.pokemon_v2_pokemontypes.length > 1 &&
                pokemonListItemData.pokemon_v2_pokemontypes[1].pokemon_v2_type
                  .id != -1 && (
                  <PokemonTag
                    id={
                      pokemonListItemData.pokemon_v2_pokemontypes[0]
                        .pokemon_v2_type.id
                    }
                    id2={
                      pokemonListItemData.pokemon_v2_pokemontypes[1]
                        .pokemon_v2_type.id
                    }
                    loaded={loaded}
                  ></PokemonTag>
                )}
              <PokemonTag
                id={
                  pokemonListItemData.pokemon_v2_pokemontypes[0].pokemon_v2_type
                    .id
                }
                id2={
                  pokemonListItemData.pokemon_v2_pokemontypes[0].pokemon_v2_type
                    .id
                }
                loaded={loaded}
              ></PokemonTag>
            </div>
            {loaded && (
              <div className="absolute flex w-[6.5rem] translate-x-20 overflow-hidden mlarge:w-[8.5rem] 2xl:w-[10rem]">
                <PokeIcon
                  stroke="#352c32"
                  strokeOpacity={0.5}
                  fill={
                    cardButton[
                      POKETYPES[
                        pokemonListItemData.pokemon_v2_pokemontypes[0]
                          .pokemon_v2_type.id
                      ]
                    ]
                  }
                ></PokeIcon>
              </div>
            )}
            <img
              onLoad={() => setLoaded(true)}
              className={twMerge(
                "pointer-events-none z-0 col-span-8 h-20 w-20 select-none mlarge:h-28 mlarge:w-28 2xl:h-36 2xl:w-36",
                loaded ? `` : "invisible w-0 mlarge:w-0 2xl:w-0",
              )}
              src={getRoute(pokemonListItemData.id)}
              alt={pokemonListItemData.name}
            />
            {!loaded && (
              <Skeleton
                height="auto"
                width=""
                className="mr-1 h-20 w-20 mlarge:h-28 mlarge:w-28 2xl:h-36 2xl:w-36"
                shape="circle"
              ></Skeleton>
            )}
          </div>
        </Link>
      </article>
    )
  );
};
