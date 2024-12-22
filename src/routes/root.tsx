import { Outlet } from "react-router-dom";
// import { useState } from "react";
import Header from "../components/Header";

export default function Root() {
  // const [value, setValue] = useState("");

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
