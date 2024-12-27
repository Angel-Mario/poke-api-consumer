import { LoaderFunctionArgs, Outlet, useLocation } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { getPokemonDetails } from "../components/pokedex/PokemonDetails.tsx";
import { PokemonList } from "../components/pokedex/PokemonList.tsx";
import { getPokemonListItemData } from "../hooks/getPokemonListItemData.ts";
import { usePokemonListItemStore } from "../utils/store.ts";

export default function Pokemon() {
  const setList = usePokemonListItemStore((state) => state.setList);

  //hooks
  const [isDialogVisible, setDialogVisible] = useState(false);
  const dialogManager = () => setDialogVisible(!isDialogVisible);
  const location = useLocation();

  useEffect(() => {
    setList(getPokemonListItemData());
  }, []);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname.endsWith("pokemon") && isDialogVisible)
      setDialogVisible(false);
  }, [location]);

  return (
    <>
      <div className="w-auto flex-row">
        <div className="fixed h-full w-0 bg-gradient-to-r from-slate-200 to-white sm:w-5"></div>
        <div className="sm:pl-1">
          <div className="flex justify-center rounded-xl bg-white p-5">
            <PokemonList dialog={dialogManager}></PokemonList>
          </div>
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
                <Outlet></Outlet>
              </div>
            </>
          }
        ></Dialog>
      </div>
    </>
  );
}

// async function requestPokemonList(): Promise<PokemonListItemData> {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: QUERY_POKEMON_LIST,
//   };

//   const response = await fetch(
//     "https://beta.pokeapi.co/graphql/v1beta",
//     requestOptions,
//   );
//   const data = await response.json();
//   return data;
// }

export async function loader({ params }: LoaderFunctionArgs<{ id: string }>) {
  const pokemonDetails = await getPokemonDetails(params.id!);
  return pokemonDetails;
}
