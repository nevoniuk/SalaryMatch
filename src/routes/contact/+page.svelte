<script>
	import {Heading} from 'flowbite-svelte'
	import { Label, Input } from 'flowbite-svelte'
</script>

<div class="background">
	<div class="header">
		<Heading tag="h1" class="mb-4" customSize="text-3xl font-bold  md:text-2xl lg:text-xl">Contact Us Below</Heading>
	</div>
</div>
<div class="card">
	<div class="right">
		<div class = "item">
			<div class="mb-6">
				<Label for="input-group-1" class="block mb-2">Your Email</Label>
				<Input id="email" type="email" placeholder="name@gmail.com">
					<svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
				</Input>
			</div>
		</div>
		<div class = "item">
			<Label class='block mb-2' >First name</Label>
			<Input label="Email" id="email" name="email" required placeholder=""/>
		</div>
		<div class = "item">
			<Label class='block mb-2' >Last name</Label>
			<Input label="Email" id="email" name="email" required placeholder=""/>
		</div>
	</div>
	<div class="left">
		<Label class='block mb-2' >example</Label>
	</div>
</div>

<style>
	.background {
		position:relative;
		background-image: linear-gradient(to right, var(--card-color), white);
		height: 150px;
	}
	.header {
		position:absolute;
		text-align:center;
		justify-content: center;
		top: 50%;
		left: 42%;
	}
	.card {
        display: flex;
        align-items: center;
        align-self: center;
        justify-content: center;
        flex-direction: column;
        margin: 100px;
        margin-left: 30px;
        margin-right: 30px;
        padding-bottom: 60px;
        padding-top: 40px;
		height: 300px;
		background-color: rgb(188, 181, 223)
    }
	.grid {
		
	}
</style>