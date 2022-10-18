import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, UserPage } from "./pages";
import { Main, Navbar, SideBar } from "./components";

function App() {
  return (
    <div className="theme-dark theme-color-magenta bg-primary text-current min-h-screen grid grid-cols-12 gap-10">
      <Navbar />
      <Main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/:userId" element={<UserPage />} />
        </Routes>
      </Main>
      <SideBar>
        <p className="text-center text-secondary">Side bar</p>
      </SideBar>
    </div>
  );
}

export default App;
