import { useFilterStore } from "../utils/store";

export default function useFilterStoreHook() {
  const filterText = useFilterStore((state) => state.filter);
  const ver = useFilterStore((state) => state.version);

  return { filterText, ver };
}
