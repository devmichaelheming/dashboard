import React from "react";
import { Routes, Route } from "react-router-dom";

import { FormLayout, SignIn, SignUp } from "pages";

export default function authRoutes() {
  return (
    <FormLayout>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </FormLayout>
  );
}
