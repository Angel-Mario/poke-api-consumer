import { Ripple } from "primereact/ripple";
import { cardDetails } from "../../utils/card-aspects";
import { POKETYPES } from "../../utils/consts";
import React from "react";
import { PokemonTag } from "../shared/PokemonTag";
import { PokemonV2Move } from "./types";
// import { Skeleton } from "primereact/skeleton";

interface MoveListItemInfo {
  move: PokemonV2Move;
}

export const MoveListItem: React.FC<MoveListItemInfo> = ({ move }) => {
  //   const [loaded, setLoaded] = useState(false);

  return (
    move.id && (
      <div
        key={`${move.id}`}
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
          <div className="w-3/5">
            <PokemonTag
              id={move.type_id}
              id2={move.type_id}
              classes="text-xs font-medium"
            ></PokemonTag>
          </div>
        </div>

        <h1 className="line-clamp-1 w-4/12 text-base font-bold capitalize">
          {move.name}
        </h1>
        {move.pokemon_v2_moveeffect?.pokemon_v2_moveeffecteffecttexts.length ==
          1 &&
          move.pokemon_v2_moveeffect?.pokemon_v2_moveeffecteffecttexts[0]
            .short_effect && (
            <h1 className="line-clamp-2 w-6/12 text-base font-semibold">
              {move.pokemon_v2_moveeffect?.pokemon_v2_moveeffecteffecttexts[0].short_effect.replace(
                "$effect_chance%",
                "",
              )}
            </h1>
          )}
        <div
          className="absolute right-0 h-28 w-2/12 rotate-[24deg] bg-black"
          style={{
            backgroundColor: cardDetails[POKETYPES[move.type_id]],
          }}
        ></div>
        <div className="z-10 ms-2 flex flex-col justify-center font-semibold text-gray-100">
          <h1 className="text-base">
            PW:
            {move.power ? move.power : "~"}
          </h1>
          <h1>PP:{move.pp}</h1>
        </div>
      </div>
    )
  );
};
