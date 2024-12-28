import {
  PokemonListItemData,
  PokemonListItemDetails,
} from "../components/pokedex/types";

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

export function setPokemonFavorite(id: number = -1): void {
  const storageString = localStorage.getItem("pokFaves");
  if (storageString && storageString != "undefined") {
    let storage = <number[]>JSON.parse(storageString);
    if (storage) {
      storage.push(id);
      localStorage.setItem("pokFaves", JSON.stringify(storage.sort));
    }
  } else {
    localStorage.setItem("pokFaves", JSON.stringify(Array.of(id)));
  }
}
export function unsetPokemonFavorite(id: number = -1) {
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
  const storageString = localStorage.getItem("pokListDetails");
  if (storageString && storageString != "undefined") {
    let storage = <PokemonListItemDetails[]>JSON.parse(storageString);
    if (storage) {
      storage.push(pokemon);
      localStorage.setItem("pokListDetails", JSON.stringify(storage.sort));
    }
  } else {
    localStorage.setItem("pokListDetails", JSON.stringify(Array.of(pokemon)));
  }
}
export function getPokemonDataDetails(
  id: number = -1,
): PokemonListItemDetails | undefined {
  const storageString = localStorage.getItem("pokListDetails");
  if (
    storageString &&
    storageString != "undefined" &&
    storageString.length > 1
  ) {
    let storage = <PokemonListItemDetails[]>JSON.parse(storageString);
    console.log(
      "Encontro",
      storage.find((value) => value.data.pokemon_v2_pokemon[0].id === id),
    );
    return storage.find((value) => value.data.pokemon_v2_pokemon[0].id === id);
  } else {
    return undefined;
  }
}

export function filterPokemons(
  pokemons: PokemonListItemData[],
  filter: string,
  columns: number,
): PokemonListItemData[][] {
  const filtered = pokemons.filter((item) => {
    return (
      filter.length == 0 ||
      item.id.toString().includes(filter) ||
      item.name.includes(filter.toLocaleLowerCase())
    );
  });

  return toTwoDimensionalArray(filtered, columns);
}

type ObjectArray = Record<string, any>[];

function toTwoDimensionalArray(
  array: ObjectArray,
  columns: number,
): PokemonListItemData[][] {
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
