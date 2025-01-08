import { PokemonListItem } from "./PokemonListItem";
import { usePokemonListItemStore } from "../../utils/store.ts";
import { VirtualScroller } from "primereact/virtualscroller";

import { useMediaQuery } from "@uidotdev/usehooks";
import {
  filterPokemons,
  getPokemonDataDetails,
  setPokemonDataDetails,
} from "../../utils/utils.functions.ts";
import { LoaderFunctionArgs } from "react-router-dom";
import { QUERY_POKEMON_DETAILS } from "../../utils/consts.ts";
import React from "react";
import { PokemonListItemData, PokemonListItemDetails } from "./types";

interface Props {
  idManager: (id: number) => void;
}

export const PokemonList: React.FC<Props> = ({ idManager }) => {
  const pokemons = usePokemonListItemStore((state) => state.pokemons);
  const filterText = usePokemonListItemStore((state) => state.filter);
  const ver = usePokemonListItemStore((state) => state.version);

  const isSmallDevice = useMediaQuery("only screen and (max-width : 544px)");

  const isSemiSmallDevice = useMediaQuery(
    "only screen and (min-width : 545px) and (max-width : 640px)",
  );
  const isSemiMediumDevice = useMediaQuery(
    "only screen and (min-width : 641px) and (max-width : 768px)",
  );
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 992px)",
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1314px)",
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1314px)",
  );

  const itemTemplate = (item: PokemonListItemData[]) => {
    return item && true ? (
      <div className="mb-2 mt-1 flex w-fillAvailable flex-row flex-wrap justify-center gap-4">
        {item.map((pokemonItem) => {
          return (
            <PokemonListItem
              pokemonListItemData={pokemonItem}
              key={`ListItem${pokemonItem.id}`}
              pokemonIdManager={idManager}
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
          items={filterPokemons(
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
          )}
          columns={1}
          itemSize={120}
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
    body: JSON.stringify(QUERY_POKEMON_DETAILS(id, +version + 1)),
  };

  const response = await fetch(
    "https://beta.pokeapi.co/graphql/v1beta",
    requestOptions,
  );
  console.log(id);
  console.log(response);

  // const data = mockePokeDetails;
  const data = await response.json();
  console.log(data);
  return data;
}
