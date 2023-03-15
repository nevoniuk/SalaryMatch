<script>
 import {authToken} from '../../../auth';
 export let months;
 let max = 0;
 const d = new Date();
 let month = d.getMonth();
 for (let i = 0; i < months.length; i++) {
	if (months[i] > max) {
		max = months[i];
	}
 }
 let datapoints = [];
 for (let i = 0; i < months.length; i++) {
	datapoints[i] = (months[i] / max) * 200;
	console.log(datapoints[i]);
 }
let monthNames = ["Jan", "Feb", "March", "April", "May", "June",
  "July", "August", "Sept", "Oct", "Nov", "Dec"];
let i = month - 1;
let count = 0;
let monthsOrder = [];
let year = 1899 + d.getYear();
while (count < 12) {
	monthsOrder[count] = monthNames[i];
	count++;
	i=i+1;
	if (i == monthNames.length) {
		i = 0;
	}
}
console.log(monthsOrder[11]);

</script>
<div class="container">
	<div class="temp-labels">
		<p style="margin-top: 0px">{max}</p>
		<p style="margin-top: 90px">{max / 2}</p>
		<p style="margin-top: 90px">0</p>
	</div>
	<div class="graph-container">
		<figure class="css-chart" style="--widget-size: 200px;">
			<ul class="line-chart">
				{#each datapoints as point, i}
					<li>
						<div class="data-point" data-value={point} style="bottom: {point}px; margin-left: {i * 40}px;"></div>
					</li>
				{/each}
			</ul>
		</figure>
		<div class="month-labels">
			{#each monthsOrder as month}
				<p style="margin-right: 24px;">{month}</p>
			{/each}
		</div>
		<div class="year-labels">
			<p>{year}</p>
			<p>{year + 1}</p>
		</div>
	</div>
	

</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
	}
	.graph-container {
		display:flex;
		flex-direction: column;
	}
	.css-chart {
		border-bottom: 2px solid;
		border-left: 2px solid;
		height: 200px;
		margin: 1em;
		padding: 0;
		position: relative;
		width: 500px;
	}
	.line-chart {
		list-style: none;
		margin: 0;
		padding: 0;
		margin-left: 20px;
	}

	.data-point {
		background-color: blue;
		border: 2px solid white;
		border-radius: 50%;
		height: 15px;
		position: absolute;
		width: 15px;
	}
	.month-labels {
		display:flex;
		flex-direction: row;
		font-size: 8px;
		margin-left: 25px;
	}
	.year-labels {
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 10px;
	}
	.temp-labels {
		margin-right: 8px;
		top: 40px;
		font-size: 10px;
	}
</style>
