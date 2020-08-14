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
		labels: [ "Rouge", "Bleu", "Jaune", "Vert", "Violet", "Orange" ],
		datasets: [
			{
				labels: [ "# of votes" ],
				data: [ 12, 19, 3, 5, 2, 3 ],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)"
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)"
				],
				borderWidth: 1
			}
		]
	},

	// Configuration options go here.
	// So far, Sielewi chochote yenye ikuwayo hapa.
	options: {
		// Don't understand scales, don't know what scales are.
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					}
				}
			]
		},
		// These I understand. Will delete and make a sperata branch for these
		title: {
			display: true,
			text: "Akinde"
		},
		legend: {
			display: true,
			labels: {
				fontColor: "rgb(2, 99, 132)"
			},
			position: "right"
		}
	}
});
