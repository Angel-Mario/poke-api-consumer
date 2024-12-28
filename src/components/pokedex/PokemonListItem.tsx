import { Ripple } from "primereact/ripple";
import { cardTheme, cardButton } from "../../utils/card-aspects";
import { POKETYPES } from "../../utils/consts";
import { PokemonListItemData } from "./types";
import { getId, getRoute } from "../../utils/utils.functions";
import PokeIcon from "../../assets/PokeIcon";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { PokemonTag } from "./PokemonTag";
import classNames from "classnames";
// import { Skeleton } from "primereact/skeleton";

interface PokemonListItemFunc {
  pokemonListItemData: PokemonListItemData;
  dialogManager: () => void;
}

export const PokemonListItem: React.FC<PokemonListItemFunc> = ({
  pokemonListItemData,
  dialogManager,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <article
      className="p-ripple z-30 h-auto w-40 cursor-pointer rounded-2xl shadow-sm shadow-gray-600 hover:-translate-y-1 mlarge:w-48 2xl:w-56"
      key={pokemonListItemData.id}
      onClick={() => dialogManager()}
      style={{
        backgroundColor:
          cardTheme[
            POKETYPES[
              pokemonListItemData.pokemon_v2_pokemontypes[0].pokemon_v2_type.id
            ]
          ],
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
        <div className="flex flex-row justify-items-center">
          <h1 className="ms-2 w-8/12 select-none py-1 text-lg font-bold capitalize text-white sm:text-xl 2xl:text-2xl">
            {pokemonListItemData.name}
          </h1>
          <h1 className="w-4/12 select-none justify-center text-center text-base font-bold text-gray-500 opacity-40 medium:text-lg 2xl:text-xl">
            #{getId(pokemonListItemData.id)}
          </h1>
        </div>

        {/* types and image */}
        <div className="relative flex flex-row overflow-hidden">
          <div className="flex w-4/6 flex-col-reverse justify-start gap-2 px-2 py-3">
            {pokemonListItemData.pokemon_v2_pokemontypes[1].pokemon_v2_type
              .id != 0 && (
              <PokemonTag
                id={
                  pokemonListItemData.pokemon_v2_pokemontypes[0].pokemon_v2_type
                    .id
                }
                id2={
                  pokemonListItemData.pokemon_v2_pokemontypes[1].pokemon_v2_type
                    .id
                }
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
            ></PokemonTag>
          </div>
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
          {/* {!loaded && <Skeleton height="28px" borderRadius="16px"></Skeleton>} */}
          <img
            onLoad={() => setLoaded(true)}
            className={classNames(
              "pointer-events-none z-0 col-span-8 h-20 w-20 select-none mlarge:h-28 mlarge:w-28 2xl:h-36 2xl:w-36",
              loaded ? `` : "hidden w-0",
            )}
            src={getRoute(pokemonListItemData.id)}
            alt={pokemonListItemData.name}
          />
        </div>
      </Link>
    </article>
  );
};
