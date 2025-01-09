import { PokemonListItem } from "./PokemonListItem";
import { usePokemonListItemStore } from "../../utils/store.ts";
import { VirtualScroller } from "primereact/virtualscroller";

import {
  filterPokemons,
  getGenerationByVersion,
  getPokemonDataDetails,
  setPokemonDataDetails,
} from "../../utils/utils.functions.ts";
import { LoaderFunctionArgs } from "react-router-dom";
import { QUERY_POKEMON_DETAILS } from "../../utils/consts.ts";
import React, { useMemo } from "react";
import { PokemonListItemData, PokemonListItemDetails } from "./types";
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
  } = useMediaQueryHook();

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
  return 4;
}

export async function loader({ params }: LoaderFunctionArgs<{ id: string }>) {
  const pokemonDetailsLocalStorage = getPokemonDataDetails(+params.id!);
  if (pokemonDetailsLocalStorage != undefined) {
    return pokemonDetailsLocalStorage;
  }
  const pokemonDetails = await getPokemonDetails(params.id!).catch((_error) => {
    return undefined;
  });
  console.log("detallito", pokemonDetails);

  if (pokemonDetails) {
    setPokemonDataDetails(pokemonDetails);
  }
  return pokemonDetails;
}

const getPokemonDetails = (id: string) => {
  return requestPokemonDetails(id);
};

async function requestPokemonDetails(
  id: string,
): Promise<PokemonListItemDetails | undefined> {
  let version = localStorage.getItem("gameVer");
  if (version == undefined) {
    version = "0";
  }

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      QUERY_POKEMON_DETAILS(
        id,
        +version + 1,
        getGenerationByVersion(+version + 1),
      ),
    ),
  };

  const response = await fetch(
    "https://beta.pokeapi.co/graphql/v1beta",
    requestOptions,
  );
  console.log(response);

  const data = await response.json();
  return data;
}
