import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, AuthPage, UserPage, SearchPage, BookmarksPage, SettingsPage, FollowingPage } from "./pages";

// export const BASE_URL = "https://topicly.backend.thecrimsonbaron.com";
// export const BASE_URL = "http://localhost:8080";

function App() {
  return (
    <div
      className="theme-dark theme-color-magenta bg-primary text-current min-h-screen"
    >
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/:username" >
          <Route index element={<UserPage/>}/>
          <Route path="following" element={<FollowingPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
