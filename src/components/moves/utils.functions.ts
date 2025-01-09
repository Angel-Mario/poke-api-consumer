import { POKETYPES } from "../../utils/consts";
import { toTwoDimensionalArray } from "../../utils/utils.functions";
import { PokemonV2Move } from "./types";

export function setMoveList(moves: PokemonV2Move[]): void {
  localStorage.setItem("movList", JSON.stringify(moves));
}

export function getMoveList(): PokemonV2Move[] | undefined {
  const storageString = localStorage.getItem("movList");
  if (
    storageString &&
    storageString != "undefined" &&
    storageString.length > 1
  ) {
    let storage = <PokemonV2Move[]>JSON.parse(storageString);
    return storage;
  } else {
    return undefined;
  }
}

export function filterMoves(
  moves: PokemonV2Move[],
  generation: number,
  filter: string,
  columns: number,
): PokemonV2Move[][] {
  const filtered = filterListMove(moves, generation, filter);

  return toTwoDimensionalArray(filtered, columns);
}

export function filterListMove(
  moves: PokemonV2Move[],
  generation: number,
  filter: string,
): PokemonV2Move[] {
  let key: number | undefined = undefined;

  Object.entries(POKETYPES).forEach((value) => {
    if (filter.toLocaleLowerCase() == value[1].toLocaleLowerCase()) {
      key = +value[0];
      console.log(key, value[0], value[1]);
    }
  });

  console.log("before", generation, moves);
  const filtered = moves.filter((item) => {
    return (
      filter.length == 0 ||
      item.id.toString().includes(filter) ||
      item.name.includes(filter.toLocaleLowerCase()) ||
      item.type_id == key
      // &&      item.generation_id == generation
    );
  });

  return filtered;
}
