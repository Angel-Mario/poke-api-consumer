import { PokemonListItem } from "./PokemonListItem";
import { usePokemonListItemStore } from "../../utils/store.ts";
import { VirtualScroller } from "primereact/virtualscroller";

import { filterPokemons } from "../../utils/utils.functions.ts";
import React, { useMemo } from "react";
import { PokemonListItemData } from "./types";
import useMediaQueryHook from "../../hooks/useMediaQueryHook.ts";
import useFilterStoreHook from "../../hooks/useFilterStoreHook.ts";

interface Props {}

export const PokemonList: React.FC<Props> = ({}) => {
  const pokemons = usePokemonListItemStore((state) => state.pokemons);

  const {
    isSmallDevice,
    isSemiSmallDevice,
    isSemiMediumDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice,
  } = useMediaQueryHook({ fiveBP: 1820 });

  const { filterText, ver } = useFilterStoreHook();

  const filteredPokemons = useMemo(() => {
    return filterPokemons(
      pokemons,
      +ver,
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
    pokemons,
    filterText,
    ver,
    isSmallDevice,
    isSemiSmallDevice,
    isSemiMediumDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice,
  ]);

  const itemTemplate = (item: PokemonListItemData[]) => {
    return item && true ? (
      <div className="mb-2 mt-1 flex w-fillAvailable flex-row flex-wrap justify-center gap-4">
        {item.map((pokemonItem) => {
          return (
            <PokemonListItem
              pokemonListItemData={pokemonItem}
              key={`ListItem${pokemonItem.id}`}
            ></PokemonListItem>
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
        <VirtualScroller
          items={filteredPokemons}
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
  return 6;
}
