const chart = document.getElementById("myFirstChart").getContext("2d");

let myChart = new Chart(chart, {
	type: "radar",
	data: {
		labels: [ "Coding", "Designing", "Napping", "Running", "Driving", "Naturing" ],
		//NEW: I JUST realised for the first time que l'on peut utiliser plusieurs jeux de données (datasets)
		//NEW: To name your legend, you need to give each dataset a LABEL.
		//NEW:NOTE: I understand datasets now. Dataset is one representation of data. We can have multiple of this in a graph. Just like we can have more than one bar for one section in bar graph. Chart.js is Cooooo
		datasets: [
			{
				label: "Gilbert",
				data: [ 20, 17, 27, 5, 19, 22 ],
				backgroundColor: [ "rgba(255, 99, 132, 0.5)" ]
			},
			{
				label: "Denisa",
				data: [ 10, 4, 15, 19, 6, 12 ],
				backgroundColor: [ "rgba(54, 162, 235, 0.5)" ]
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
