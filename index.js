const chart = document.getElementById("myFirstChart").getContext("2d");

let myChart = new Chart(chart, {
	type: "pie",
	data: {
		labels: [ "Red", "Blue", "Yellow" ],
		datasets: [
			{
				data: [ 10, 20, 30 ],
				backgroundColor: [ "rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 206, 86)" ]
			}
		]
	},
	options: {
		// Main difference between doughnut and pie: cutOutPercentage
		cutoutPercentage: 50
	}
});
