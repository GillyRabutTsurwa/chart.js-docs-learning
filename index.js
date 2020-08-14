const chart = document.getElementById("myFirstChart").getContext("2d");

let myChart = new Chart(chart, {
	type: "radar",
	data: {
		labels: [ "Coding", "Designing", "Napping", "Running", "Driving", "Naturing" ],
		datasets: [
			{
				data: [ 20, 17, 27, 5, 19, 22 ],
				backgroundColor: [ "rgba(255, 99, 132, 0.4)" ]
			}
		]
	},
	options: {
		scale: {
			ticks: {
				//Lovely, we can make the start value to be 0
				// and we can manually set the max (and not rely on our array), even though it gives us a nice estimate on where to set itself to make the data look nice. Nevertheless, we have more control
				beginAtZero: true,
				max: 30
			}
		}
	}
});
