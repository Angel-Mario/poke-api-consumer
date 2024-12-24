import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <>
      <div className="flex h-screen flex-row">
        <Header></Header>

        <main className="h-full w-full overflow-auto">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}
