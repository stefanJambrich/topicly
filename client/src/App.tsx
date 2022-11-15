import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, UserPage } from "./pages";
import { Main, Navbar, SideBar } from "./components";

function App() {
  return (
    <div
      className="theme-dark theme-color-magenta bg-primary text-current min-h-screen"
    >
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/:userId" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
