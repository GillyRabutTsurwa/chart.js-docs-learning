const chart = document.getElementById("myFirstChart").getContext("2d");

let myChart = new Chart(chart, {
	// The type of chart we want to create
	type: "line",

	// The data for our dataset
	data: {
		labels: [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet" ],
		datasets: [
			{
				label: "My first dataset",
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgb(255, 99, 132)",
				data: [ 0, 10, 5, 2, 20, 30, 45 ]
			}
		]
	},

	// Configuration options go here.
	// So far, Sielewi chochote yenye ikuwayo hapa.
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					}
				}
			]
		}
	}
});
