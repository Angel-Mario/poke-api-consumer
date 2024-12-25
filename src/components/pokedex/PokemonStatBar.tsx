import { ProgressBar } from "primereact/progressbar";
import { getBarColorIndividual } from "../../utils/utils.functions";

interface PokemonStatBar {
  base_stat: number;
  text: string;
  total_stats: boolean;
}

export const PokemonStatBar: React.FC<PokemonStatBar> = ({
  base_stat,
  text,
  total_stats,
}) => {
  return (
    <>
      <h2 className="col-span-3 opacity-60">{text}</h2>
      <h2 className="col-span-1">{base_stat}</h2>
      <div className="col-span-8 ms-2 block content-center">
        <ProgressBar
          value={total_stats ? base_stat / 6 : base_stat}
          showValue={true}
          unit=""
          color={
            total_stats
              ? getBarColorIndividual(base_stat / 6)
              : getBarColorIndividual(base_stat)
          }
        ></ProgressBar>
      </div>
    </>
  );
};
