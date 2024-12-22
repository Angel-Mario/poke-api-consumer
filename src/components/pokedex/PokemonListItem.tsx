import { Ripple } from "primereact/ripple";
import { cardTheme, cardButton } from "../../utils/card-aspects";
import { POKETYPES } from "../../utils/consts";
import { PokemonListItemData } from "./types";
import { getId, getRoute } from "../../utils/utils.functions";
import PokeIcon from "../../assets/PokeIcon";
import { Link } from "react-router-dom";
import React from "react";
import { PokemonTag } from "./PokemonTag";

export interface PokemonListItemFunc {
  pokemonListItemData: PokemonListItemData;
  dialogManager: () => void;
}

export const PokemonListItem: React.FC<PokemonListItemFunc> = ({
  pokemonListItemData,
  dialogManager,
}) => {
  return (
    <li
      className="p-ripple z-30 h-auto w-40 cursor-pointer rounded-2xl shadow-sm shadow-black hover:-translate-y-1 [@media(min-width:1200px)]:w-48"
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
          <h1 className="ms-2 w-8/12 select-none py-1 text-lg font-bold capitalize text-white sm:text-xl">
            {pokemonListItemData.name}
          </h1>
          <h1 className="w-4/12 select-none justify-center text-center text-lg font-bold text-gray-500 opacity-40">
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
          <div className="absolute flex w-[6.5rem] translate-x-20 overflow-hidden [@media(min-width:1200px)]:w-[8.5rem]">
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
            className="pointer-events-none z-0 col-span-8 h-20 w-20 select-none [@media(min-width:1200px)]:h-28 [@media(min-width:1200px)]:w-28"
            src={getRoute(pokemonListItemData.id)}
            alt={pokemonListItemData.name}
          />
        </div>
      </Link>
    </li>
  );
};
