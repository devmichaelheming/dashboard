import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./styles";

const Main = function () {
  return (
    <Container>
      <h1>Main</h1>

      <Outlet />
    </Container>
  );
};

export default Main;
