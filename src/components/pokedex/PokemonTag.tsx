import React from "react";
import { cardButton } from "../../utils/card-aspects";
import { POKETYPES } from "../../utils/consts";
import classNames from "classnames";

interface Props {
  id: number;
  id2: number;
  rounded?: string;
  padding?: string;
}

export const PokemonTag: React.FC<Props> = ({
  id,
  id2,
  rounded = "rounded-2xl",
  padding = "px-1",
}) => {
  return (
    <>
      <div
        className={classNames(rounded, padding, "capitalize")}
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
