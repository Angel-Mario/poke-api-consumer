import React, { SetStateAction, useEffect, useState } from "react";
import PokeIcon from "../../assets/PokeIcon";
import SearchIcon from "../../assets/SearchIcon";
import { useFilterStore } from "../../utils/store";
import { useDebounce } from "@uidotdev/usehooks";
export function HeaderNav({}) {
  const [query, setQuery] = useState("");

  const setFilter = useFilterStore((state) => state.setFilter);
  const debouncedSearchTerm = useDebounce(query, 250);

  useEffect(() => {
    setFilter(query);
  }, [debouncedSearchTerm]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ query });
    setFilter(query);
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <nav
      className="flex h-4/5 flex-col-reverse rounded-b-3xl sm:h-2/5"
      style={{
        background: "#fa6555",
      }}
    >
      <div className="m-3 flex flex-row items-center overflow-hidden rounded-full bg-white">
        <div className="ms-4">
          <SearchIcon></SearchIcon>
        </div>
        <form onSubmit={handleSubmit} style={{ width: "90%" }}>
          <input
            onChange={handleChange}
            name="query"
            type="text"
            className="m-2 me-4 w-full appearance-none bg-transparent font-mono text-slate-700 placeholder:text-slate-400 focus:outline-none"
            placeholder="Bulbasaur, 1, Grass"
          ></input>
        </form>
      </div>

      <div className="relative flex h-full w-full flex-row-reverse overflow-hidden sm:flex-col-reverse navBar:flex-row-reverse">
        <h1 className="text sticky z-10 m-3 flex w-full place-items-end text-xl font-bold text-gray-100 navBar:text-2xl">
          What Pokemon
          <br />
          are you looking for?
        </h1>

        <div className="absolute flex w-52 overflow-hidden sm:w-60 sm:translate-x-6 sm:translate-y-7 navBar:-translate-y-20 navBar:translate-x-20">
          <PokeIcon fill=" #e15b4d"></PokeIcon>
        </div>
      </div>
    </nav>
  );
}
