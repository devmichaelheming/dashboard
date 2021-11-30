import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Routes from "./routes";

const App = function () {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
