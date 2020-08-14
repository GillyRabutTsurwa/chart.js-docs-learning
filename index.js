const chart = document.getElementById("myFirstChart").getContext("2d");

let myChart = new Chart(chart, {
	type: "bar",
	data: {
		labels: [ "Hiver", "Printemps", "Été", "Automne" ],
		datasets: [
			{
				labels: [ "Activity" ],
				data: [ 65, 99, 142, 90 ],
				backgroundColor: [
					"rgba(255, 99, 132, 0.5)",
					"rgba(54, 162, 235, 0.5)",
					"rgba(255, 206, 86, 0.5)",
					"rgba(75, 192, 192, 0.5)",
					"rgba(153, 102, 255, 0.5)",
					"rgba(255, 159, 64, 0.5)"
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)"
				]
				// Change the thickness of the bar. Don't quite get the units tho. will comment out for now.
				// barThickness: "50"
			}
		]
	},
	options: {
		// Lovely, this nested array objects continum makes the barchart (y-axis) start at 0 (je préfère) instead of begininng at the lowest data value. This way, the problem of the first value not showing, is solved.
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
