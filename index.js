// Make a canvas element in the HTML. The chart goes in there.
// Get the canvas element in the Javascript (below)
const chart = document.getElementById("myFirstChart").getContext("2d");

// To create a chart, we need to instantiate the Chart class
let myChart = new Chart(chart, {
  // Reminder - type is the type of chart.
  // Other types include: line, bar, radar, doughnut/pie, polar area, bubble, scatter, area & mixed
  type: "bar",

  // The data for our dataset
  data: {
    labels: ["Mario", "Winston", "Gigi", "Christopher", "Juma", "Kyoto"],
    datasets: [
      {
        label: "# of votes",
        // NOTEIMPORTANT: for bar charts, the data.datasets.data array must correspond with the data.labels array. Meaning, if we look at the two, Mario will have a value of 12, Winston will have a value of 19, Gigi of 3, and so on. ça c'est tres important
        data: [12, 19, 3, 5, 2, 3],
        //NOTEIMPORTANT: the background colour will ALSO match with the current label. So Mario's bar will be the first colour in the array, Winston's the second, etc. It all matches, so the length of the arrays for all of these must be the same.
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        // NOTE: Same applies for border colour, and probably other properties that I do not know of yet.
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        // width of the border. Pree self explanatory.
        borderWidth: 2,
      },
    ],
  },

  // Configuration options go here.
  // So far, Sielewi chochote yenye ikuwayo hapa.
  options: {
    // Don't understand scales, don't know what scales are.
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    // These I understand. Will delete and make a sperata branch for these
    title: {
      display: true,
      text: "Number of votes on who's the BOSS",
    },
    legend: {
      display: true,
      labels: {
        fontColor: "rgb(2, 99, 132)",
      },
      position: "top",
    },
  },
});
