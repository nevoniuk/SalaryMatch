<script>
	import { Tabs, TabItem, Heading} from 'flowbite-svelte'
	import { P, A, Label, Input} from 'flowbite-svelte'
	import { Button, Textarea} from 'flowbite-svelte'
	export let form;
	import {authToken} from '../../auth'
</script>

<div class="background">
	<div class="header">
		<Heading tag="h1" class="mb-4" customSize="text-3xl font-bold  md:text-2xl lg:text-xl">FAQ</Heading>
	</div>
</div>
<br>
<br>
<div class="questions">
	<Tabs>
		<TabItem open title="Getting Started">
			<div class="left">
					<Heading tag="h1" class="mb-4" customSize="text-xl font-bold  md:text-xl lg:text-xl">Why SalaryMatch?</Heading>
						<div class = "info">
							<P color='text-gray-500 dark:text-gray-400'>Every year lucky students and job seekers find themselves in a position where they have to evaluate multiple job offers from great companies. One of the main factors in comparing job offers
							is considering the cost of living for the new place you’ll be living in. There are some calculators you can find online that give you some info
								on cost of living in cities, but they are usually limited to housing,
								food, and transportation. SalaryMatch aims to simplify the job offer
								evaluation process by centralizing this information. Furthermore,
								we want to allow users to compare multiple jobs by factoring in
									the unique cost of living for each offer. We feel this would be
									a great resource to graduating college students such as ourselves
									as they take the next big step of their lives, as well as seasoned
									professionals no matter their industry.
							</P>
						</div>
					<br>
			</div>
		</TabItem>
		<TabItem title="Contact Us">
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
							<div class = "submit">
								<button formaction="?/create" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</TabItem>
		<TabItem title="Manage My Account">
			<div class="left">
				<Heading tag="h1" class="mb-4" customSize="text-xl font-bold  md:text-xl lg:text-xl">Manage My Account</Heading>
					<div class = "info">
						<P color='text-gray-500 dark:text-gray-400'>
								To manage your account, please visit your profile page, by clicking on your
								<A href="./profile"class="font-medium hover:underline">profile picture.</A>
								There you can update your job preferences based on city climate, costs, and company data.

						</P>
					</div>
			</div>
		</TabItem>
		<TabItem title="Tools">
			<div class="left">
				<Heading tag="h1" class="mb-4" customSize="text-xl font-bold  md:text-xl lg:text-xl">SalaryMatch Tools</Heading>
					<div class = "info">
						<Heading tag="h1" class="mb-4" customSize="text-md font-medium">Job Offer Comparison</Heading>
						<P color='text-gray-500 dark:text-gray-400'>SalaryMatch allows you to upload your job offers by clicking
						on the <A href="./createjoboffer"class="font-medium hover:underline">Add Offer</A> tab and update/view your offers by clicking on the <A href="./UpdateOffer"class="font-medium hover:underline">Update Offer</A> tab. This saves you the time of
						calculating how your offer's included bonus, salary, relocation, location etc. compare with your preferences and your other
						offers.
						</P>
						<br>
						<br>
						<Heading tag="h1" class="mb-4" customSize="text-md font-medium">City and State Search</Heading>
						<P color='text-gray-500 dark:text-gray-400'>If your job offer(s) range from multiple cities and states, you can use our
						<A href="./CityOptions"class="font-medium hover:underline">City</A> and <A href="./state"class="font-medium hover:underline">State</A> search tools to research factors such as average costs of rent, groceries, utilities, water, as well as demographics and weather
						information that affect your job preferences.
						</P>
						<br>
						<br>
						<Heading tag="h1" class="mb-4" customSize="text-md font-medium">User Reviews</Heading>
						<P color='text-gray-500 dark:text-gray-400'>SalaryMatch aims to connect its users by providing a way for them to leave reviews for both
					    for past job locations and companies. These tools can be accessed under the <A href="./CityOptions"class="font-medium hover:underline">City</A> and 
						<A href="./state"class="font-medium hover:underline">State</A> tabs.
						</P>	
					</div>
			</div>
		</TabItem>
	</Tabs>
</div>
<style>
	.questions {
		width: 100%;  
	}
	.background {
		position:relative;
		background-image: linear-gradient(to right, var(--card-color), white);
		bottom: 0px;
		border-radius: 5px;
		text-align:center;
		justify-content: center;
	}
	.header {
		position:absolute;
		text-align:center;
		justify-content: center;
		top: 50%;
		left: 42%;
	}
	
	
	
	.left {
		background-image: linear-gradient(to bottom, var(--card-color), white);
		border-radius: 5px;
		text-align: center;
		justify-content: center;
	}

	.right {
		display: grid;
        align-items: center;
        justify-content: center;
        flex-direction: row;
		grid-template-columns: unset;
        grid-template-rows: unset;
		background-image: linear-gradient(to bottom, var(--card-color), white);
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
		scroll-snap-align: start;
		text-align: center;
		position: relative;
	}
	.info {
		text-align: center;
		margin-left: 10px;
		margin-right: 10px;
	}
	.submit {
		margin-top: 10px;
		scroll-snap-align: start;
	}

</style>