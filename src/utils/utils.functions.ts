import React from "react";
import {
  PokemonListItemData,
  PokemonListItemDetails,
} from "../components/pokemons/types";
import { generationVersion, POKETYPES } from "./consts";

const src = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/`;

export const getRoute = (id: number) => {
  if (id < 10) {
    return `${src}00${id}.png`;
  } else if (id < 100) {
    return `${src}0${id}.png`;
  } else {
    return `${src}${id}.png`;
  }
};
export const getId = (id: number) => {
  if (id < 10) {
    return `00${id}`;
  } else if (id < 100) {
    return `0${id}`;
  } else {
    return id;
  }
};

export function getHeightInFeets(heightDec: number): string {
  const feets = Math.floor(heightDec);
  const inches = ((heightDec - feets) * 12).toFixed(1);
  return feets + "'" + inches + `"`;
}

export function getWeightInHectograms(weight: number): string {
  return `${(weight * 0.22).toFixed(1)} lbs`;
}

export function getBarColorIndividual(value: number): string {
  if (value < 40) {
    return "#ff0000";
  } else if (value < 60) {
    return "#ff692d";
  }
  return "#00aa13";
}

export function getIfPokemonFavorite(id: number = -1): boolean {
  const storageString = localStorage.getItem("pokFaves");
  if (
    storageString &&
    storageString != "undefined" &&
    storageString.length > 1
  ) {
    let storage = <number[]>JSON.parse(storageString);
    return storage && storage.find((value) => value === id) != undefined;
  } else {
    return false;
  }
}

export function setPokemonDataDetails(pokemon: PokemonListItemDetails): void {
  const storageString = sessionStorage.getItem(
    `pokListDetails-${getGameVersion()}`,
  );
  if (storageString && storageString != "undefined") {
    let storage = <PokemonListItemDetails[]>JSON.parse(storageString);
    if (storage) {
      storage.push(pokemon);
      sessionStorage.setItem(
        `pokListDetails-${getGameVersion()}`,
        JSON.stringify(storage),
      );
    }
  } else {
    sessionStorage.setItem(
      `pokListDetails-${getGameVersion()}`,
      JSON.stringify(Array.of(pokemon)),
    );
  }
}

export function getPokemonDataDetails(
  id: number = -1,
): PokemonListItemDetails | undefined {
  const storageString = sessionStorage.getItem(
    `pokListDetails-${getGameVersion()}`,
  );
  if (
    storageString &&
    storageString != "undefined" &&
    storageString.length > 1
  ) {
    let storage = <PokemonListItemDetails[]>JSON.parse(storageString);
    return storage.find((value) => value.data.pokemon_v2_pokemon[0].id === id);
  } else {
    return undefined;
  }
}

export function filterPokemons(
  pokemons: PokemonListItemData[],
  version: number,
  filter: string,
  columns: number,
): PokemonListItemData[][] {
  const filtered = filterListPokemons(pokemons, version, filter);

  return toTwoDimensionalArray(filtered, columns);
}
export function filterListPokemons(
  pokemons: PokemonListItemData[],
  version: number,
  filter: string,
): PokemonListItemData[] {
  let key: number | undefined = undefined;

  Object.entries(POKETYPES).forEach((value) => {
    if (filter.toLocaleLowerCase() == value[1].toLocaleLowerCase()) {
      key = +value[0];
    }
  });

  const filtered = pokemons.filter((item) => {
    return (
      (filter.length == 0 ||
        item.id.toString().includes(filter) ||
        item.name.includes(filter.toLocaleLowerCase()) ||
        item.pokemon_v2_pokemontypes[0].pokemon_v2_type.id == key ||
        (item.pokemon_v2_pokemontypes[1] &&
          item.pokemon_v2_pokemontypes[1].pokemon_v2_type.id == key)) &&
      item.id < 1026 &&
      isOntheCurrentVersion(
        item.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0]
          .pokemon_v2_version.id,
        version,
      )
    );
  });

  return filtered;
}

export function isOntheCurrentVersion(id: number, version: number): boolean {
  return id <= version + 1;
}

export function isOntheCurrentVersionById(
  id: number,
  version: number,
): boolean {
  let flavorId = getPokemonList()?.find((value) => value.id == id)
    ?.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0]
    .pokemon_v2_version.id;

  if (flavorId == undefined) {
    return false;
  }
  return flavorId <= version + 1;
}

type ObjectArray = Record<string, any>[];

export function manageHeartClick(
  isFavorite: boolean,
  id: number,
  setFavorite: React.Dispatch<React.SetStateAction<boolean>>,
) {
  if (isFavorite) {
    unsetPokemonFavorite(id);
  } else {
    setPokemonFavorite(id);
  }
  setFavorite(!isFavorite);
}

function setPokemonFavorite(id: number = -1): void {
  const storageString = localStorage.getItem("pokFaves");
  if (storageString && storageString != "undefined") {
    let storage = <number[]>JSON.parse(storageString);
    if (storage) {
      storage.push(id);
      localStorage.setItem("pokFaves", JSON.stringify(storage));
    }
  } else {
    localStorage.setItem("pokFaves", JSON.stringify(Array.of(id)));
  }
}

function unsetPokemonFavorite(id: number = -1) {
  const storageString = localStorage.getItem("pokFaves");
  if (storageString && storageString != "undefined") {
    let storage = <number[]>JSON.parse(storageString);
    if (storage) {
      localStorage.setItem(
        "pokFaves",
        JSON.stringify(storage.filter((value) => value !== id)),
      );
    }
  }
}

export function setPokemonList(pokemons: PokemonListItemData[]): void {
  sessionStorage.setItem("pokList", JSON.stringify(pokemons));
}

export function getPokemonList(): PokemonListItemData[] | undefined {
  const storageString = sessionStorage.getItem("pokList");
  if (
    storageString &&
    storageString != "undefined" &&
    storageString.length > 1
  ) {
    let storage = <PokemonListItemData[]>JSON.parse(storageString);
    return storage;
  } else {
    return undefined;
  }
}

export function getPokemonListItem(
  id: number = -1,
): PokemonListItemData | undefined {
  const storageString = sessionStorage.getItem("pokList");
  if (
    storageString &&
    storageString != "undefined" &&
    storageString.length > 1
  ) {
    let storage = <PokemonListItemData[]>JSON.parse(storageString);
    return storage.find((value) => value.id == id);
  } else {
    return undefined;
  }
}

//Global Shared
export function toTwoDimensionalArray(
  array: ObjectArray,
  columns: number,
): any[][] {
  const result: any[][] = [];
  let rowIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % columns === 0) {
      result.push([]);
      rowIndex++;
    }
    result[rowIndex - 1].push(array[i]);
  }
  return result;
}

export function getGameVersion(): string {
  const storageString = localStorage.getItem("gameVer");
  if (storageString && storageString != "undefined") {
    return storageString;
  } else {
    return "1";
  }
}

export const getGenerationByVersion = (version: number) => {
  let gen = -1;
  generationVersion.pokemon_v2_generation.forEach((generation) => {
    generation.pokemon_v2_versiongroups.forEach((versiongroup) => {
      if (versiongroup.id == version) {
        gen = generation.id;
      }
    });
  });

  return gen;
};
