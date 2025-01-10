import { useLoaderData } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useMovesListStore } from "../utils/store.ts";

import { PokemonV2Move } from "../components/moves/types";
import { MoveList } from "../components/moves/MoveList.tsx";

export default function Moves() {
  const setList = useMovesListStore((state) => state.setList);
  const firtTime = useRef(true);

  //hooks
  const loaderListAll = useLoaderData() as PokemonV2Move[] | undefined;

  useEffect(() => {
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
