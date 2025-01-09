import { ScrollPanel } from "primereact/scrollpanel";
import { PokemonV2Pokemon } from "../types";
import { PokemonEvol } from "./PokemonEvol";
import React from "react";

interface Props {
  pokemon: PokemonV2Pokemon;
}

export const DetailsEvol: React.FC<Props> = ({ pokemon }) => {
  return (
    <section className="flex h-full flex-col overflow-x-hidden">
      <ScrollPanel style={{ width: "100%", height: "100%" }}>
        <div className="px-3">
          <PokemonEvol pokemon={pokemon}></PokemonEvol>
        </div>
      </ScrollPanel>
    </section>
  );
};
