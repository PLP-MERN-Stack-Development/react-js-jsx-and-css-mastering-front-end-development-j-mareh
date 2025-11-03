import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

export default function App() {
  return (
    <Routes>
      {/* Layout wraps all routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Route>
    </Routes>
  );
}
