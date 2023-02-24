<script lang="ts">
	import { Button} from 'flowbite-svelte';
	import { Heading, Label} from 'flowbite-svelte';

	let onSubmit = async () => {
		console.log("submit");
		var state = document.getElementsByName("enterdState")[0].value;
		console.log(state);
		var url = "https://salarymatch.azurewebsites.net/api/states/search/" + state;
		const post = (await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}).then(async data => {
			console.log(await data.json());
			if (data.status == 200||data.status == 201) {
				console.log("success");
				// window.location.href = "/state/" + data.id;
			} else {
				console.log("fail");
				alert("State Submission Failed")
			}

		}).catch(err => console.log('err')));
	}
</script>

<main>
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Select A State</Heading>	
	</div>
	<div class= 'stateOptions'>
		<div class='child1'>
			<form>
				<input type="text" name="enterdState" placeholder="Enter State" />
				<div class="button">
					<button on:click={onSubmit}>
						<p>Submit</p>
					</button>
				</div>
			</form>
		</div>
		<div class='child1'>
            <Button href="/state/6ed4a3bd-4c9a-4a3f-a6f6-ebbb5c7ae27a">California</Button>
		</div>
		<div class='child1'>
            <Button href="/state/e86b7426-787f-42ec-84d7-f2b53815539c">D.C.</Button>
        </div>
		<div class='child1'>
            <Button href="/state/8b7e118d-c63a-4f4a-bbf3-c1df7615a0d3">Illinois</Button>
        </div>
		<div class='child1'>
            <Button href="/state/2cb26ff7-b99b-4c4f-8797-f27cae3b563e">Indiana</Button>
        </div>
							
	</div>
</main>

<style>
	.title {
		position: absolute;
		top: 100px;
		left: 525px;
	}
	.stateOptions {
		display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 60px;
        grid-gap: 20px;
		position: absolute;
		left: 560px;
		top: 200px;
	}
	.child1 {
		display: flex;
        align-items: center;
        justify-content: center;
	}
	.card {
        width: 100%;
        background-color: green;
        display: flex;
        padding: 30px;
        background-color: var(--card-color);
        box-shadow: 2px 2px 4px 0px rgba(34, 17, 66,0.4);
        justify-content: center;
        flex-wrap: wrap;
    }

    .button {
        background-color:rgb(142, 134, 230);
        padding: 5px;
        border-radius: 4px;
        box-shadow: 1px 1px 3px 0px rgba(34, 17, 66,0.4);
        margin: 8px;
        margin-left: 100px;
        margin-right: 100px;
    }
</style>