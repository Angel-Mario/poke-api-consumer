import { SetStateAction, useState } from "react";
import PokeIcon from "../assets/PokeIcon";
import SearchIcon from "../assets/SearchIcon";

export function HeaderNav({}) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ query });
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <nav
      className="flex h-2/5 flex-col-reverse rounded-b-3xl"
      style={{
        background: "#fa6555",
      }}
    >
      <div className="m-3 flex flex-row items-center rounded-full bg-white">
        <div className="ms-4">
          <SearchIcon></SearchIcon>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="querey"
            type="text"
            className="m-2 me-4 w-full appearance-none bg-transparent font-mono text-slate-700 placeholder:text-slate-400 focus:outline-none"
            placeholder="Bulbasaur, 1, Grass"
          ></input>
        </form>
      </div>

      <div className="relative flex h-full w-full flex-row-reverse overflow-hidden">
        <h1 className="text sticky z-10 m-3 flex w-full place-items-end text-2xl font-bold text-white">
          What Pokemon
          <br />
          are you looking for?
        </h1>
        <div className="absolute flex w-64 -translate-y-20 translate-x-20 overflow-hidden">
          <PokeIcon fill="#e15b4d"></PokeIcon>
        </div>
      </div>
    </nav>
  );
}
