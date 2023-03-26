<script>
	import {Heading} from 'flowbite-svelte'
	import { A, Label, Input, List, Li} from 'flowbite-svelte'
	import { Button, Textarea } from 'flowbite-svelte'
	export let form;
	import {authToken} from '../../auth'
</script>

<div class="background">
	<div class="header">
		<Heading tag="h1" class="mb-4" customSize="text-3xl font-bold  md:text-2xl lg:text-xl">Contact Us Below</Heading>
	</div>
</div>
<div class="card">
	<div class="left">
		<Heading tag="h1" class="mb-4" customSize="text-xl font-bold  md:text-xl lg:text-xl">New Users</Heading>
			<div class = "info">
				<List tag="ul" class="space-y-1">
					<Li>
						<A class="font-medium hover:underline">Why SalaryMatch?</A>
					</Li>
					<Li>
						<A class="font-medium hover:underline">How do I use SalaryMatch?</A>
					</Li>
					<Li>
						<A class="font-medium hover:underline">Where does SalaryMatch get its data?</A>
					</Li>
				</List>
			</div>
		<br>
		<Heading tag="h1" class="mb-4" customSize="text-xl font-bold  md:text-xl lg:text-xl">Manage My Account</Heading>
			<div class = "info">
				<List tag="ul" class="space-y-1">
					<Li>
						To manage your account, please visit your profile page, by clicking on your
						<A href="./profile"class="font-medium hover:underline">profile picture.</A>
						There you can update your job preferences based on city climate, costs, and company data.

					</Li>
					
				</List>
			</div>

	</div>
	<div class="right">
		<div class= "scroll">
			<form method="POST" action="?/create">
				<div class="item">
					<div class="mb-6">
						<Label for="input-group-1" class="block mb-2">Your Email</Label>
						<Input type="email" name="email" placeholder="name@gmail.com">
							<svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
						</Input>
					</div>
				</div>
				<div class="item">
					<Label class='block mb-2' >First name</Label>
					<Input label="Email" name="firstname" placeholder=""/>
				</div>
				<div class="item">
					<Label class='block mb-2' >Last name</Label>
					<Input label="Email" name="lastname" placeholder=""/>
				</div>
				<div class="textarea">
					<Label class='block mb-2'>Please Leave Your Feedback/Questions Below</Label>
					<Textarea id="textarea-id" placeholder="Your message" name="message"/>
				</div>
				<div class = "submit">
						<button formaction="?/create" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
				</div>
			</form>
		</div>
	</div>
</div>

<style>
	.background {
		position:relative;
		background-image: linear-gradient(to right, var(--card-color), white);
		height: 150px;
		border-radius: 5px;
	}
	.header {
		position:absolute;
		text-align:center;
		justify-content: center;
		top: 50%;
		left: 42%;
	}
	.card {
        display: grid;
		grid-template-columns: 1fr 1fr;
        margin: 100px;
        margin-left: 30px;
        margin-right: 30px;
        //padding-bottom: 60px;
        padding-top: 40px;
		border-radius: 5px;
		background-color: rgb(188, 181, 223)
    }
	
	.left {
		background-image: linear-gradient(to bottom, var(--card-color), white);
		border-radius: 5px;
	}

	.right {
		display: grid;
        align-items: center;
        justify-content: center;
        flex-direction: row;
		grid-template-columns: unset;
        grid-template-rows: unset;
	}

	.scroll {
		scroll-snap-type: y mandatory;	
		-webkit-overflow-scrolling: touch;
		overflow: auto;
	}

	.item {
		margin-top: 30px;
		scroll-snap-align: start;
		text-align: center;
		position: relative;
		width: 300px;
	}
	
	.textarea {
		margin-top: 30px;
		//height: 50px;
		scroll-snap-align: start;
		text-align: center;
		position: relative;
	}
	.info {
		margin-left: 10px;
	}
	.submit {
		margin-top: 10px;
		scroll-snap-align: start;
	}

</style>