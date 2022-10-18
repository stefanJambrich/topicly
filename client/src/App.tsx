import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, UserPage } from "./pages";
import { Layout, Main, Navbar, SideBar } from "./components";
import "./App.css";

function App() {
  return (
    <Layout>
      <Navbar span="1" />
      <Main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/:userId" element={<UserPage />} />
        </Routes>
      </Main>
      <SideBar span="2">
        <p>Side bar</p>
      </SideBar>
    </Layout>
  );
}

export default App;
