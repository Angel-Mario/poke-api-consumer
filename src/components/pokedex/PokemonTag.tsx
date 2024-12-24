import React from "react";
import { cardButton } from "../../utils/card-aspects";
import { POKETYPES } from "../../utils/consts";

interface Props {
  id: number;
  id2: number;
}

export const PokemonTag: React.FC<Props> = ({ id, id2 }) => {
  return (
    <>
      <div
        className="rounded-2xl px-1 capitalize"
        style={{
          backgroundColor: cardButton[POKETYPES[id]],
        }}
      >
        <h3 className="select-none text-center font-semibold text-white 2xl:text-xl">
          {POKETYPES[id2]}
        </h3>
      </div>
    </>
  );
};
