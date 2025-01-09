import React from "react";
import { cardButton } from "../../utils/card-aspects";
import { POKETYPES } from "../../utils/consts";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { Skeleton } from "primereact/skeleton";

interface Props {
  id: number;
  id2: number;
  rounded?: string;
  padding?: string;
  responsive?: boolean;
  classes?: string;
  loaded?: boolean;
}

export const PokemonTag: React.FC<Props> = ({
  id,
  id2,
  rounded = "rounded-2xl",
  padding = "px-1",
  responsive = true,
  classes = "",
  loaded = true,
}) => {
  return (
    <>
      {loaded ? (
        <div
          className={classNames(rounded, padding, "capitalize")}
          style={{
            backgroundColor: cardButton[POKETYPES[id]],
          }}
        >
          <h3
            className={twMerge(
              "select-none text-center font-semibold text-gray-100",
              responsive ? "2xl:text-xl" : "",
              classes,
            )}
          >
            {POKETYPES[id2]}
          </h3>
        </div>
      ) : (
        <Skeleton
          width="auto"
          borderRadius="16px"
          className={classNames(rounded, padding)}
        ></Skeleton>
      )}
    </>
  );
};
