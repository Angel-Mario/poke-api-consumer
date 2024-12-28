import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  window.matchMedia("(prefers-color-scheme: light)");
  return (
    <>
      <div className="flex h-screen flex-col sm:flex-row">
        <Header></Header>

        <main className="h-full w-full sm:h-screen">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}
