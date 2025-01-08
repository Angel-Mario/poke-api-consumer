import { ScrollPanel } from "primereact/scrollpanel";
import { PokemonV2Pokemon } from "../types";
import React from "react";

interface Props {
  pokemon: PokemonV2Pokemon;
}

export const DetailsMoves: React.FC<Props> = ({ pokemon }) => {
  return (
    <>
      <div className="flex h-full flex-row overflow-x-hidden">
        <ScrollPanel style={{ width: "100%", height: "100%" }}>
          <article className="flex flex-col gap-x-2 px-3">
            {pokemon.pokemon_v2_pokemonmoves.map((move) => (
              <div
                key={move.move_id}
                className="rounded-md border border-gray-500"
              >
                <h1 className="text-xl">LV{move.level}</h1>
                <h2>
                  {move.pokemon_v2_move.name}
                  {
                    move.pokemon_v2_move.pokemon_v2_moveflavortexts[0]
                      .flavor_text
                  }
                  {move.pokemon_v2_move.power}
                  {move.pokemon_v2_move.pp}
                </h2>
              </div>
            ))}
          </article>
        </ScrollPanel>
      </div>
    </>
  );
};
