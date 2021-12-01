import React from "react";
import { Routes, Route } from "react-router-dom";

import { SignIn, SignUp } from "pages";

export default function authRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}
