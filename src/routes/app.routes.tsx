import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/Dashboard/Home";

export default function appRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
    </Routes>
  );
}
