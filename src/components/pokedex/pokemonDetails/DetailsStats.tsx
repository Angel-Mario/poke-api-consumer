import { ScrollPanel } from "primereact/scrollpanel";
import { PokemonV2Pokemon } from "../types";
import { PokemonStatBar } from "./PokemonStatBar";
import { cardTheme } from "../../../utils/card-aspects";
import { getEffectivenessAgainstType } from "../../../utils/consts";
import { PokemonTag } from "../PokemonTag";
import React from "react";

interface Props {
  pokemon: PokemonV2Pokemon;
}

export const DetailsStats: React.FC<Props> = ({ pokemon }) => {
  return (
    <>
      <article className="flex h-full flex-col overflow-x-hidden">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <article className="px-3">
            <section className="inline-grid w-full grid-cols-12 flex-col gap-y-1 font-semibold">
              <PokemonStatBar
                base_stat={pokemon.pokemon_v2_pokemonstats[0].base_stat}
                text="HP"
                total_stats={false}
              ></PokemonStatBar>
              <PokemonStatBar
                base_stat={pokemon.pokemon_v2_pokemonstats[1].base_stat}
                text="Attack"
                total_stats={false}
              ></PokemonStatBar>
              <PokemonStatBar
                base_stat={pokemon.pokemon_v2_pokemonstats[2].base_stat}
                text="Defense"
                total_stats={false}
              ></PokemonStatBar>
              <PokemonStatBar
                base_stat={pokemon.pokemon_v2_pokemonstats[3].base_stat}
                text="Sp. Attack"
                total_stats={false}
              ></PokemonStatBar>
              <PokemonStatBar
                base_stat={pokemon.pokemon_v2_pokemonstats[4].base_stat}
                text="Sp. Defense"
                total_stats={false}
              ></PokemonStatBar>
              <PokemonStatBar
                base_stat={pokemon.pokemon_v2_pokemonstats[5].base_stat}
                text="Speed"
                total_stats={false}
              ></PokemonStatBar>
              <PokemonStatBar
                base_stat={((): number => {
                  let value = 0;
                  pokemon.pokemon_v2_pokemonstats.forEach(
                    (valueTemp) => (value += valueTemp.base_stat)
                  );
                  return value;
                })()}
                text="Total"
                total_stats={true}
              ></PokemonStatBar>
            </section>
            <h1 className="mb-1 mt-3 text-xl font-bold">Type defenses</h1>
            <div className="mb-1 flex flex-row text-justify font-semibold">
              <h2>The effectiveness of each type on </h2>
              <h2 className="ms-1 capitalize">{pokemon.name}.</h2>
            </div>
            <section className="mb-2 mt-1 inline-grid w-full grid-cols-3 flex-col gap-y-2 font-semibold">
              {Object.values(cardTheme)
                .slice(0, 18)
                .map((_theme, index) => (
                  <div
                    className="inline-grid select-none grid-cols-3 flex-row gap-x-1"
                    key={index}
                  >
                    <div className="col-span-2">
                      <PokemonTag
                        rounded="rounded-md"
                        id={index + 1}
                        id2={index + 1}
                      ></PokemonTag>
                    </div>
                    x
                    {getEffectivenessAgainstType(
                      index,
                      pokemon.pokemon_v2_pokemontypes[0].type_id - 1,
                      pokemon.pokemon_v2_pokemontypes.length == 1
                        ? -1
                        : pokemon.pokemon_v2_pokemontypes[1].type_id - 1
                    )}
                  </div>
                ))}
            </section>
          </article>
        </ScrollPanel>
      </article>
    </>
  );
};
