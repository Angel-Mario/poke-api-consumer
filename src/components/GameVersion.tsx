import { Ripple } from "primereact/ripple";
import ChevronIcon from "../assets/ChevronIcon";
import { GAME_VERSIONS } from "../utils/consts";
import { useEffect, useState } from "react";
import { usePokemonListItemStore } from "../utils/store";

export default function GameVersion() {
  const [gameVersion, setGameVersion] = useState("0");

  const setFilter = usePokemonListItemStore((state) => state.setVersion);

  useEffect(() => {
    let ver;
    ver = localStorage.getItem("gameVer");
    if (ver) {
      setGameVersion(ver);
    }
  }, []);

  useEffect(() => {
    setFilter(gameVersion);
    console.log("seteo version", gameVersion);
  }, [gameVersion]);

  return (
    <div className="absolute z-50 m-2 flex h-fit w-fillAvailable flex-row justify-end sm:h-fillAvailable sm:w-fit sm:items-end sm:justify-end">
      <div
        className="p-ripple -me-1 flex h-7 w-6 content-center rounded-s-full"
        style={{ background: "#3F3F3F" }}
        onClick={() => {
          setGameVersion(manageChange(+gameVersion - 1));
        }}
      >
        <Ripple></Ripple>
        <ChevronIcon fill="#ffffff"></ChevronIcon>
      </div>
      <h2
        className="line-clamp-1 h-7 w-36 px-2 text-center text-xl font-bold capitalize text-white"
        style={{ background: "#3F3F3F" }}
      >
        {GAME_VERSIONS[+gameVersion]}
      </h2>
      <div
        className="p-ripple -ms-1 flex h-7 w-6 content-center rounded-e-full"
        style={{ background: "#3F3F3F" }}
        onClick={() => {
          setGameVersion(manageChange(+gameVersion + 1));
        }}
      >
        <Ripple></Ripple>
        <ChevronIcon fill="#ffffff" className="rotate-180"></ChevronIcon>
      </div>
    </div>
  );
}

function manageChange(change: number): string {
  console.log("change", change);
  if (change < 0) {
    localStorage.setItem("gameVer", `${GAME_VERSIONS.length - 1}`);
    console.log("1");
  } else if (change == GAME_VERSIONS.length) {
    localStorage.setItem("gameVer", "0");
    console.log("2");
  } else {
    localStorage.setItem("gameVer", `${change}`);
    console.log("3");
  }
  return localStorage.getItem("gameVer")!;
}
