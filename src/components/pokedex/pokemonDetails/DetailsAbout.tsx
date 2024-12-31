import { ScrollPanel } from "primereact/scrollpanel";
import {
  getHeightInFeets,
  getWeightInHectograms,
} from "../../../utils/utils.functions";
import { PokemonV2Pokemon } from "../types";

interface Props {
  pokemon: PokemonV2Pokemon;
}

export const DetailsAbout: React.FC<Props> = ({ pokemon }) => {
  let abilities = "";

  pokemon.pokemon_v2_pokemonabilities.forEach((abil, index) => {
    if (index != 0) abilities += ", " + abil.pokemon_v2_ability.name;
    else abilities = abil.pokemon_v2_ability.name;
  });

  return (
    <>
      <div className="flex h-full flex-col overflow-x-hidden">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <article className="px-3">
            <h1 className="mb-2 text-xl font-bold capitalize">
              About {pokemon.name}
            </h1>
            <h2 className="mb-1 text-justify font-semibold">
              {pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
                .replace(`\f`, " ")
                .replace(`\n`, " ")}
            </h2>
            <h1 className="mb-1 text-xl font-bold">Data</h1>
            <section className="inline-grid w-full grid-cols-12 flex-col gap-y-1 font-semibold">
              <h2 className="col-span-3 opacity-60">Species</h2>
              <h2 className="col-span-9">
                {
                  pokemon.pokemon_v2_pokemonspecy
                    .pokemon_v2_pokemonspeciesnames[0].genus
                }
              </h2>

              <h2 className="col-span-3 opacity-60">Height</h2>
              <h2 className="col-span-9">{`${getHeightInFeets(pokemon.height * 0.328084)} (${pokemon.height * 10}cm)`}</h2>

              <h2 className="col-span-3 opacity-60">Weigth</h2>
              <h2 className="col-span-9">{`${getWeightInHectograms(pokemon.weight)} (${pokemon.weight / 10}kg)`}</h2>

              <h2 className="col-span-3 opacity-60">Abilities</h2>
              <div className="col-span-9 flex flex-row">
                <h2 className="capitalize">{abilities}.</h2>
              </div>
            </section>
            <h1 className="mb-2 mt-3 text-xl font-bold">Breeding</h1>
            <section className="inline-grid w-full grid-cols-12 flex-col gap-x-1 gap-y-1 font-semibold">
              <h2 className="col-span-3 opacity-60">
                Egg Group
                {`${pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonegggroups.length > 1 ? "s" : ""} `}
              </h2>
              <div className="col-span-9 flex flex-row">
                {pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonegggroups.map(
                  (eggGroup, index) => (
                    <h2
                      className="capitalize"
                      key={eggGroup.pokemon_v2_egggroup.name}
                    >
                      {`${index != 0 ? ", " : ""}${eggGroup.pokemon_v2_egggroup.name}`}
                    </h2>
                  ),
                )}
              </div>
            </section>
          </article>
        </ScrollPanel>
      </div>
    </>
  );
};
