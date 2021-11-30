import React from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard, Home, Users } from "pages";

export default function routes() {
  return (
    // <Routes>
    //   <Route index element={<Home />} />
    //   <Route path="/dashboard" element={<Dashboard />}>
    //     <Route path="users" element={<Users />} />
    //   </Route>
    // </Routes>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
}
