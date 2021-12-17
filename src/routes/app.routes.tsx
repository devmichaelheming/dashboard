import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Profile, Settings, Users, NotFound } from "pages/Dashboard";

import { Sidebar } from "components";

export default function appRoutes() {
  return (
    <Sidebar>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Sidebar>
  );
}
