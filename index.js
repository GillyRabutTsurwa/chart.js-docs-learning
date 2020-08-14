const chart = document.getElementById("myFirstChart").getContext("2d");

let myChart = new Chart(chart, {
	type: "line",
	data: {
		labels: [ "Dogs", "Cats", "Pigs", "Donkeys", "Lions", "Hyenas", "Mice" ],
		datasets: [
			{
				label: "My first dataset",
				lineTension: 0, // delete this and the lines will go back to smooth
				backgroundColor: "transparent",
				borderColor: "rgb(255, 99, 132)",
				data: [ 0, 10, 5, 2, 20, 30, 15 ]
			}
		]
	}
});
