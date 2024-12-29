import {
  LoaderFunctionArgs,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { getPokemonDetails } from "../components/pokedex/PokemonDetails.tsx";
import { PokemonList } from "../components/pokedex/PokemonList.tsx";
import { getPokemonListItemData } from "../hooks/getPokemonListItemData.ts";
import { usePokemonListItemStore } from "../utils/store.ts";
import {
  getPokemonDataDetails,
  setPokemonDataDetails,
} from "../utils/utils.functions.ts";

export default function Pokemon() {
  const setList = usePokemonListItemStore((state) => state.setList);

  //hooks
  const [isDialogVisible, setDialogVisible] = useState(false);
  const dialogManager = () => setDialogVisible(!isDialogVisible);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setList(getPokemonListItemData());
  }, []);

  // navigate("");

  useEffect(() => {
    if (!location.pathname.endsWith("pokemon") && !isDialogVisible) {
      console.log("Popeye");
      navigate("");
    }
  }, [isDialogVisible]);

  useEffect(() => {
    if (location.pathname.endsWith("pokemon") && isDialogVisible)
      setDialogVisible(false);
  }, [location]);

  return (
    <>
      <div className="h-full w-fillAvailable sm:flex sm:h-fillAvailable sm:flex-row">
        <div className="h-full w-fillAvailable sm:h-fillAvailable sm:pl-1">
          <PokemonList dialog={dialogManager}></PokemonList>
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
  const pokemonDetailsLocalStorage = getPokemonDataDetails(+params.id!);
  if (pokemonDetailsLocalStorage != undefined) {
    return pokemonDetailsLocalStorage;
  }
  const pokemonDetails = await getPokemonDetails(params.id!).catch((_error) => {
    return undefined;
  });

  if (pokemonDetails) {
    setPokemonDataDetails(pokemonDetails);
  }
  return pokemonDetails;
}
