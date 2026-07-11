import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";

function CustomerLayout() {
  return (
    <div className="overflow-x-hidden relative h-full w-full px-2 md:px-10">
      <Navbar />

      <Outlet />
    </div>
  );
}

export default CustomerLayout;