import { PokemonListItem } from "./PokemonListItem";
import { usePokemonListItemStore } from "../../utils/store.ts";
import { VirtualScroller } from "primereact/virtualscroller";
import { PokemonListItemData } from "./types";
import { useMediaQuery } from "@uidotdev/usehooks";
import { filterPokemons } from "../../utils/utils.functions.ts";

interface Props {
  dialog: () => void;
}

export const PokemonList: React.FC<Props> = ({ dialog }) => {
  const pokemon = usePokemonListItemStore((state) => state.pokemons);
  const filter = usePokemonListItemStore((state) => state.filter);

  const isSmallDevice = useMediaQuery("only screen and (max-width : 540px)");

  const isSemiSmallDevice = useMediaQuery(
    "only screen and (min-width : 540px) and (max-width : 640px)",
  );
  const isSemiMediumDevice = useMediaQuery(
    "only screen and (min-width : 641px) and (max-width : 768px)",
  );
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 992px)",
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1314px)",
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1314px)",
  );

  const itemTemplate = (item: PokemonListItemData[]) => {
    return item && item != undefined && item != null ? (
      <div className="w-fillAvailable mb-2 mt-1 flex flex-row flex-wrap justify-center gap-4">
        {item.map((pokemonItem) => {
          return (
            <PokemonListItem
              pokemonListItemData={pokemonItem}
              key={pokemonItem.id}
              dialogManager={dialog}
            ></PokemonListItem>
          );
        })}
      </div>
    ) : (
      <>No encontro</>
    );
  };

  return (
    <>
      <div className="w-fillAvailable sm:h-fillAvailable mb-1 mt-1 h-full rounded-xl bg-white sm:pe-2 sm:ps-3">
        <VirtualScroller
          items={filterPokemons(
            pokemon,
            filter,
            getColsByMedia(
              isSmallDevice,
              isSemiSmallDevice,
              isSemiMediumDevice,
              isMediumDevice,
              isLargeDevice,
              isExtraLargeDevice,
            ),
          )}
          columns={1}
          itemSize={120}
          itemTemplate={itemTemplate}
          className="border-1 surface-border border-round w-fillAvailable h-fillAvailable"
          style={{
            height: isSmallDevice || isSemiSmallDevice ? "98%" : "99vh",
          }}
        />
      </div>
    </>
  );
};

function getColsByMedia(
  isSmallDevice: boolean,
  isSemiSmallDevice: boolean,
  isSemiMediumDevice: boolean,
  isMediumDevice: boolean,
  isLargeDevice: boolean,
  isExtraLargeDevice: boolean,
): number {
  if (isExtraLargeDevice) return 5;
  if (isLargeDevice) return 4;
  if (isMediumDevice || isSemiSmallDevice) return 3;
  if (isSmallDevice || isSemiMediumDevice) return 2;
  return 4;
}
