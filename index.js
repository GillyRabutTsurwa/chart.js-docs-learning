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
				// data: [ 0, 10, 5, 2, 20, 30, 15 ]
				//NOTE: The x value is guesstimated so there's not much point in setting them. The array is good enough. Plus, the x values don't show, either when you hover, nor in the x axis. But I like it because it looks more explicit.
				data: [
					{
						x: 0,
						y: 10
					},
					{
						x: 5,
						y: 15
					},
					{
						x: 10,
						y: 25
					},
					{
						x: 15,
						y: 10
					},
					{
						x: 20,
						y: 35
					},
					{
						x: 25,
						y: 20
					},
					{
						x: 30,
						y: 20
					}
				]
			}
		]
	}
});
