import React from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "pages";

export default function appRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
