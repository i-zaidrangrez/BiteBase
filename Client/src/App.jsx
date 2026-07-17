import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import OpenRoutes from "./components/OpenRoutes.jsx";
import Cart from "./pages/Cart.jsx";
import CustomerLayout from "./Layout/CustomerLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardMenu from "./components/dashboard/DashboardMenu.jsx";
import AdminLayout from "./Layout/AdminLayout.jsx";
import FindAccount from "./pages/FindAccount.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/welcome" element={<Welcome />} />

        <Route
          path="/register"
          element={
            <OpenRoutes>
              <Register />
            </OpenRoutes>
          }
        />

        <Route
          path="/login"
          element={
            <OpenRoutes>
              <Login />
            </OpenRoutes>
          }
        />
        <Route
          path="/findAccount"
          element={
            <OpenRoutes>
              <FindAccount />
            </OpenRoutes>
          }
        />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoutes>
              <CustomerLayout />
            </ProtectedRoutes>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoutes>
                <AdminLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Dashboard />} />

            <Route path="menu" element={<DashboardMenu />} />

            {/* <Route path="orders" element={<Orders />} />

            <Route path="tables" element={<Tables />} />

            <Route path="customers" element={<Customers />} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
