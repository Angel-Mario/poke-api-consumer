import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { useEffect, useRef, useState } from "react";
import { PokemonList } from "../components/pokedex/PokemonList.tsx";
import { usePokemonListItemStore } from "../utils/store.ts";
import {
  PokemonListItemData,
  PokemonListItemDataList,
} from "../components/pokedex/types";
import { QUERY_POKEMON_LIST } from "../utils/consts.ts";
import { DetailsBasic } from "../components/pokedex/pokemonDetails/DetailsBasic.tsx";

import { ProgressSpinner } from "primereact/progressspinner";
import {
  getPokemonList,
  getPokemonListItem,
  setPokemonList,
} from "../utils/utils.functions.ts";

export default function Pokemon() {
  const setList = usePokemonListItemStore((state) => state.setList);
  const firtTime = useRef(true);

  //hooks
  const loaderListAll = useLoaderData() as PokemonListItemData[] | undefined;

  const [isDialogVisible, setDialogVisible] = useState(false);
  const [pokemonid, setPokemonId] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();

  const dialogManager = () => {
    setDialogVisible(!isDialogVisible);
  };
  const pokemonIdManager = (id: number) => {
    setPokemonId(id);
    console.log(id);
  };

  const { state } = useNavigation();

  useEffect(() => {
    if (
      (!location.pathname.endsWith("pokemon") ||
        !location.pathname.endsWith("pokemon/")) &&
      !isDialogVisible
    ) {
      console.log(isDialogVisible);
      console.log("Popeye", location.pathname);
      navigate("");
    }
  }, [isDialogVisible]);

  useEffect(() => {
    const splitedPaths = location.pathname.split("/");

    if (!isNaN(+splitedPaths[splitedPaths.length - 1])) {
      if (+splitedPaths[splitedPaths.length - 1] != 0) {
        setPokemonId(+splitedPaths[splitedPaths.length - 1]);
      }
    }

    if (
      (location.pathname.endsWith("pokemon") ||
        location.pathname.endsWith("pokemon/")) &&
      isDialogVisible
    ) {
      console.log("Pato", location.pathname);
      setDialogVisible(false);
    } else {
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
          {loaderListAll && (
            <PokemonList dialog={dialogManager} idManager={pokemonIdManager} />
          )}
        </div>

        <Dialog
          pt={{}}
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
                  <DetailsBasic pokemon={getPokemonListItem(pokemonid)!} />
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

export async function loader() {
  const pokemonListLocalStorage = getPokemonList();
  if (
    pokemonListLocalStorage != undefined &&
    pokemonListLocalStorage.length > 0
  ) {
    return pokemonListLocalStorage;
  }
  const pokemonList = await getPokemonListExt().catch((_error) => {
    return undefined;
  });

  if (pokemonList) {
    setPokemonList(pokemonList.data.pokemon_v2_pokemon);
  }
  return pokemonList?.data.pokemon_v2_pokemon;
}

const getPokemonListExt = () => {
  return requestPokemonList();
};

async function requestPokemonList(): Promise<
  PokemonListItemDataList | undefined
> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: QUERY_POKEMON_LIST,
  };

  const response = await fetch(
    "https://beta.pokeapi.co/graphql/v1beta",
    requestOptions,
  );
  console.log(response);

  const data = await response.json();
  console.log(data);
  return data;
}
