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

const dataDoughnut = {
  labels: ["A", "B", "C"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
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

const optionDoughnut = {
  plugins: {
    legend: {
      labels: {
        color: "#495057",
      },
    },
  },
};

export { dataBar, dataDoughnut, options, optionDoughnut };
