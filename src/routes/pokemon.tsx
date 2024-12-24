// import reactLogo from './assets/react.svg'
import { mockPoke } from "../utils/mocks.ts";
import { LoaderFunctionArgs, Outlet, useLocation } from "react-router-dom";

import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { getPokemonDetails } from "../components/pokedex/PokemonDetails.tsx";
import { PokemonList } from "../components/pokedex/PokemonList.tsx";
import { PokemonListItemData } from "../components/pokedex/types";

function Pokemon() {
  const mock: PokemonListItemData[] = [];

  mockPoke.data.pokemon_v2_pokemon.map((pokemon) => {
    mock.push({
      id: pokemon.id,
      name: pokemon.name,
      pokemon_v2_pokemontypes: [
        {
          pokemon_v2_type: {
            id: pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.id,
          },
        },
        {
          pokemon_v2_type: {
            id:
              pokemon.pokemon_v2_pokemontypes.length > 1
                ? pokemon.pokemon_v2_pokemontypes[1].pokemon_v2_type.id
                : 0,
          },
        },
      ],
    });
  });
  //hooks
  const [isDialogVisible, setDialogVisible] = useState(false);
  const dialogManager = () => setDialogVisible(!isDialogVisible);
  const location = useLocation();

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
            <PokemonList pokemons={mock} dialog={dialogManager}></PokemonList>
          </div>
        </div>
        {/* <div className="h-auto w-3 bg-gradient-to-r from-slate-50 to-slate-200">
        </div> */}

        {/* < onClick={() => setVisible(true)} /> */}

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
          breakpoints={{ "960px": "100vw", "641px": "100vw" }}
          onHide={() => {
            if (!isDialogVisible) return;
            setDialogVisible(false);
          }}
          content={
            <>
              {/* <Link to={""}>
                <div
                  className="absolute z-20 h-screen w-screen bg-gray-950 opacity-70"
                  onClick={() => setDialogVisible(false)}
                ></div>
              </Link> */}
              {/* <div className="flex h-screen w-screen justify-center"> */}
              <div className="absolute z-50 h-screen w-screen overflow-hidden sm:w-[30rem] sm:rounded-3xl">
                <Outlet></Outlet>
              </div>
              {/* </div> */}
            </>
          }
        ></Dialog>
      </div>
    </>
  );
}
export default Pokemon;

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
