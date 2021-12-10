import React from "react";
import { Chart } from "primereact/chart";
import { Grid } from "@mui/material";

import { Widget } from "./Widget";
import { dataBar, dataDoughnut, options, optionDoughnut } from "./data";
import {
  Container,
  SectionWidget,
  SectionCharts,
  SectionTable,
} from "./styles";

const Home = function () {
  return (
    <Container>
      <SectionWidget>
        <Grid item xs={6} md={2.9}>
          <Widget title="SALDO DISPONIVEL" />
        </Grid>

        <Grid item xs={6} md={2.9}>
          <Widget title="LUCRO" />
        </Grid>

        <Grid item xs={6} md={2.9}>
          <Widget title="GASTOS" />
        </Grid>

        <Grid item xs={6} md={2.9}>
          <Widget title="VALOR EXAMPLE" />
        </Grid>
      </SectionWidget>
      <SectionCharts>
        <Grid item xs={6} md={8}>
          <Chart
            type="bar"
            data={dataBar}
            options={options}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={6} md={3.9}>
          <Chart
            type="doughnut"
            data={dataDoughnut}
            options={optionDoughnut}
            style={{ width: "75%" }}
          />
        </Grid>
      </SectionCharts>
      <SectionTable>
        <Grid item xs={12} md={12} />
      </SectionTable>
    </Container>
  );
};

export { Home };
