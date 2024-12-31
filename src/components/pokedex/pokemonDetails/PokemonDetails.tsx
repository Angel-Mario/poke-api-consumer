import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PokemonListItemDetails, PokemonV2Pokemon } from "../types";

import { TabView, TabPanel } from "primereact/tabview";

import { DetailsAbout } from "./DetailsAbout";
import { DetailsStats } from "./DetailsStats";
import { DetailsEvol } from "./DetailsEvol";

export const PokemonDetails: React.FC = () => {
  const selectedPokemonAll = useLoaderData() as
    | PokemonListItemDetails
    | undefined;

  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonV2Pokemon | undefined
  >(undefined);

  useEffect(() => {
    if (selectedPokemonAll)
      setSelectedPokemon(selectedPokemonAll.data.pokemon_v2_pokemon[0]);
  }, [selectedPokemonAll]);

  return (
    <>
      {selectedPokemon && (
        <div className="mx-4 mb-3 mt-8 h-fillAvailable overflow-hidden">
          <TabView className="h-full">
            {/* TabPanel About */}
            <TabPanel header="About" className="h-fillAvailable pb-16">
              <DetailsAbout pokemon={selectedPokemon} />
            </TabPanel>
            {/* TabPanel Stats */}
            <TabPanel header="Base Stats" className="h-fillAvailable pb-16">
              <DetailsStats pokemon={selectedPokemon} />
            </TabPanel>
            {/* TabPanel Evolution */}
            <TabPanel header="Evolution" className="h-fillAvailable pb-16">
              <DetailsEvol pokemon={selectedPokemon} />
            </TabPanel>
            {/* TabPanel Moves */}
            <TabPanel header="Moves">
              <h2>I like to move move i like to move move</h2>
            </TabPanel>
          </TabView>
        </div>
      )}
      {!selectedPokemon && (
        <div className="mx-4 mb-3 mt-8 h-fillAvailable overflow-hidden">
          <TabView className="h-full">
            <TabPanel header="About" className="h-fillAvailable pb-16" />
            <TabPanel header="Base Stats" className="h-fillAvailable pb-16" />
            <TabPanel header="Evolution" className="h-fillAvailable pb-16" />
            <TabPanel header="Moves" />
          </TabView>
        </div>
      )}
    </>
  );
};
export default PokemonDetails;
