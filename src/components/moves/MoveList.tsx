import { useMovesListStore } from "../../utils/store.ts";
import { VirtualScroller } from "primereact/virtualscroller";

import React, { useMemo } from "react";
import useMediaQueryHook from "../../hooks/useMediaQueryHook.ts";
import useFilterStoreHook from "../../hooks/useFilterStoreHook.ts";
import { PokemonV2Move } from "./types";
import { MoveListItem } from "./MoveListItem.tsx";
import { filterMoves } from "./utils.functions.ts";
import { getGenerationByVersion } from "../../utils/utils.functions.ts";

export const MoveList: React.FC = () => {
  const moves = useMovesListStore((state) => state.moves);
  console.log("first", moves);
  const { filterText, ver } = useFilterStoreHook();

  const {
    isSmallDevice,
    isSemiSmallDevice,
    isSemiMediumDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice,
  } = useMediaQueryHook();

  const filteredMoves = useMemo(() => {
    return filterMoves(
      moves,
      getGenerationByVersion(+ver + 1),
      filterText,
      getColsByMedia(
        isSmallDevice,
        isSemiSmallDevice,
        isSemiMediumDevice,
        isMediumDevice,
        isLargeDevice,
        isExtraLargeDevice,
      ),
    );
  }, [
    moves,
    filterText,
    ver,
    isSmallDevice,
    isSemiSmallDevice,
    isSemiMediumDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice,
  ]);

  const itemTemplate = (item: PokemonV2Move[]) => {
    return item && true ? (
      <div className="mb-2 mt-1 flex w-fillAvailable flex-row flex-wrap justify-center gap-4">
        {item.map((pokemonItem) => {
          return (
            <MoveListItem
              move={pokemonItem}
              key={`ListItem${pokemonItem.id}`}
            ></MoveListItem>
          );
        })}
      </div>
    ) : (
      <>No encontro</>
    );
  };

  return (
    <>
      <div className="mb-1 mt-1 h-full w-fillAvailable rounded-xl bg-white pr-0 sm:h-fillAvailable sm:ps-3">
        aaaaaaaaa
        <VirtualScroller
          items={filteredMoves}
          columns={1}
          itemSize={120}
          showSpacer
          numToleratedItems={1}
          itemTemplate={itemTemplate}
          className="border-1 surface-border border-round h-fillAvailable w-fillAvailable"
          style={{
            height: isSmallDevice || isSemiSmallDevice ? "98%" : "99vh",
          }}
        />
      </div>
    </>
  );
};

function getColsByMedia(
  isSmallDevice: boolean,
  isSemiSmallDevice: boolean,
  isSemiMediumDevice: boolean,
  isMediumDevice: boolean,
  isLargeDevice: boolean,
  isExtraLargeDevice: boolean,
): number {
  if (isExtraLargeDevice) return 5;
  if (isLargeDevice) return 4;
  if (isMediumDevice || isSemiSmallDevice) return 3;
  if (isSmallDevice || isSemiMediumDevice) return 2;
  return 4;
}
