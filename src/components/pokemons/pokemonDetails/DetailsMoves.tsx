import { ScrollPanel } from "primereact/scrollpanel";
import { PokemonV2Pokemon } from "../types";
import React from "react";
import { Ripple } from "primereact/ripple";
import { PokemonTag } from "../../shared/PokemonTag";
import { POKETYPES } from "../../../utils/consts";
import { cardDetails } from "../../../utils/card-aspects";

interface Props {
  pokemon: PokemonV2Pokemon;
}

export const DetailsMoves: React.FC<Props> = ({ pokemon }) => {
  return (
    <>
      <div className="flex h-full flex-row overflow-x-hidden">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <article className="flex select-none flex-col gap-y-1 px-3">
            {pokemon.pokemon_v2_pokemonmoves.map((move, index) => (
              <div
                key={`${move.move_id}-${index}`}
                className="p-ripple flex h-16 flex-row items-center gap-x-1 rounded-full border border-slate-200 bg-gray-50 p-3 pe-2 ps-4 shadow-md shadow-slate-200"
              >
                <Ripple
                  pt={{
                    root: {
                      style: {
                        backgroundColor: "rgb(172, 172, 172)",
                      },
                    },
                  }}
                ></Ripple>
                <div className="absolute mx-2 flex w-24 -translate-y-5 flex-row gap-x-2">
                  <h2 className="w-2/5 border-b-2 text-center text-xs font-medium">
                    LV{move.level}
                  </h2>
                  <div className="w-3/5">
                    <PokemonTag
                      id={move.pokemon_v2_move.type_id}
                      id2={move.pokemon_v2_move.type_id}
                      classes="text-xs font-medium"
                    ></PokemonTag>
                  </div>
                </div>

                <h1 className="line-clamp-1 w-4/12 text-base font-bold capitalize">
                  {move.pokemon_v2_move.name}
                </h1>
                <h1 className="line-clamp-2 w-6/12 text-base font-semibold">
                  {move.pokemon_v2_move.pokemon_v2_moveeffect.pokemon_v2_moveeffecteffecttexts[0].short_effect.replace(
                    "$effect_chance%",
                    "",
                  )}
                </h1>
                <div
                  className="absolute right-0 h-28 w-2/12 rotate-[24deg] bg-black"
                  style={{
                    backgroundColor:
                      cardDetails[POKETYPES[move.pokemon_v2_move.type_id]],
                  }}
                ></div>
                <div className="z-10 ms-2 flex flex-col justify-center font-semibold text-gray-100">
                  <h1 className="text-base">
                    PW:
                    {move.pokemon_v2_move.power
                      ? move.pokemon_v2_move.power
                      : "~"}
                  </h1>
                  <h1>PP:{move.pokemon_v2_move.pp}</h1>
                </div>
              </div>
            ))}
          </article>
        </ScrollPanel>
      </div>
    </>
  );
};
