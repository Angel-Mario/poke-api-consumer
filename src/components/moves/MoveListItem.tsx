import { cardDetails } from "../../utils/card-aspects";
import { POKETYPES } from "../../utils/consts";
import React from "react";
import { PokemonV2Move } from "./types";

interface MoveListItemInfo {
  move: PokemonV2Move;
}

export const MoveListItem: React.FC<MoveListItemInfo> = ({ move }) => {
  return (
    move.id && (
      <div
        key={`${move.id}`}
        className="relative flex h-20 w-44 select-none flex-row overflow-hidden rounded-md border border-slate-200 bg-gray-50 shadow-md shadow-slate-200 mlarge:w-48 2xl:w-56"
      >
        <div className="grid w-fillAvailable grid-cols-8 gap-x-1">
          <div className="col-span-5 flex flex-col ps-1 pt-1">
            <h1 className="line-clamp-1 text-base font-bold capitalize">
              {move.name}
            </h1>
            {move.pokemon_v2_moveeffect?.pokemon_v2_moveeffecteffecttexts
              .length == 1 &&
              move.pokemon_v2_moveeffect?.pokemon_v2_moveeffecteffecttexts[0]
                .short_effect && (
                <h1 className="line-clamp-3 text-justify text-sm font-semibold leading-4">
                  {move.pokemon_v2_moveeffect?.pokemon_v2_moveeffecteffecttexts[0].short_effect.replace(
                    "$effect_chance%",
                    "",
                  )}
                </h1>
              )}
          </div>

          <div className="col-span-3 flex flex-col content-center gap-x-1">
            <div
              className="absolute h-full w-full"
              style={{
                backgroundColor: cardDetails[POKETYPES[move.type_id]],
              }}
            ></div>
            <div className="z-10 mx-[2px] mt-1 flex flex-col justify-center text-xs font-semibold text-gray-100">
              <h1 className="rounded-lg border py-[1px] text-center font-semibold capitalize">
                {POKETYPES[move.type_id]}
              </h1>

              <h1 className="mt-2 text-center">
                PW:
                {move.power ? move.power : "~"}
              </h1>
              <h1 className="text-center">PP:{move.pp}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
