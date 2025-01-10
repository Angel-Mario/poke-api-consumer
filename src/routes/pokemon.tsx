import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { useEffect, useRef, useState } from "react";
import { PokemonList } from "../components/pokemons/PokemonList.tsx";
import { usePokemonListItemStore } from "../utils/store.ts";
import { DetailsBasic } from "../components/pokemons/pokemonDetails/DetailsBasic.tsx";

import { ProgressSpinner } from "primereact/progressspinner";
import { getPokemonListItem } from "../utils/utils.functions.ts";
import { PokemonListItemData } from "../components/pokemons/types";

export default function Pokemon() {
  const setList = usePokemonListItemStore((state) => state.setList);
  const firtTime = useRef(true);

  //hooks
  const loaderListAll = useLoaderData() as PokemonListItemData[] | undefined;

  const [isDialogVisible, setDialogVisible] = useState<undefined | boolean>(
    undefined,
  );
  const [pokemonID, setPokemonID] = useState<undefined | number>(undefined);

  const location = useLocation();
  const navigate = useNavigate();

  const { state } = useNavigation();

  useEffect(() => {
    if (isDialogVisible == false) {
      navigate("");
      console.log("Hola", location.pathname, isDialogVisible);
    }
  }, [isDialogVisible]);

  useEffect(() => {
    const splitedPaths = location.pathname.split("/");
    console.log(splitedPaths);

    if (!isNaN(+splitedPaths[splitedPaths.length - 1])) {
      if (+splitedPaths[splitedPaths.length - 1] != 0) {
        setPokemonID(+splitedPaths[splitedPaths.length - 1]);
        if (!isDialogVisible) setDialogVisible(true);
      }
    } else {
      if (
        isDialogVisible &&
        splitedPaths[splitedPaths.length - 1].includes("pokemon")
      ) {
        setDialogVisible(false);
      }
    }
  }, [location]);

  useEffect(() => {
    if (loaderListAll && firtTime) {
      setList(loaderListAll);
      firtTime.current = false;
    }
  }, [loaderListAll]);

  return (
    <>
      <div className="h-full w-fillAvailable sm:flex sm:h-fillAvailable sm:flex-row">
        <div className="h-full w-fillAvailable sm:h-fillAvailable sm:pl-1">
          {loaderListAll && <PokemonList />}
        </div>

        <Dialog
          unstyled
          dismissableMask
          modal
          minX={0}
          minY={0}
          position="top"
          visible={isDialogVisible}
          style={{ width: "30vw" }}
          draggable={false}
          breakpoints={{ "745px": "100vw" }}
          onHide={() => {
            if (!isDialogVisible) return;
            setDialogVisible(false);
          }}
          content={
            <>
              <div className="absolute z-50 h-screen w-screen overflow-hidden sm:w-[30rem] sm:rounded-3xl">
                <article className="relative h-screen overflow-hidden sm:rounded-tl-xl">
                  <DetailsBasic pokemon={getPokemonListItem(pokemonID)!} />
                  <section className="absolute z-30 -mt-9 h-fillAvailable w-full rounded-t-[2.5rem] bg-white shadow-2xl sm:rounded-b-[2.5rem]">
                    {state !== "loading" && (
                      <article className="relative h-fillAvailable overflow-hidden sm:rounded-tl-xl">
                        <Outlet />
                      </article>
                    )}
                    {state === "loading" && (
                      <div className="mx-4 mb-3 mt-20 flex h-fillAvailable overflow-hidden">
                        <ProgressSpinner
                          style={{ width: "50px", height: "50px" }}
                          strokeWidth="8"
                          fill="var(--surface-ground)"
                          animationDuration=".5s"
                        />
                      </div>
                    )}
                  </section>
                </article>
              </div>
            </>
          }
        ></Dialog>
      </div>
    </>
  );
}
