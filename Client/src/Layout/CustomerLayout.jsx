import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

function CustomerLayout() {
  return (
    <div className="overflow-x-hidden relative h-full w-full">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default CustomerLayout;