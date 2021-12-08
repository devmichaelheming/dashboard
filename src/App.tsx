import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import { Routes } from "routes";
import { AuthProvider } from "./contexts/auth";

const App = function () {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
        <GlobalStyles />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
