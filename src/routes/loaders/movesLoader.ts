import { MovesListBase } from "../../components/moves/types";
import {
  getMoveList,
  setMoveList,
} from "../../components/moves/utils.functions";
import { QUERY_MOVES_LIST } from "./queries";

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
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(QUERY_MOVES_LIST),
  };

  const response = await fetch(
    "https://beta.pokeapi.co/graphql/v1beta",
    requestOptions,
  );

  const data = await response.json();
  return data;
}
