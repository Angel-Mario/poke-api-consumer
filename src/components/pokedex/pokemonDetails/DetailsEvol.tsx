import { ScrollPanel } from "primereact/scrollpanel";
import { PokemonV2Pokemon } from "../types";
import { PokemonEvol } from "../PokemonEvol";

interface Props {
  pokemon: PokemonV2Pokemon;
}

export const DetailsEvol: React.FC<Props> = ({ pokemon }) => {
  return (
    <>
      <section className="flex h-full flex-col overflow-x-hidden">
        <ScrollPanel>
          <article className="px-3">
            <PokemonEvol pokemon={pokemon}></PokemonEvol>
          </article>
        </ScrollPanel>
      </section>
    </>
  );
};
