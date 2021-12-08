import React, { useContext } from "react";
import { AuthContext } from "contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = function () {
  const { signed } = useContext(AuthContext);

  if (signed) {
    return <AppRoutes />;
  }
  return <AuthRoutes />;
};

export { Routes };
