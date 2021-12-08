import React from "react";
import { Chart } from "primereact/chart";
import { Grid } from "@mui/material";

import { api } from "services/api";

import { Container, Section } from "./styles";

const Home = function () {
  api.get("/getFixedIncomeClassData").then(response => {
    console.log(response);
  });

  const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "#1E99FE",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        data: [50, 25, 12, 48, 56, 76, 42],
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "#66BB6A",
        data: [21, 84, 24, 75, 37, 65, 34],
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: "#FFA726",
        data: [41, 52, 24, 74, 23, 21, 32],
      },
    ],
  };

  const dataLine = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        tension: 0.4,
        borderColor: "#42A5F5",
      },
      {
        label: "Second Dataset",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderDash: [5, 5],
        tension: 0.4,
        borderColor: "#66BB6A",
      },
      {
        label: "Third Dataset",
        data: [12, 51, 62, 33, 21, 62, 45],
        fill: true,
        borderColor: "#FFA726",
        tension: 0.4,
        backgroundColor: "rgba(255,167,38,0.2)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };

  return (
    <Container>
      <Section>
        <Grid item xs={6} md={6}>
          <Chart
            type="bar"
            data={dataBar}
            options={options}
            style={{ height: "400px" }}
          />
        </Grid>
        <Grid item xs={6} md={5.8}>
          <Chart
            type="line"
            data={dataLine}
            options={options}
            style={{ height: "400px" }}
          />
        </Grid>
      </Section>
    </Container>
  );
};

export { Home };
