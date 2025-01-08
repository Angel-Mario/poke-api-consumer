import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Ripple } from "primereact/ripple";
import ChevronIcon from "../assets/ChevronIcon";
import GameVersion from "../components/GameVersion";

export default function Root() {
  window.matchMedia("(prefers-color-scheme: light)");
  return (
    <>
      <div className="flex h-screen flex-col sm:flex-row">
        <Header></Header>
        <main className="h-full w-full sm:h-screen">
          <div className="fixed -mt-3 h-5 w-full bg-gradient-to-b from-slate-200 to-white sm:mt-0 sm:h-screen sm:w-5 sm:bg-gradient-to-r"></div>
          <Outlet></Outlet>
        </main>

        {/* pokemon vers selection */}
        <GameVersion />
      </div>
    </>
  );
}
