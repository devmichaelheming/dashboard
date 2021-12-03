import React, { useContext } from "react";
import AuthContext from "contexts/auth";

import AuthRoutes from "routes/auth.routes";
import AppRoutes from "routes/app.routes";

const routes = function () {
  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default routes;
