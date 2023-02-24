<script>
	import Navbar from './Navbar.svelte';
	import 'flowbite/dist/flowbite.css';
	import './styles.css';
	import '../app.postcss';
	//
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<div class="app">

	<Navbar/>

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		margin-top: 50px;
	}
</style>
