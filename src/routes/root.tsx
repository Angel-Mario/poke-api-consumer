import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function Root() {
  window.matchMedia("(prefers-color-scheme: light)");
  const location = useLocation();
  const [isHomePageVisible, setHomePageVisible] = useState(true);

  useEffect(() => {
    setHomePageVisible(location.pathname === "/");
  }, [location]);

  return (
    <>
      <div className="flex h-screen flex-col sm:flex-row">
        <Header></Header>

        <main className="h-full w-full sm:h-screen">
          <div className="fixed -mt-3 h-5 w-full bg-gradient-to-b from-slate-200 to-white sm:mt-0 sm:h-screen sm:w-5 sm:bg-gradient-to-r"></div>
          {isHomePageVisible && <HomePage></HomePage>}
          {!isHomePageVisible && <Outlet></Outlet>}
        </main>
      </div>
    </>
  );
}

function HomePage() {
  return (
    <>
      <div className="ml-3 mr-1 mt-10 flex h-fillAvailable flex-col content-center items-center justify-center sm:mt-0">
        <section className="flex flex-col items-center rounded-xl border p-3 shadow-md shadow-slate-500">
          <img
            src="../../pikachu-home.png"
            alt="home-page-image"
            className="pointer-events-none w-72 select-none"
          ></img>
          <h1 className="mb-2 w-72 select-none text-2xl font-medium text-gray-600 smaller:w-96">
            Nice Boobs I mean... select a tab for start exploring.
          </h1>
        </section>
      </div>
    </>
  );
}
