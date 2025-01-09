import { useLoaderData } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useMovesListStore } from "../utils/store.ts";
import { QUERY_MOVES_LIST } from "../utils/consts.ts";

import {
  getMoveList,
  setMoveList,
} from "../components/moves/utils.functions.ts";
import { MovesListBase, PokemonV2Move } from "../components/moves/types";
import { MoveList } from "../components/moves/MoveList.tsx";

export default function Moves() {
  const setList = useMovesListStore((state) => state.setList);
  const firtTime = useRef(true);

  //hooks
  const loaderListAll = useLoaderData() as PokemonV2Move[] | undefined;
  console.log("listAll", loaderListAll);

  useEffect(() => {
    console.log(loaderListAll);
    if (loaderListAll && firtTime) {
      setList(loaderListAll);
      firtTime.current = false;
    }
  }, [loaderListAll]);

  return (
    <>
      <div className="h-full w-fillAvailable sm:h-fillAvailable sm:pl-1">
        {loaderListAll && <MoveList />}
      </div>
    </>
  );
}

export async function loader() {
  const moveListLocalStorage = getMoveList();
  if (moveListLocalStorage != undefined && moveListLocalStorage.length > 0) {
    return moveListLocalStorage;
  }
  const moveList = await getMoveListExt().catch((_error) => {
    return undefined;
  });

  if (moveList) {
    setMoveList(moveList.data.pokemon_v2_move);
  }
  return moveList?.data.pokemon_v2_move;
}

const getMoveListExt = () => {
  return requestMoveList();
};

async function requestMoveList(): Promise<MovesListBase | undefined> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(QUERY_MOVES_LIST),
  };

  const response = await fetch(
    "https://beta.pokeapi.co/graphql/v1beta",
    requestOptions,
  );

  const data = await response.json();
  return data;
}
