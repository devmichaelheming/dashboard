import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import { AuthProvider } from "./contexts/auth";
import Rotues from "./routes";

const App = function () {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Rotues />
        <GlobalStyles />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
