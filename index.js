// NOTE: Targeting our canvas element, where our graph sera,
const chart = document.getElementById("myFirstChart").getContext("2d");

// NOTE: Making a chart with the Chart Object.
let myChart = new Chart(chart, {
  // NOTE: The type of chart we want to create
  type: "line",

  // NOTE: The data object, which will contain all the useful info for our graph, including labels and datasets.
  data: {
    labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet"],
    // NOTE: dataset is the set of data for a particular [whatever] in the graph.
    // NOTE: can have one or multiple
    datasets: [
      {
        label: "My first dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(0, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },

  // NOTE: Special configuration for our graphs go here
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
