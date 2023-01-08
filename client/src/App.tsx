import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, AuthPage, UserPage } from "./pages";

export const BASE_URL = "https://topicly.backend.thecrimsonbaron.com";

function App() {
  return (
    <div
      className="theme-dark theme-color-magenta bg-primary text-current min-h-screen"
    >
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/:userId" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
