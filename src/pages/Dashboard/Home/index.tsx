import React from "react";
import { GMap } from "primereact/gmap";

import { Sidebar } from "components";
import { Container, Main } from "./styles";

const Home = function () {
  const options = {
    center: { lat: 36.890257, lng: 30.707417 },
    zoom: 12,
  };

  return (
    <Container>
      <Sidebar />
      <Main>
        <GMap options={options} style={{ width: "100%", minHeight: "320px" }} />
      </Main>
    </Container>
  );
};

export default Home;
