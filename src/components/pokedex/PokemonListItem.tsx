import { Ripple } from "primereact/ripple";
import { cardTheme, cardButton } from "../../utils/card-aspects";
import { POKETYPES } from "../../utils/consts";
import { PokemonListItemData } from "./types";
import { getId, getRoute } from "../../utils/utils.functions";
import PokeIcon from "../../assets/PokeIcon";
import { Link } from "react-router-dom";
import React from "react";
import { PokemonTag } from "./PokemonTag";

interface PokemonListItemFunc {
  pokemonListItemData: PokemonListItemData;
  dialogManager: () => void;
}

export const PokemonListItem: React.FC<PokemonListItemFunc> = ({
  pokemonListItemData,
  dialogManager,
}) => {
  return (
    <li
      className="p-ripple mlarge:w-48 z-30 h-auto w-40 cursor-pointer rounded-2xl shadow-sm shadow-black hover:-translate-y-1 2xl:w-56"
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
      <Link to={`${pokemonListItemData.id}`}>
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
          <div className="mlarge:w-[8.5rem] absolute flex w-[6.5rem] translate-x-20 overflow-hidden 2xl:w-[10rem]">
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
          <img
            className="mlarge:h-28 mlarge:w-28 pointer-events-none z-0 col-span-8 h-20 w-20 select-none 2xl:h-36 2xl:w-36"
            src={getRoute(pokemonListItemData.id)}
            alt={pokemonListItemData.name}
          />
        </div>
      </Link>
    </li>
  );
};
